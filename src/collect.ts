
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



export class CollectInfo {

	info = new Map<string, PbGenerateFileInfo>()
	other: string[] = []

	getGenerateInfo(protoName: string): PbGenerateFileInfo {
		if(this.info.has(protoName))
			return this.info.get(protoName)!!

		const genInfo = new PbGenerateFileInfo(protoName)
		this.info.set(protoName, genInfo)
		return genInfo	
	}

	getAll(): PbGenerateFileInfo[] {
		return Array.from(this.info.values())
	}
}


export function collectAll(input: string): Promise<CollectInfo> {
	return new Promise((resolve, reject) => {
		const result = new CollectInfo()
		const walker = walk.walk(input)
        walker.on('file', (dir, stats, next)=> {
			if(stats.name.indexOf('_grpc_') !== -1) {
				result.other.push(path.join(dir, stats.name))
				return next()
			}

            if(stats.name.endsWith('_pb.d.ts')) {
				const protoName = stats.name.replace('_pb.d.ts', '')
				result.getGenerateInfo(protoName).defFile = path.join(dir, stats.name)
			}
			else if(stats.name.endsWith('_pb.js')) {
				const protoName = stats.name.replace('_pb.js', '')
				result.getGenerateInfo(protoName).implFile = path.join(dir, stats.name)
			}
			else {
				result.other.push(path.join(dir, stats.name))
			}
			
            next()
        })
        walker.on('end', () => {
            resolve(result)
        })
	})
}