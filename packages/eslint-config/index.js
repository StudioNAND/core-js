/* eslint-disable quote-props */
module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended"
  ],
  "plugins": [
    "import",
    "react",
    "jsx-a11y"
  ],
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
    "jasmine": true,
    "es6": true
  },
  "rules": {
    "no-underscore-dangle": 0,
    "react/forbid-prop-types": 0,
    "class-methods-use-this": 0,
    "max-len": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/no-unused-prop-types": 1,
    "eol-last": 2,
    "no-multiple-empty-lines": [
      2,
      {
        "max": 2,
        "maxEOF": 1,
        "maxBOF": 0,
      }
    ],
    "no-console": 1,
    "react/display-name": 0,
    "no-unused-vars": [
      2,
      {
        "vars": "all",
        "ignoreRestSiblings": true
      }
    ],
    "semi": [
      2,
      "always"
    ],
    "no-trailing-spaces": 2,
    "prefer-arrow-callback": 2,
    "object-curly-newline": ["error", {
      "ObjectExpression": { "multiline": true, "minProperties": 4, "consistent": true },
      "ObjectPattern": { "multiline": true, "minProperties": 4, "consistent": true },
      "ImportDeclaration": { "multiline": true, "minProperties": 4, "consistent": true },
      "ExportDeclaration": { "multiline": true, "minProperties": 4, "consistent": true }
    }],
    "no-multi-spaces": 2,
    "keyword-spacing": 2,
    "block-spacing": 2,
    "space-in-parens": 2,
    "space-before-blocks": 2,
    "brace-style": 2
  },
  "globals": {
    "__DEV__": true
  }
}