import "ace-builds/src-noconflict/mode-java";

export class CustomHighlightRules extends window.ace.acequire(
	"ace/mode/text_highlight_rules"
).TextHighlightRules {
	constructor() {
		super();
		let keywords = "^.bp";

		this.$rules = {
			start: [
				{ token: "keyword", regex: keywords },

				{ token: "invalid.illegal", regex: "^[.][a-z]+" },

				{ token: "keyword", regex: "^[.][0-9A-Z]+" },

				{ token: "string", regex: '(?<=^[.][0-9A-Z]*) ["].*["]' },

				{ token: "string", regex: "(?<=^[.][0-9A-Z]*) [a-z]+$" },

				{
					token: "string.interpolated",
					regex:
						"(?<=^[.][0-9A-Z]*) [1-9]*[0-9][/][0-9][0-9][/][1-9][0-9][0-9][0-9]",
				},

				{ token: "string", regex: "(?<=^[.][0-9A-Z]*) -[A-Z]*" },

				{
					token: "markup.underline",
					regex: "(?<=^[.][0-9A-Z]* -[A-Z]* )[.].*[.][a-z]*$",
				},

				{
					token: "constant.numeric",
					regex: "(?<=^[.][0-9A-Z]*) [0-9]*",
				},

				{ caseInsensitive: false },
			],
		};
	}
}

export default class CustomGroffMode extends window.ace.acequire(
	"ace/mode/java"
).Mode {
	constructor() {
		super();
		this.HighlightRules = CustomHighlightRules;
	}
}
