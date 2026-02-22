export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module"
    },
    rules: {
      "no-unused-vars": "error",
      "no-console": "warn",
      "eqeqeq": "error",
      "no-eval": "error"
    }
  }
];