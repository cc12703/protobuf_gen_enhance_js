

type MatchResult = {
	[key in string | number]: Array<{
	  node: any;
	  value: string;
	}>;
};

interface GoGoAST {

	match: MatchResult;


	find(selector: string): GoGoAST;
	each(callback: (node: GoGoAST, index: number) => void): GoGoAST;
	replace(selector: string, replacer: string): GoGoAST;
	after(ast: string): GoGoAST;

	parents(): GoGoAST;

	root(): GoGoAST;

	generate(option?: { isPretty?: boolean }): string;
}