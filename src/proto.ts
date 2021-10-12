import protobuf from 'protobufjs'


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
	dRefName = ''

	constructor(name: string, type: ProtoFieldType) {
		this.name = name
		this.type = type
	}

}


export class ProtoMessageInfo {
	name: string

	fields: ProtoFieldInfo[] = []

	constructor(name: string) {
		this.name = name
	}
}

export class ProtoInfo {

	package: string = ''

	messages: Map<string, ProtoMessageInfo> = new Map()

}


export async function parse(protoFile: string): Promise<ProtoInfo> {
	const root = await protobuf.load(protoFile)
	const result = new ProtoInfo()
	const pkgNames = []
	const searchNS = []
	searchNS.push(root.resolveAll())
	while (searchNS.length > 0) {
		const ns = searchNS.pop()
		if(ns!!.name.length > 0) {
			pkgNames.push(ns!!.name)
		}

		ns?.nestedArray.forEach(item => {
			const itemType = Object.getPrototypeOf(item).toString()
			if(itemType === 'Type') {
				const mInfo = buildMessageInfo(item as protobuf.Type, result)
				result.messages.set(mInfo.name, mInfo)
			}
			else if(itemType === 'Namespace') {
				searchNS.push(item)	
			}
		})
	}

	result.package = pkgNames.join('.')
	return result
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
						pInfo.messages.set(mInfo.name, mInfo)
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
			if(pType === 'Type') {
				refNames.push(parent.name)
			}
			parent = parent.parent
		}
		fInfo.dRefName = refNames.reverse().join('.')
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