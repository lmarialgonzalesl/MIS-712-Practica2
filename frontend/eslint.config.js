import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  js.configs.recommended,

  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        window: "readonly",
        document: "readonly",
        sessionStorage: "readonly",
        localStorage: "readonly",
        console: "readonly"
      }
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-eval": "error",
      "eqeqeq": "error",
      "react/react-in-jsx-scope": "off"
    }
  },

  // Jest
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

  // Cypress
  {
    files: ["cypress.config.js"],
    rules: {
      "no-unused-vars": "off"
    }
  }
];