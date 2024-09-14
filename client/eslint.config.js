import js from '@eslint/js'
import simpleImportSort from "eslint-plugin-simple-import-sort"
import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import ts from 'typescript-eslint'

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  {
    files: ['server/**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
      }
    }
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    }
  },
  {
    files: ['*.vue', '**/*.vue', "*.ts"],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  },
  {
   /* Global rules for all files */
    rules: {
      semi: ['error', 'never'],
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'vue/no-v-html': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-undef-components': 'error',
      'vue/no-unused-properties': 'error',
      'array-callback-return': 'off',
      'no-constant-binary-expression': 'error',
      'prefer-template': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'quote-props': [
        'error',
        'as-needed',
        { keywords: false, unnecessary: true, numbers: false },
      ],
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: true,
        },
      ],
      'no-else-return': 'error',
    },
  }
)
