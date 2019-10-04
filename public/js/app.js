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

/***/ "./assets/js/_home.js":
/*!****************************!*\
  !*** ./assets/js/_home.js ***!
  \****************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
var Home = {
  component: function component(p1, p2) {
    return "\n            <div class=\"arena\"></div>\n        \n            <div class=\"info\">\n                <div class=\"player player_1\">\n                    <div class=\"avatar\"></div>\n                    <p class=\"info-player-1\" style=\"text-align: center;\">" + p1 + "</p>\n                    <div class=\"life_line\"></div>\n                    <div class=\"life\">/100</div>\n                </div>\n                <div class=\"player player_2\">\n                    <div class=\"avatar\"></div>\n                    <p class=\"info-player-2\" style=\"text-align: center;\">" + p2 + "</p>\n                    <div class=\"life_line\"></div>\n                    <div class=\"life\">/100</div>\n                </div>\n            </div>\n        ";
  },
  render: function render(p1, p2) {
    return this.component(p1, p2);
  }
};

/***/ }),

/***/ "./assets/js/_map.js":
/*!***************************!*\
  !*** ./assets/js/_map.js ***!
  \***************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
var Map = {
  data: {
    nbX: 10,
    nbY: 8,
    size: 100 + 'px',
    line: '<div class="line"></div>',
    bloc: '<div class="bloc"></div>'
  },
  init: function init() {
    for (var i = 0; i <= Map.data.nbY; i++) {
      $('.arena').append(Map.data.line);
      $('.line:nth-child(' + i + ')').addClass('line-' + i);
      $('.line:nth-child(' + i + ')').attr('pos-y', i);

      for (var b = 0; b < Map.data.nbX; b++) {
        $('.line:nth-child(' + i + ')').append(Map.data.bloc);
        $('.line:nth-child(' + i + ') .bloc:nth-child(' + b + ')').attr('pos-x', b).attr('pos-y', i);
      }

      $('.line').css('display', 'flex');
      $('.bloc').css('border', '2px solid black');
      $('.bloc').css('width', this.data.size);
      $('.bloc').css('height', this.data.size);
    }
  }
};

/***/ }),

/***/ "./assets/js/_personnages.js":
/*!***********************************!*\
  !*** ./assets/js/_personnages.js ***!
  \***********************************/
/*! exports provided: Personnages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personnages", function() { return Personnages; });
var Personnages = {
  data: {
    player1: "pirate",
    player2: "marines",
    positions: {
      "pLine": 0,
      "pBloc": 0,
      "mLine": 0,
      "mbloc": 0
    }
  },
  init: function init(lines, blocs) {
    this.data.positions.pline = this.makeRandom(lines);
    this.data.positions.pBloc = this.makeRandom(blocs);
    this.data.positions.mline = this.makeRandom(lines);
    this.data.positions.mBloc = this.makeRandom(blocs);
    this.initPirate(this.data.positions.pBloc, this.data.positions.pline);
    this.initMarines(this.data.positions.mBloc == this.data.positions.pBloc ? this.makeRandom(blocs) : this.data.positions.mBloc, this.data.positions.mline == this.data.positions.pline ? this.makeRandom(lines) : this.data.positions.mline);
  },
  initPirate: function initPirate(x, y) {
    $('.bloc[pos-y=' + y + '][pos-x=' + x + ']').addClass('pos-pirate');
  },
  initMarines: function initMarines(x, y) {
    $('.bloc[pos-y=' + y + '][pos-x=' + x + ']').addClass('pos-marines');
  },
  makeRandom: function makeRandom(max) {
    return Math.floor(Math.random() * max) + 1;
  }
};

/***/ }),

/***/ "./assets/js/_router.js":
/*!******************************!*\
  !*** ./assets/js/_router.js ***!
  \******************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_home */ "./assets/js/_home.js");
/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_welcome */ "./assets/js/_welcome.js");


var Router = {
  welcome: function welcome() {
    return _welcome__WEBPACK_IMPORTED_MODULE_1__["Welcome"].render();
  },
  home: function home(p1, p2) {
    return _home__WEBPACK_IMPORTED_MODULE_0__["Home"].render(p1, p2);
  }
};

/***/ }),

/***/ "./assets/js/_welcome.js":
/*!*******************************!*\
  !*** ./assets/js/_welcome.js ***!
  \*******************************/
/*! exports provided: Welcome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Welcome", function() { return Welcome; });
var Welcome = {
  component: "\n        <div class=\"welcome\">\n            <h1>Rejoignez la bataille</h1>\n            \n            <div class=\"form\">\n                <input class=\"form-control\" type=\"text\" name=\"player1\" id=\"player1\" placeholder=\"Joueur 1\">\n                <input class=\"form-control\" type=\"text\" name=\"player2\" id=\"player2\" placeholder=\"Joueur 2\">\n                <button class=\"submit\">Entrer</button>\n            </div>\n        </div>\n    ",
  render: function render() {
    return this.component;
  }
};

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_map */ "./assets/js/_map.js");
/* harmony import */ var _personnages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_personnages */ "./assets/js/_personnages.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_router */ "./assets/js/_router.js");



$(document).ready(function () {
  $('.body').append(_router__WEBPACK_IMPORTED_MODULE_2__["Router"].welcome());
  var player1 = '';
  var player2 = '';
  $('#player1').on('input', function () {
    player1 = $('#player1').val();
  });
  $('#player2').on('input', function () {
    player2 = $('#player2').val();
  });
  $('.submit').click(function () {
    $('.welcome').hide();
    $('.body').append(_router__WEBPACK_IMPORTED_MODULE_2__["Router"].home(player1, player2));
    _map__WEBPACK_IMPORTED_MODULE_0__["Map"].init();
    _personnages__WEBPACK_IMPORTED_MODULE_1__["Personnages"].init(_map__WEBPACK_IMPORTED_MODULE_0__["Map"].data.nbX, _map__WEBPACK_IMPORTED_MODULE_0__["Map"].data.nbY);
  });
});

/***/ }),

/***/ "./assets/sass/app.sass":
/*!******************************!*\
  !*** ./assets/sass/app.sass ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./assets/js/app.js ./assets/sass/app.sass ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\wamp64\www\_OPENCLASSROOMS\game\assets\js\app.js */"./assets/js/app.js");
module.exports = __webpack_require__(/*! C:\wamp64\www\_OPENCLASSROOMS\game\assets\sass\app.sass */"./assets/sass/app.sass");


/***/ })

/******/ });