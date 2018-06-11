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
  },
  "globals": {
    "__DEV__": true
  }
}