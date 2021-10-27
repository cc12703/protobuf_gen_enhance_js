

import path from 'path'

import * as main from '@/main'
import { EnhanceConfig } from '@/util'


const PROTO_DIR = path.join(__dirname, './proto')
const INPUT_DIR = path.join(__dirname, './gen')
const OUTPUT_DIR = path.join(__dirname, '../out')


async function doBuild() {
	const cfg = new EnhanceConfig()
	cfg.isCopyOther = true
	cfg.isDelTypeSuffix = true
	await main.enhance(INPUT_DIR, OUTPUT_DIR, PROTO_DIR, cfg)
}





doBuild()