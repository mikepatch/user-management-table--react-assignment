import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

export default [
	{ files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		plugins: {
			prettier: pluginPrettier,
		},
		rules: {
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
			"prettier/prettier": "error",
			indent: "off",
		},
		settings: {
			react: {
				version: "detect",
			},
		},
	},
	{
		ignores: ["node_modules", "dist", "build", "public", "scripts", "*.config.js", "*.config.ts"],
	},
	eslintConfigPrettier,
];
