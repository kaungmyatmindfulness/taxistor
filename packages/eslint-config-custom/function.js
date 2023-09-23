const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * typescript packages.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
	extends: [
		"@vercel/style-guide/eslint/node",
		"@vercel/style-guide/eslint/typescript",
	].map(require.resolve),
	parserOptions: {
		project,
	},
	settings: {
		"import/resolver": {
			typescript: {
				project,
			},
			node: {
				extensions: [".mjs", ".js", ".ts"],
			},
		},
	},
	ignorePatterns: ["node_modules/", "dist/"],
	rules: {
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-shadow": "off",
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/no-unsafe-call": "off",
		"import/no-default-export": "off",
		"no-console": "off",
	},
};
