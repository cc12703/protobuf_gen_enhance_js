



export function strToFirstUpperCase(val: string): string {
	return val.replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
}