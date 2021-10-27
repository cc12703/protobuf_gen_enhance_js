


export class EnhanceConfig {
	isCopyOther = false
	isDelTypeSuffix = false
}


export function strToFirstUpperCase(val: string): string {
	return val.replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
}