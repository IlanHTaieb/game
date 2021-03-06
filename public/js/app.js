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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/_router.js":
/*!***************************!*\
  !*** ./src/js/_router.js ***!
  \***************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/js/pages/home.js");
/* harmony import */ var _pages_arena__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/arena */ "./src/js/pages/arena.js");


var Router = {
  home: function home() {
    _pages_home__WEBPACK_IMPORTED_MODULE_0__["Home"].render();
  },
  arena: function arena(p1, p2) {
    _pages_arena__WEBPACK_IMPORTED_MODULE_1__["Arena"].render(p1, p2);
  }
};

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_router */ "./src/js/_router.js");
/* harmony import */ var _class_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/Map */ "./src/js/class/Map.js");


$(document).ready(function () {
  //Router.home()
  _router__WEBPACK_IMPORTED_MODULE_0__["Router"].arena('Toto', 'Ploufy');
  var map = new _class_Map__WEBPACK_IMPORTED_MODULE_1__["Map"]();
  map.init();
  map.render();
  $('.submit').click(function () {
    $('.home').hide();
    _router__WEBPACK_IMPORTED_MODULE_0__["Router"].arena('Toto', 'Ploufy');
  });
});

/***/ }),

/***/ "./src/js/class/Bloc.js":
/*!******************************!*\
  !*** ./src/js/class/Bloc.js ***!
  \******************************/
/*! exports provided: Bloc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bloc", function() { return Bloc; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Bloc =
/*#__PURE__*/
function () {
  function Bloc(posY, posX) {
    var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

    _classCallCheck(this, Bloc);

    _defineProperty(this, "posY", 0);

    _defineProperty(this, "posX", 0);

    _defineProperty(this, "node", '');

    this.posY = posY;
    this.posX = posX;
    this.size = size + 'px';
    this.node = '<div class="bloc" style="width: ' + size + 'px; height: ' + size + 'px;" data-pox-y="' + posY + '" data-pos-x="' + posX + '"></div>';
  }

  _createClass(Bloc, [{
    key: "render",
    value: function render(line) {
      $(line).append(this.node);
    }
  }]);

  return Bloc;
}();

/***/ }),

/***/ "./src/js/class/Map.js":
/*!*****************************!*\
  !*** ./src/js/class/Map.js ***!
  \*****************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _Bloc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bloc */ "./src/js/class/Bloc.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Map =
/*#__PURE__*/
function () {
  function Map() {
    _classCallCheck(this, Map);

    _defineProperty(this, "maxX", 10);

    _defineProperty(this, "maxY", 10);

    _defineProperty(this, "arena", []);

    _defineProperty(this, "occupedBlocs", []);
  }

  _createClass(Map, [{
    key: "init",
    value: function init() {
      for (var y = 0; y < this.maxY; y++) {
        this.arena[y] = [];

        for (var x = 0; x < this.maxX; x++) {
          this.arena[y][x] = new _Bloc__WEBPACK_IMPORTED_MODULE_0__["Bloc"](y, x);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.arena.forEach(function (bloc, line) {
        $('.arena').append('<div id="line' + line + '" class="line" data-line="' + line + '"></div>');
        bloc.forEach(function (cases) {
          cases.render('#line' + line);
        });
      });
    }
  }]);

  return Map;
}();

/***/ }),

/***/ "./src/js/pages/arena.js":
/*!*******************************!*\
  !*** ./src/js/pages/arena.js ***!
  \*******************************/
/*! exports provided: Arena */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arena", function() { return Arena; });
var Arena = {
  component: function component(p1, p2) {
    return "\n            <div class=\"arena\"></div>\n        \n            <div class=\"info\">\n                <div class=\"player player_1\">\n                    <div class=\"avatar\"></div>\n                    <p class=\"info-player-1\" style=\"text-align: center;\">" + p1 + "</p>\n                    <div class=\"life_line\"></div>\n                    <div class=\"life\">/100</div>\n                </div>\n                <div class=\"player player_2\">\n                    <div class=\"avatar\"></div>\n                    <p class=\"info-player-2\" style=\"text-align: center;\">" + p2 + "</p>\n                    <div class=\"life_line\"></div>\n                    <div class=\"life\">/100</div>\n                </div>\n            </div>\n        ";
  },
  render: function render(p1, p2) {
    $('.body').append(this.component(p1, p2));
  }
};

/***/ }),

/***/ "./src/js/pages/home.js":
/*!******************************!*\
  !*** ./src/js/pages/home.js ***!
  \******************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
var Home = {
  component: "\n        <div class=\"home\">\n            <h1>Rejoignez la bataille</h1>\n            \n            <div class=\"form\">\n                <input class=\"form-control\" type=\"text\" name=\"player1\" id=\"player1\" placeholder=\"Joueur 1\">\n                <input class=\"form-control\" type=\"text\" name=\"player2\" id=\"player2\" placeholder=\"Joueur 2\">\n                <button class=\"submit\">Entrer</button>\n            </div>\n        </div>\n    ",
  render: function render() {
    $('.body').append(this.component);
  }
};

/***/ }),

/***/ "./src/sass/app.sass":
/*!***************************!*\
  !*** ./src/sass/app.sass ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/sass/app.sass ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\wamp64\www\_OPENCLASSROOMS\game\src\js\app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! C:\wamp64\www\_OPENCLASSROOMS\game\src\sass\app.sass */"./src/sass/app.sass");


/***/ })

/******/ });