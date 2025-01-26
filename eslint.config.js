module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: ["react"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
};
