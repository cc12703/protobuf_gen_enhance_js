
import { ProtoFieldInfo, ProtoFieldType, ProtoInfo, ProtoMessageInfo } from "@/proto";
import * as util from '@/util'


class AssistInfo {
	pkgName: string = ''
	//key: message-name.field-name
	fieldNameMap: Map<string, string> = new Map()

	//key: message-name.method-name
	methodNameMap: Map<string, string> = new Map()
}






export function process(defAST: GoGoAST, implAST: GoGoAST, pInfo: ProtoInfo, cInfo: util.EnhanceConfig) {
	const aInfo = buildAssistInfo(pInfo, cInfo)

	processDef(defAST, aInfo)
	processImpl(implAST, aInfo)
}



function processImpl(ast: GoGoAST, aInfo: AssistInfo) {	
	ast.find("$_$name.toObject = function() { var f, obj = { $_$attr : $_$value } }").each(item => {
		const suffix = `proto.${aInfo.pkgName}.`
		const typeName = item.match.name[0].value.replace(suffix, '')

		item.match.attr.forEach(attr => {
			const key = `${typeName}.${attr.value}`
			const replVal = aInfo.fieldNameMap.get(key)
			if(replVal) {
				Object.assign(attr.node, { 'name': replVal })
			}	
		})

		item.find("msg.$_$fname()").each(callItem => {
			callItem.match.fname.forEach(name => {
				const key = `${typeName}.${name.value}`
				const replVal = aInfo.methodNameMap.get(key)
				if(replVal) {
					Object.assign(name.node, { 'name': replVal })
				}		
			})	
		})
	})

	ast.find("$_$type.deserializeBinaryFromReader = function(msg, reader) { }").each(item => {
		const suffix = `proto.${aInfo.pkgName}.`
		const typeName = item.match.type[0].value.replace(suffix, '')

		item.find("msg.$_$fname()").each(callItem => {
			callItem.match.fname.forEach(name => {
				const key = `${typeName}.${name.value}`
				const replVal = aInfo.methodNameMap.get(key)
				if(replVal) {
					Object.assign(name.node, { 'name': replVal })
				}		
			})
		})
	})

	ast.find("$_$type.serializeBinaryToWriter = function(message, writer) { }").each(item => {
		const suffix = `proto.${aInfo.pkgName}.`
		const typeName = item.match.type[0].value.replace(suffix, '')

		item.find("message.$_$fname()").each(callItem => {
			callItem.match.fname.forEach(name => {
				const key = `${typeName}.${name.value}`
				const replVal = aInfo.methodNameMap.get(key)
				if(replVal) {
					Object.assign(name.node, { 'name': replVal })
				}		
			})
		})
	})

	ast.find("$_$type.prototype.$_$name = function() {  } ").each(item => {
		const suffix = `proto.${aInfo.pkgName}.`
		const typeName = item.match.type[0].value.replace(suffix, '')

		item.match.name.forEach(name => {
			const key = `${typeName}.${name.value}`
			const replVal = aInfo.methodNameMap.get(key)
			if(replVal) {
				Object.assign(name.node, { 'name': replVal })
			}
		})

		item.find("this.$_$fname()").each(callItem => {
			callItem.match.fname.forEach(name => {
				const key = `${typeName}.${name.value}`
				const replVal = aInfo.methodNameMap.get(key)
				if(replVal) {
					Object.assign(name.node, { 'name': replVal })
				}		
			})
		})
	})

}


function processDef(ast: GoGoAST, aInfo: AssistInfo) {
	ast.find("export namespace $_$type { export type AsObject = { $_$attr } }").each(item => {
		const typeName = getTypeName(item.match.type[0].value, item.parents())

		item.match.attr.forEach(attr => {
			const key = `${typeName}.${attr.value}`
			const replVal = aInfo.fieldNameMap.get(key)
			if(replVal) {
				Object.assign(attr.node, { 'name': replVal })
			}
		})
	})
	ast.find("export class $_$type extends jspb.Message { $_$name() }").each(item => {
		const typeName = getTypeName(item.match.type[0].value, item.parents())

		item.match.name.forEach(name => {
			const key = `${typeName}.${name.value}`
			const replVal = aInfo.methodNameMap.get(key)
			if(replVal) {
				Object.assign(name.node, { 'name': replVal })
			}
		})	
	})

}


