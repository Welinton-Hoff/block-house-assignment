import eslintPluginReact from "eslint-plugin-react";

export default [
  {
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: {
      react: eslintPluginReact,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
