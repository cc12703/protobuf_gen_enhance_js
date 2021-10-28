import protobuf from 'protobufjs'
import lineReader from 'line-reader'
import { rejects } from 'assert'


export enum ProtoFieldType {
	NORMAL,
	LIST,
	MAP
}


export enum ProtoFieldDataType {
	NORMAL,
	REF
}


export class ProtoFieldInfo {
	name: string
	type: ProtoFieldType

	dType = ProtoFieldDataType.NORMAL
	dRefFullName = ''

	constructor(name: string, type: ProtoFieldType) {
		this.name = name
		this.type = type
	}

}


export class ProtoMessageInfo {
	fullName: string

	fields: ProtoFieldInfo[] = []

	constructor(name: string) {
		this.fullName = name
	}
}

export class ProtoInfo {
	pkgName: string = ''
	messages: Map<string, ProtoMessageInfo> = new Map()

}


export async function parse(protoFile: string): Promise<ProtoInfo> {
	const root = await protobuf.load(protoFile)
	const result = new ProtoInfo()

	parseNamespace(root.resolveAll(), '', result)

	result.pkgName = await findPkgName(protoFile)
	return result
}



function findPkgName(protoFile: string): Promise<string> {
	return new Promise((resolve,reject) => {
		lineReader.eachLine(protoFile, function(line: string, last: boolean, cb:any) {
			if(line) {
				const result = line.match(/\s*package\s*([\w.]+)\s*;\s*/)
				if(result) {
					cb(false)
					resolve(result[1])
				}
			}
			
			if(last) {
				resolve('')
			}
			else {
				cb()
			}
		})
	})
}

function parseNamespace(ns: protobuf.NamespaceBase, pkgName: string, pInfo: ProtoInfo) {
	ns?.nestedArray.forEach(item => {
		const itemType = Object.getPrototypeOf(item).toString()
		if(itemType === 'Type') {
			const mInfo = buildMessageInfo(item as protobuf.Type, pInfo, pkgName)
			pInfo.messages.set(mInfo.fullName, mInfo)
		}
		else if(itemType === 'Namespace') {
			const curPkgName = (pkgName.length > 0)? `${pkgName}.${item.name}` : item.name
			parseNamespace(item as protobuf.Namespace, curPkgName, pInfo)
		}
	})	
}


function buildMessageInfo(type: protobuf.Type, pInfo: ProtoInfo, namePrefix = ''): ProtoMessageInfo {
	const name = (namePrefix.length > 0)? `${namePrefix}.${type.name}` : type.name
	const info = new ProtoMessageInfo(name)
	info.fields = type.fieldsArray.map(field => {
		const fInfo = new ProtoFieldInfo(field.name, buildFieldType(field))
		fillFieldDataType(fInfo, field)
		return fInfo
	})
	type.nestedArray.filter(nested => nested instanceof protobuf.Type)
					.forEach(nested => {
						const mInfo = buildMessageInfo(nested as protobuf.Type, pInfo, name)
						pInfo.messages.set(mInfo.fullName, mInfo)
					})
	return info
}

function fillFieldDataType(fInfo: ProtoFieldInfo, field: protobuf.Field) {
	if(field.resolvedType === null)
		return

	const rType = Object.getPrototypeOf(field.resolvedType).toString()	
	if(rType === 'Type') {
		fInfo.dType = ProtoFieldDataType.REF
		const refNames = []
		refNames.push(field.resolvedType.name)
		let parent = field.resolvedType.parent
		while(parent !== null) {
			const pType = Object.getPrototypeOf(parent).toString()	
			if((pType === 'Type') || (pType === 'Namespace')) {
				refNames.push(parent.name)
			}
			
			parent = parent.parent
		}
		fInfo.dRefFullName = refNames.reverse().join('.')
	}
}



function buildFieldType(field: protobuf.Field): ProtoFieldType {
	if(field.repeated) 
		return ProtoFieldType.LIST
	else if(field.map) 
		return ProtoFieldType.MAP
	else
		return ProtoFieldType.NORMAL
}