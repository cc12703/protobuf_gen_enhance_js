

import path from 'path'

import * as main from '@/main'



const PROTO_DIR = path.join(__dirname, './proto')
const INPUT_DIR = path.join(__dirname, './gen')
const OUTPUT_DIR = path.join(__dirname, '../out')


async function doBuild() {
	await main.enhance(INPUT_DIR, OUTPUT_DIR, PROTO_DIR, true)
}





doBuild()