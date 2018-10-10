/* eslint-disable quote-props */
const prettierConfig = require('./prettier.config.js');

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
  ],
  plugins: [
    'import',
    'react',
    'jsx-a11y',
    'prettier'
  ],
  settings: {
    react: {
      version: '16.0',
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    jasmine: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'no-underscore-dangle': 0,
    'react/forbid-prop-types': 0,
    'class-methods-use-this': 0,
    'max-len': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-unused-prop-types': 1,
    'eol-last': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 2,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    'no-console': 1,
    'react/display-name': 0,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        ignoreRestSiblings: true,
      },
    ],
    semi: [2, 'always'],
    'no-trailing-spaces': 2,
    'prefer-arrow-callback': 2,
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 6,
          consistent: true,
        },
        ObjectPattern: { multiline: true, minProperties: 6, consistent: true },
        ImportDeclaration: {
          multiline: true,
          minProperties: 6,
          consistent: true,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 6,
          consistent: true,
        },
      },
    ],
    'no-multi-spaces': 2,
    'keyword-spacing': 2,
    'block-spacing': 2,
    'space-in-parens': 2,
    'space-before-blocks': 2,
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'prefer-template': 2,
    'react/boolean-prop-naming': 2,
    'react/no-typos': 2,
    'react/jsx-curly-spacing': 2,
    // indent: [2, 2, { SwitchCase: 1, flatTernaryExpressions: true }],
    'react/jsx-curly-brace-presence': 2,
    'object-curly-spacing': [2, 'always'],
    'switch-colon-spacing': ['error', { after: true, before: false }],
  },
  globals: {
    __DEV__: true,
  },
};
