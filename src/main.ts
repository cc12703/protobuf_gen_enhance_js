
import path from 'path'
import gogocode from 'gogocode'
import fse from 'fs-extra'


import * as collecter from '@/collect'
import * as protoer from '@/proto'
import * as renamer from '@/rename'
import * as builder from '@/build'





export async function enhance(inputDir: string, outputDir: string, protoDir: string) {

	console.log(`cmd input ${inputDir}`)
	console.log(`cmd output ${outputDir}`)
	console.log(`cmd proto ${protoDir}`)

	fse.ensureDirSync(outputDir)

	const infos = await collecter.collectAll(inputDir)
	for (const info of infos) {
		const pFile = path.join(protoDir, `${info.protoName}.proto`)
		const pInfo = await protoer.parse(pFile)

		const defAST = gogocode.loadFile(info.defFile, {}) 
		const implAST = gogocode.loadFile(info.implFile, {}) 

		renamer.process(defAST, implAST, pInfo)
		builder.process(defAST, implAST, pInfo)

		writeToFile(defAST, info.defFile, outputDir)	
		writeToFile(implAST, info.implFile, outputDir)	
	}	
}


function writeToFile(ast: GoGoAST, inFile: string, outputDir: string) {
	const newCode = ast.root().generate()
	const outFile = path.join(outputDir, path.basename(inFile))
	gogocode.writeFile(newCode, outFile)
}







