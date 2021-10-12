import path from 'path'
import gogocode from 'gogocode'

import * as proto from '@/proto'
import * as collecter from '@/collect'






const PROTO_DIR = path.join(__dirname, '../test/proto');
const INPUT_DIR = path.join(__dirname, '../test/gen')
const OUTPUT_DIR = path.join(__dirname, '../out')





async function testParse() {
	const info = await proto.parse(path.join(PROTO_DIR, 'collect_material.proto'))
	 
	info.messages.forEach(msg => {
		console.log(msg)
	})
	
}

async function testCollect() {
	const infos = await collecter.collectAll(INPUT_DIR)
	console.log(infos)
}


async function testModifySource() {
	const newCode = gogocode.loadFile(path.join(INPUT_DIR, 'collect_material_pb.d.ts'), {})
	.find("export class $_$type extends jspb.Message { } ").each(item => {
		
		//console.log(item.match.type[0].value)
		//item.find("msg.$_$name()").each(item1 => console.log(item1.match))
	 	//console.log(item.match)
		const type = item.match.type[0].value
		item.find('toObject(includeInstance?: boolean): $_$').each(item1 => {
			//console.log(item1)
			//item1.after(`fromObject(obj): $_$`)
		})
		//console.log('------------')
		//item.match.type.forEach(type => {
			//console.log(type.value)
			//console.log(type.node)
		//})
		
	}).root().generate()

	
	const newCode1 = gogocode.loadFile(path.join(INPUT_DIR, 'collect_material_pb.d.ts'), {})
			.replace(`
			export class $_$type extends jspb.Message {
			
			toObject(includeInstance?: boolean): $_$ret;
			$$$
			 }	
			`, `export class $_$type extends jspb.Message {
				
				toObject(includeInstance?: boolean): $_$type.AsObject;
				fromObject(obj: $_$type.AsObject);
				$$$
			}`).generate()
	


	//fs.mkdirSync(outputDir)
	const outFile = path.join(OUTPUT_DIR, 'collect_material_pb.d.ts')
	//gogocode.writeFile(newCode1, outFile)
	
}


function testAddSouce() {
	const newCode = gogocode.loadFile(path.join(INPUT_DIR, 'collect_material_pb.js'), {})
		.find('$_$type.toObject = function(includeInstance, msg) {}').each(item => {
			const type = item.match.type[0].value
			item.after(`
			${type}.fromObject = function(msg, obj) {
				if('uid' in obj) {
					jspb.Message.setField(msg, 1, obj['uid'])
				}
			}
		`)
		})
		.root().generate()
	const outFile = path.join(OUTPUT_DIR, 'collect_material_pb.js')
	gogocode.writeFile(newCode, outFile)
}


//testCollect()
//testParse()
//testModifySource()
//testAddSouce()