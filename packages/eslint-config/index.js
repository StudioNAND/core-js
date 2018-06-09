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
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "no-multi-spaces": [
      "error",
      {
        "exceptions": {
          "ImportDeclaration": true,
          "VariableDeclarator": true
        }
      }
    ],
    "no-underscore-dangle": 0,
    "react/forbid-prop-types": 0,
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],
    "class-methods-use-this": 0,
    "max-len": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/no-unused-prop-types": 0
  },
  "globals": {
    "__DEV__": true
  }
};