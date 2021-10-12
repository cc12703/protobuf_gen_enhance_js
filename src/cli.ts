

import pkg from 'root/package.json'
import program from 'commander'

import * as main from '@/main'

program
.version(pkg.version, '-v, --version', 'output the current version')
.description('Enhance the generated file of protobuf')
.option('-i --input <dir>', 'specify input dir of generated file')
.option('-o --output <dir>', 'specify output dir of enhanced file')
.option('-p --proto <dir>', 'specify dir of proto file')
.action((input, output, proto) => {
	main.enhance(input, output, proto)
})

program.parse(process.argv)