
import path from 'path'
import gogocode from 'gogocode'
import fse from 'fs-extra'


import * as collecter from '@/collect'
import * as protoer from '@/proto'
import * as renamer from '@/rename'
import * as builder from '@/build'





export async function enhance(inputDir: string, outputDir: string, protoDir: string, isCopyOther: boolean) {

	console.log(`cmd input ${inputDir}`)
	console.log(`cmd output ${outputDir}`)
	console.log(`cmd proto ${protoDir}`)
	console.log(`cmd isCopyOther ${isCopyOther}`)

	fse.ensureDirSync(outputDir)

	const cInfo = await collecter.collectAll(inputDir)
	for (const info of cInfo.getAll()) {
		const pFile = path.join(protoDir, `${info.protoName}.proto`)
		const pInfo = await protoer.parse(pFile)

		const defAST = gogocode.loadFile(info.defFile, {}) 
		const implAST = gogocode.loadFile(info.implFile, {}) 

		renamer.process(defAST, implAST, pInfo)
		builder.process(defAST, implAST, pInfo)

		writeToFile(defAST, info.defFile, outputDir)	
		writeToFile(implAST, info.implFile, outputDir)	
	}	

	if(isCopyOther) {
		for (const file of cInfo.other) {
			const dstFile = path.join(outputDir, path.basename(file))
			fse.copySync(file, dstFile)
		}
	}
}


function writeToFile(ast: GoGoAST, inFile: string, outputDir: string) {
	const newCode = ast.root().generate()
	const outFile = path.join(outputDir, path.basename(inFile))
	gogocode.writeFile(newCode, outFile)
}







