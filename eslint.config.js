// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
{
  rules: {
    // --- Naming ---
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'function',
        format: ['snake_case'],
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'variable',
        format: ['PascalCase'],
      },
    ],

    // --- Docstrings ---
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
        },
      },
    ],
    'valid-jsdoc': 'error',

    // --- Spacing ---
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'function', next: 'function' },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'no-trailing-spaces': 'error',

    // --- Basic formatting ---
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'eqeqeq': ['error', 'always'],
    'max-len': ['error', { code: 100 }],
  },
},
  {
    ignores: ['dist/*'],
  },
]);
