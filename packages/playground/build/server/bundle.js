module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(3);

var _express = __webpack_require__(4);

var _lodash = __webpack_require__(5);

var _lodash2 = _interopRequireDefault(_lodash);

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

var _App = __webpack_require__(7);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = (0, _lodash2.default)(_index2.default);

var _default = function _default(chunks) {
  var router = new _express.Router();
  router.use(function (req, res) {
    res.status(200);
    res.send(template({
      chunks: chunks,
      app: (0, _server.renderToString)(_react2.default.createElement(_App2.default, null))
    }));
  });
  return router;
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(template, 'template', '/Users/m3000/repos/core-js/packages/playground/src/serverMiddleware/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/m3000/repos/core-js/packages/playground/src/serverMiddleware/index.js');
}();

;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("lodash.template");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n    <% chunks.css.forEach((chunk) => { %><link rel=\"stylesheet\" href=\"<%= chunk %>\"><% }); %>\n    <!--[if IE]>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.7/es5-shim.min.js\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.7/es5-sham.min.js\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/json3/3.3.2/json3.min.js\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.34.2/es6-shim.min.js\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.34.2/es6-sham.min.js\"></script>\n    <script src=\"https://wzrd.in/standalone/es7-shim@latest\"></script>\n    <![endif]-->\n</head>\n<body>\n<div id=\"root\"><%= app %></div>\n<% chunks.js.forEach((chunk) => { %><script src=\"<%= chunk %>\"></script><% }); %>\n</body>\n</html>\n"

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGrid = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return _react2.default.createElement(
    _reactGrid.Grid,
    {
      styles: [{
        fontSize: '10px'
      }, {
        fontSize: '14px'
      }, {
        fontSize: '26px'
      }]
    },
    'Hello World'
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/m3000/repos/core-js/packages/playground/src/components/App.js');
}();

;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@studionand/react-grid");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map