const eslintPluginReact = require("eslint-plugin-react");

module.exports = [
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