function getTypeName(name: string, parentAST: any): string {
	let fullName = name
	const num = parentAST.length
	for(let i=0; i<num; i++) {
		const item = parentAST[i]
		const node = item['nodePath']['node']
		if(node === null)
			continue
		if(!('declaration' in node))
			continue

		const pName = node['declaration']['id']['name']
		fullName = `${pName}.${fullName}`
	}
	return fullName
}


function buildAssistInfo(pInfo: ProtoInfo, cInfo: util.EnhanceConfig): AssistInfo {
	const result = new AssistInfo()

	result.pkgName = pInfo.package
	result.fieldNameMap = buildFieldNameMap(pInfo, cInfo)
	result.methodNameMap = buildMethodNameMap(pInfo, cInfo)
	//console.log(result)
	return result
}

function buildFieldNameMap(pInfo: ProtoInfo, cInfo: util.EnhanceConfig): Map<string, string> {
	const result = new Map<string, string>()
	pInfo.messages.forEach(msg => fillFieldNameMap(msg, cInfo, result))
	return result
}


function fillFieldNameMap(mInfo: ProtoMessageInfo, cInfo: util.EnhanceConfig, 
						 out: Map<string, string>) {
	mInfo.fields.forEach(field => {
		let suffix = getFieldNameSuffix(field)

		const key = `${mInfo.name}.${field.name.toLowerCase()}${suffix}`
		const value = cInfo.isDelTypeSuffix? field.name : `${field.name}${suffix}`
		out.set(key, value)
	})	
}

function getFieldNameSuffix(field: ProtoFieldInfo): string {
	let suffix = ''
	if(field.type === ProtoFieldType.LIST) {
		suffix = 'List'
	}
	else if(field.type === ProtoFieldType.MAP) {
		suffix = 'Map'
	}
	return suffix
}



function buildMethodNameMap(pInfo: ProtoInfo, cInfo: util.EnhanceConfig): Map<string, string> {
	const result = new Map<string, string>()
	pInfo.messages.forEach(msg => fillMethodNameMap(msg, cInfo, result))
	return result
}

function fillMethodNameMap(mInfo: ProtoMessageInfo, cInfo: util.EnhanceConfig, 
							out: Map<string, string>) {
	mInfo.fields.forEach(field => {
		if(field.type === ProtoFieldType.NORMAL) {
			const templ = ['set*', 'get*']
			fillMethodNameMapForField(mInfo.name, field.name, templ, '', out)
		}
		else if(field.type === ProtoFieldType.LIST) {
			const templ = ['clear*List', 'get*List', 'set*List', 'add*']
			const delSuffix = cInfo.isDelTypeSuffix? 'List' : ''
			fillMethodNameMapForField(mInfo.name, field.name, templ, delSuffix, out)
		}
		else if(field.type === ProtoFieldType.MAP) {
			const templ = ['get*Map', 'clear*Map']
			const delSuffix = cInfo.isDelTypeSuffix? 'Map' : ''
			fillMethodNameMapForField(mInfo.name, field.name, templ, delSuffix, out)
		}
	})	
}

function fillMethodNameMapForField(mName: string, fName: string, nameTempl: string[], delSuffix: string,
									out: Map<string, string>) {
	nameTempl.forEach(templ => {
		const oldName = templ.replace('*', util.strToFirstUpperCase(fName.toLowerCase()))
		const newName = templ.replace('*', util.strToFirstUpperCase(fName)).replace(delSuffix, '')
		out.set(`${mName}.${oldName}`, newName)
	})
}



