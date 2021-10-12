
import path from 'path'
import { getHeapStatistics } from 'v8'
import walk from 'walk'


export class PbGenerateFileInfo {
	defFile: string = ''
	implFile: string = ''
	protoName: string

	constructor(protoName: string) {
		this.protoName = protoName
	}

}

class CollectInfo {

	info = new Map<string, PbGenerateFileInfo>()

	getGenerateInfo(protoName: string): PbGenerateFileInfo {
		if(this.info.has(protoName))
			return this.info.get(protoName)!!

		const genInfo = new PbGenerateFileInfo(protoName)
		this.info.set(protoName, genInfo)
		return genInfo	
	}
}


export function collectAll(input: string): Promise<PbGenerateFileInfo[]> {
	return new Promise((resolve, reject) => {
		const result = new CollectInfo()
		const walker = walk.walk(input)
        walker.on('file', (dir, stats, next)=> {
			if(stats.name.indexOf('_grpc_') !== -1)
				return next()

            if(stats.name.endsWith('_pb.d.ts')) {
				const protoName = stats.name.replace('_pb.d.ts', '')
				result.getGenerateInfo(protoName).defFile = path.join(dir, stats.name)
			}
			else if(stats.name.endsWith('_pb.js')) {
				const protoName = stats.name.replace('_pb.js', '')
				result.getGenerateInfo(protoName).implFile = path.join(dir, stats.name)
			}
            next()
        })
        walker.on('end', () => {
            resolve(Array.from(result.info.values()))
        })
	})
}