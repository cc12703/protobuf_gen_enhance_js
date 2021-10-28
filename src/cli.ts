

import pkg from 'root/package.json'
import program from 'commander'
import { exit } from 'process'

import * as main from '@/main'
import { EnhanceConfig } from '@/util'

program
.version(pkg.version, '-v, --version', 'output the current version')
.description('Enhance the generated file of protobuf')
.option('-i, --input <dir>', 'specify input dir of generated file')
.option('-o, --output <dir>', 'specify output dir of enhanced file')
.option('-p, --proto <dir>', 'specify dir of proto file')
.option('-c, --copyother', 'Copy Other File', false)
.option('-s, --deltypesuffix', 'Delete Suffix of Type', false)
.action(async (options) => {
	const cfg = new EnhanceConfig()
	cfg.isCopyOther = options.copyother
	cfg.isDelTypeSuffix = options.deltypesuffix
	await main.enhance(options.input, options.output, options.proto, cfg)

	exit(0)
})

program.parse(process.argv)