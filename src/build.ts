

import { ProtoFieldDataType, ProtoFieldInfo, ProtoFieldType, ProtoInfo, ProtoMessageInfo } from "@/proto";

import * as util from '@/util'





export function process(defAST: GoGoAST, implAST: GoGoAST, pInfo: ProtoInfo, cInfo: util.EnhanceConfig) {
	processDef(defAST)
	processImpl(implAST, pInfo, cInfo)
}



function processImpl(ast: GoGoAST, pInfo: ProtoInfo, cInfo: util.EnhanceConfig) {
	ast.find('$_$type.toObject = function(opt_includeInstance) {}').each(item => {
		const type = item.match.type[0].value
		const sType = type.replace('.prototype', '')
		item.after(`
			${type}.fromObject = function(obj) {
				${sType}.fromObject(obj, this);
			};
		`)
	})
	ast.find('$_$type.toObject = function(includeInstance, msg) {}').each(item => {
		const type = item.match.type[0].value
		const typeName = type.replace(`proto.${pInfo.package}.`, '')
		const codes = []

		codes.push(`${type}.fromObject = function(obj, msg) {`)
		pInfo.messages.get(typeName)?.fields.forEach(field => {
			const fieldName = buildFieldName(field, cInfo)
			codes.push(`if('${fieldName}' in obj) {`)
			if(field.type === ProtoFieldType.NORMAL) {
				const vName = `v${field.name}`
				buildTransformCodeOfNormal(vName, field, pInfo, cInfo).forEach(code => codes.push(code))
				codes.push(`msg.set${util.strToFirstUpperCase(field.name)}(${vName})`)
			}
			else if(field.type === ProtoFieldType.LIST) {
				const vName = `v${field.name}`
				buildTransformCodeOfList(vName, field, pInfo, cInfo).forEach(code => codes.push(code))
				codes.push(`msg.set${util.strToFirstUpperCase(fieldName)}(${vName})`)
			}
			else if(field.type === ProtoFieldType.MAP) {
				const vName = `v${fieldName}`
				codes.push(`obj.${fieldName}.forEach(pair => {`)
				codes.push(`var ${vName}Key = pair[0];`)
				codes.push(`var ${vName}Val = pair[1];`)
				buildTransformCodeOfMap(`${vName}Key`, `${vName}Val`, field, pInfo, cInfo).forEach(code => codes.push(code))
				codes.push(`})`)
				
			}			

			codes.push('}')

		})

		codes.push('};\r')

		item.after(codes.join('\r'))
	})

	ast.find('$_$type.toObject = function(includeInstance, msg) {}').each(item => {
		const type = item.match.type[0].value
		const typeName = type.replace(`proto.${pInfo.package}.`, '')
		const codes = []

		codes.push(`${type}.buildObject = function(obj) {`)
		codes.push(`var msg = new ${type};`)	
		codes.push(`${type}.fromObject(obj, msg);`)
		codes.push('return msg;')
		codes.push('};\r')

		item.after(codes.join('\r'))
	})
}

function buildFieldName(field: ProtoFieldInfo, cInfo: util.EnhanceConfig): string {
	if(field.type === ProtoFieldType.NORMAL)
		return field.name
	else if(field.type === ProtoFieldType.LIST)
		return cInfo.isDelTypeSuffix? field.name : `${field.name}List`
	else if(field.type === ProtoFieldType.MAP)
		return cInfo.isDelTypeSuffix? field.name : `${field.name}Map`
	else
		return field.name
}



function buildTransformCodeOfNormal(varName: string, field: ProtoFieldInfo, pInfo: ProtoInfo, 
									cInfo: util.EnhanceConfig): string[] {
	const fieldName = buildFieldName(field, cInfo)
	if(field.dType === ProtoFieldDataType.NORMAL) {
		return [`var ${varName} = obj.${fieldName};`]
	}
	else if(field.dType === ProtoFieldDataType.REF) {
		return [`var ${varName} = new proto.${pInfo.package}.${field.dRefName};`, 
				`${varName}.fromObject(obj.${fieldName});`]
	}
	
	return []
}


function buildTransformCodeOfList(varName: string, field: ProtoFieldInfo, pInfo: ProtoInfo, 
									cInfo: util.EnhanceConfig): string[] {
	const fieldName = buildFieldName(field, cInfo)
	if(field.dType === ProtoFieldDataType.NORMAL) {
		return [`var ${varName} = obj.${fieldName};`]
	}
	else if(field.dType === ProtoFieldDataType.REF) {
		return [`var ${varName} = obj.${fieldName}.map(item => {`, 
				`  var ${varName}O = new proto.${pInfo.package}.${field.dRefName};`,
				`  ${varName}O.fromObject(item);`,
				`  return ${varName}O;`,
				`});`]
	}

	return []
}


function buildTransformCodeOfMap(keyVarName: string, valVarName: string, field: ProtoFieldInfo, pInfo: ProtoInfo, 
								cInfo: util.EnhanceConfig): string[] {
	const fieldName = buildFieldName(field, cInfo)
	if(field.dType === ProtoFieldDataType.NORMAL) {
		return [`msg.get${util.strToFirstUpperCase(fieldName)}().set(${keyVarName}, ${valVarName})`]
	}
	else if(field.dType === ProtoFieldDataType.REF) {
		return [`  var ${valVarName}O = new proto.${pInfo.package}.${field.dRefName};`,
				`  ${valVarName}O.fromObject(item);`,
				`   msg.get${util.strToFirstUpperCase(fieldName)}().set(${keyVarName}, ${valVarName}O)`]
	}

	return []
}


function processDef(ast: GoGoAST) {
	ast.replace(`
			export class $_$type extends jspb.Message {
				toObject(includeInstance?: boolean): $_$ret;
				static toObject(includeInstance: boolean, msg): $_$ret;
				$$$
			}	
			`,
		    `export class $_$type extends jspb.Message {
				toObject(includeInstance?: boolean): $_$type.AsObject;
				fromObject(obj: $_$type.AsObject): void;

				static toObject(includeInstance: boolean, msg: $_$type): $_$type.AsObject;
				static fromObject(obj: $_$type.AsObject, msg: $_$type): void;
				static buildObject(obj: $_$type.AsObject): $_$type
				$$$
			}`)
}




