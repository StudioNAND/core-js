/* eslint-disable quote-props */
module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    jest: true,
    jasmine: true,
  },
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          ImportDeclaration: true,
          VariableDeclarator: true,
        },
      },
    ],
    'no-underscore-dangle': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-unused-state': 'warn',
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'class-methods-use-this': 'off',
    'max-len': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/no-unused-prop-types': 'off',
  },
  globals: {
    '__DEV__': true,
  },
};
