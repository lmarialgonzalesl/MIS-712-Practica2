import js from "@eslint/js";

export default [
  js.configs.recommended,

  // React + browser
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly"
      }
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-eval": "error",
      "eqeqeq": "error"
    }
  },

  // Jest environment
  {
    files: ["**/__tests__/**/*.js", "**/*.test.js"],
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        it: "readonly"
      }
    }
  },

  // Cypress config (allow unused args)
  {
    files: ["cypress.config.js"],
    rules: {
      "no-unused-vars": "off"
    }
  }
];