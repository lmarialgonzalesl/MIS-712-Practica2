export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module"
    },
    rules: {
      "no-unused-vars": "error",
      "eqeqeq": "error",
      "no-eval": "error",
      "no-console": "off"
    }
  }
];