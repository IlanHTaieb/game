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

/***/ "./src/js/Manager/BlocManager.js":
/*!***************************************!*\
  !*** ./src/js/Manager/BlocManager.js ***!
  \***************************************/
/*! exports provided: BlocManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocManager", function() { return BlocManager; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BlocManager =
/*#__PURE__*/
function () {
  function BlocManager(bloc) {
    _classCallCheck(this, BlocManager);

    _defineProperty(this, "bloc", void 0);

    this.bloc = bloc;
  }

  _createClass(BlocManager, [{
    key: "render",
    value: function render(line) {
      return $('<div/>', {
        'class': 'bloc'
      }).css('width', this.bloc.getSize()).css('height', this.bloc.getSize()).css('border', '1px solid black').data({
        'id': line,
        'pos-y': this.bloc.getPosY(),
        'pos-x': this.bloc.getPosX(),
        'type': 'free'
      });
    }
  }]);

  return BlocManager;
}();

/***/ }),

/***/ "./src/js/Manager/CharacterManager.js":
/*!********************************************!*\
  !*** ./src/js/Manager/CharacterManager.js ***!
  \********************************************/
/*! exports provided: CharacterManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterManager", function() { return CharacterManager; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CharacterManager =
/*#__PURE__*/
function () {
  function CharacterManager(current) {
    _classCallCheck(this, CharacterManager);

    _defineProperty(this, "current", void 0);

    this.current = current;
  }

  _createClass(CharacterManager, [{
    key: "getCurrent",
    value: function getCurrent() {
      return this.current;
    }
  }, {
    key: "setCurrent",
    value: function setCurrent(posY, posX) {
      this.current.setPosY(posY);
      this.current.setPosX(posX);
    }
  }, {
    key: "render",
    value: function render() {
      var posY = this.current.getPosY();
      var posX = this.current.getPosX();
      var node = $('.bloc:data("pos-y")').filter(function () {
        return $(this).data("pos-y") == posY && $(this).data("pos-x") == posX;
      });
      node.data("type", this.current.getType());
      node.addClass(this.current.getType());
    }
  }, {
    key: "move",
    value: function move(posY, posX) {
      this.removeOld();
      this.setCurrent(posY, posX);
      this.render();
    }
  }, {
    key: "removeOld",
    value: function removeOld() {
      var posY = this.current.getPosY();
      var posX = this.current.getPosX();
      $('.bloc:data("pos-y")').filter(function () {
        return $(this).data("pos-y") == posY && $(this).data("pos-x") == posX;
      }).data('type', 'free').removeClass(this.current.getType());
    }
  }]);

  return CharacterManager;
}();

/***/ }),

/***/ "./src/js/Manager/ThingManager.js":
/*!****************************************!*\
  !*** ./src/js/Manager/ThingManager.js ***!
  \****************************************/
/*! exports provided: ThingManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThingManager", function() { return ThingManager; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ThingManager =
/*#__PURE__*/
function () {
  function ThingManager(current) {
    _classCallCheck(this, ThingManager);

    _defineProperty(this, "current", void 0);

    this.current = current;
  }

  _createClass(ThingManager, [{
    key: "getCurrent",
    value: function getCurrent() {
      return this.current;
    }
  }, {
    key: "setCurrent",
    value: function setCurrent(posY, posX) {
      this.current.setPosY(posY);
      this.current.setPosX(posX);
    }
  }, {
    key: "render",
    value: function render() {
      var posY = this.current.getPosY();
      var posX = this.current.getPosX();
      var node = $('.bloc:data("pos-y")').filter(function () {
        return $(this).data("pos-y") == posY && $(this).data("pos-x") == posX;
      });
      node.data("type", this.current.getType());
      node.addClass(this.current.getType());
    }
  }]);

  return ThingManager;
}();

/***/ }),

/***/ "./src/js/Model/Bloc.js":
/*!******************************!*\
  !*** ./src/js/Model/Bloc.js ***!
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

    _defineProperty(this, "posY", void 0);

    _defineProperty(this, "posX", void 0);

    _defineProperty(this, "size", void 0);

    this.posY = posY;
    this.posX = posX;
    this.size = size;
  }

  _createClass(Bloc, [{
    key: "getPosY",
    value: function getPosY() {
      return this.posY;
    }
  }, {
    key: "getPosX",
    value: function getPosX() {
      return this.posX;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.size + 'px';
    }
  }, {
    key: "setPosY",
    value: function setPosY(posY) {
      this.posY = posY;
    }
  }, {
    key: "setPosX",
    value: function setPosX(posX) {
      this.posX = posX;
    }
  }, {
    key: "setSize",
    value: function setSize(size) {
      this.size = size + 'px';
    }
  }]);

  return Bloc;
}();

/***/ }),

/***/ "./src/js/Model/Character.js":
/*!***********************************!*\
  !*** ./src/js/Model/Character.js ***!
  \***********************************/
/*! exports provided: Character */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Character =
/*#__PURE__*/
function () {
  function Character() {
    _classCallCheck(this, Character);

    _defineProperty(this, "heal", 200);

    _defineProperty(this, "power", 10);

    _defineProperty(this, "move", 3);

    _defineProperty(this, "posY", 0);

    _defineProperty(this, "posX", 0);

    _defineProperty(this, "type", '');
  }

  _createClass(Character, [{
    key: "getHeal",
    value: function getHeal() {
      return this.heal;
    }
  }, {
    key: "getPower",
    value: function getPower() {
      return this.power;
    }
  }, {
    key: "getMove",
    value: function getMove() {
      return this.move;
    }
  }, {
    key: "getPosY",
    value: function getPosY() {
      return this.posY;
    }
  }, {
    key: "getPosX",
    value: function getPosX() {
      return this.posX;
    }
  }, {
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }, {
    key: "setHeal",
    value: function setHeal(heal) {
      this.heal = heal;
    }
  }, {
    key: "setPower",
    value: function setPower(power) {
      this.power = power;
    }
  }, {
    key: "setMove",
    value: function setMove(move) {
      this.move = move;
    }
  }, {
    key: "setPosY",
    value: function setPosY(posY) {
      this.posY = posY;
    }
  }, {
    key: "setPosX",
    value: function setPosX(posX) {
      this.posX = posX;
    }
  }, {
    key: "setType",
    value: function setType(type) {
      this.type = type;
    }
  }]);

  return Character;
}();

/***/ }),

/***/ "./src/js/Model/Characters/Marines.js":
/*!********************************************!*\
  !*** ./src/js/Model/Characters/Marines.js ***!
  \********************************************/
/*! exports provided: Marines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marines", function() { return Marines; });
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ "./src/js/Model/Character.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Marines =
/*#__PURE__*/
function (_Character) {
  _inherits(Marines, _Character);

  function Marines() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Marines);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Marines)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "type", 'marines');

    return _this;
  }

  return Marines;
}(_Character__WEBPACK_IMPORTED_MODULE_0__["Character"]);

/***/ }),

/***/ "./src/js/Model/Characters/Pirate.js":
/*!*******************************************!*\
  !*** ./src/js/Model/Characters/Pirate.js ***!
  \*******************************************/
/*! exports provided: Pirate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pirate", function() { return Pirate; });
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ "./src/js/Model/Character.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Pirate =
/*#__PURE__*/
function (_Character) {
  _inherits(Pirate, _Character);

  function Pirate() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Pirate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pirate)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "type", 'pirate');

    return _this;
  }

  return Pirate;
}(_Character__WEBPACK_IMPORTED_MODULE_0__["Character"]);

/***/ }),

/***/ "./src/js/Model/Map.js":
/*!*****************************!*\
  !*** ./src/js/Model/Map.js ***!
  \*****************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _Bloc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bloc */ "./src/js/Model/Bloc.js");
/* harmony import */ var _Manager_BlocManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Manager/BlocManager */ "./src/js/Manager/BlocManager.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Map =
/*#__PURE__*/
function () {
  function Map() {
    _classCallCheck(this, Map);

    _defineProperty(this, "height", 10);

    _defineProperty(this, "width", 10);

    _defineProperty(this, "arena", []);

    _defineProperty(this, "freeBlocs", []);

    for (var y = 1; y <= this.height; y++) {
      this.arena[y] = [];

      for (var x = 1; x <= this.width; x++) {
        this.arena[y][x] = new _Manager_BlocManager__WEBPACK_IMPORTED_MODULE_1__["BlocManager"](new _Bloc__WEBPACK_IMPORTED_MODULE_0__["Bloc"](y, x));
      }
    }

    this.freeBlocs = this.arena;
  }

  _createClass(Map, [{
    key: "getHeigth",
    value: function getHeigth() {
      return this.height;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.width;
    }
  }, {
    key: "render",
    value: function render() {
      this.arena.forEach(function (bloc, line) {
        $('.arena').append($('<div/>', {
          'id': 'line' + line,
          'class': 'line'
        }).data('line', line));
        bloc.forEach(function (cases) {
          $('#line' + line).append(cases.render());
        });
      });
    }
  }, {
    key: "init",
    value: function init(element) {
      var item = this.chooseBlock();
      var that = this;

      if (item) {
        element.setCurrent(item.bloc.getPosY(), item.bloc.getPosX());
        element.render();
        that.freeBlocs[item.bloc.getPosY()].splice(item.bloc.getPosX(), 1);

        if (that.freeBlocs[item.bloc.getPosY()].length == 0) {
          that.freeBlocs.splice(item.bloc.getPosY(), 1);
        }
      }
    }
  }, {
    key: "chooseBlock",
    value: function chooseBlock() {
      var line = this.posRandom('line');
      var column = this.posRandom('column');

      if ('undefined' != this.freeBlocs[line][column]) {
        return this.freeBlocs[line][column];
      } else {
        this.chooseBlock();
      }
    }
  }, {
    key: "move",
    value: function move(character, bloc) {
      console.log('- Starting move');
      var currentPosition = {
        Y: character.getCurrent().getPosY(),
        X: character.getCurrent().getPosX()
      };
      var destinationPosition = {
        Y: bloc.posY,
        X: bloc.posX
      };
      var move = {
        Y: destinationPosition.Y - currentPosition.Y,
        X: destinationPosition.X - currentPosition.X
      };
      console.log('- Character position');
      console.log(currentPosition);
      console.log('- Bloc position');
      console.log(destinationPosition);
      console.log('- Move length');
      console.log(move);

      if (move.Y + move.X <= character.getCurrent().getMove() && move.Y + move.X > -4) {
        this.createFreeBloc(bloc.posY, bloc.posX);
        character.move(bloc.posY, bloc.posX);
      }
    }
  }, {
    key: "createFreeBloc",
    value: function createFreeBloc(posY, posX) {
      this.freeBlocs[posY][posX] = new _Manager_BlocManager__WEBPACK_IMPORTED_MODULE_1__["BlocManager"](new _Bloc__WEBPACK_IMPORTED_MODULE_0__["Bloc"](posY, posX));
    }
  }, {
    key: "posRandom",
    value: function posRandom(dir) {
      var line = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return Math.floor(Math.random() * (dir == 'line' ? this.height : this.freeBlocs[line].length - 1)) + 1;
    }
  }]);

  return Map;
}();

/***/ }),

/***/ "./src/js/Model/Thing.js":
/*!*******************************!*\
  !*** ./src/js/Model/Thing.js ***!
  \*******************************/
/*! exports provided: Thing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thing", function() { return Thing; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Thing =
/*#__PURE__*/
function () {
  function Thing() {
    _classCallCheck(this, Thing);

    _defineProperty(this, "posY", 0);

    _defineProperty(this, "posX", 0);

    _defineProperty(this, "type", '');
  }

  _createClass(Thing, [{
    key: "getPosY",
    value: function getPosY() {
      return this.posY;
    }
  }, {
    key: "getPosX",
    value: function getPosX() {
      return this.posX;
    }
  }, {
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }, {
    key: "setPosY",
    value: function setPosY(posY) {
      this.posY = posY;
    }
  }, {
    key: "setPosX",
    value: function setPosX(posX) {
      this.posX = posX;
    }
  }]);

  return Thing;
}();

/***/ }),

/***/ "./src/js/Model/Things/Wall.js":
/*!*************************************!*\
  !*** ./src/js/Model/Things/Wall.js ***!
  \*************************************/
/*! exports provided: Wall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wall", function() { return Wall; });
/* harmony import */ var _Thing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Thing */ "./src/js/Model/Thing.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Wall =
/*#__PURE__*/
function (_Thing) {
  _inherits(Wall, _Thing);

  function Wall() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Wall);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Wall)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "type", 'wall');

    _defineProperty(_assertThisInitialized(_this), "nb", 20);

    return _this;
  }

  return Wall;
}(_Thing__WEBPACK_IMPORTED_MODULE_0__["Thing"]);

/***/ }),

/***/ "./src/js/Model/Things/Weapon.js":
/*!***************************************!*\
  !*** ./src/js/Model/Things/Weapon.js ***!
  \***************************************/
/*! exports provided: Weapon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weapon", function() { return Weapon; });
/* harmony import */ var _Thing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Thing */ "./src/js/Model/Thing.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Weapon =
/*#__PURE__*/
function (_Thing) {
  _inherits(Weapon, _Thing);

  function Weapon() {
    _classCallCheck(this, Weapon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Weapon).apply(this, arguments));
  }

  return Weapon;
}(_Thing__WEBPACK_IMPORTED_MODULE_0__["Thing"]);

/***/ }),

/***/ "./src/js/Model/Things/Weapons/Knife.js":
/*!**********************************************!*\
  !*** ./src/js/Model/Things/Weapons/Knife.js ***!
  \**********************************************/
/*! exports provided: Knife */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Knife", function() { return Knife; });
/* harmony import */ var _Weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Weapon */ "./src/js/Model/Things/Weapon.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Knife =
/*#__PURE__*/
function (_Weapon) {
  _inherits(Knife, _Weapon);

  function Knife() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Knife);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Knife)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "type", 'knife');

    return _this;
  }

  return Knife;
}(_Weapon__WEBPACK_IMPORTED_MODULE_0__["Weapon"]);

/***/ }),

/***/ "./src/js/Model/Things/Weapons/Shootgun.js":
/*!*************************************************!*\
  !*** ./src/js/Model/Things/Weapons/Shootgun.js ***!
  \*************************************************/
/*! exports provided: Shootgun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shootgun", function() { return Shootgun; });
/* harmony import */ var _Weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Weapon */ "./src/js/Model/Things/Weapon.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Shootgun =
/*#__PURE__*/
function (_Weapon) {
  _inherits(Shootgun, _Weapon);

  function Shootgun() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Shootgun);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Shootgun)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "type", 'shootgun');

    return _this;
  }

  return Shootgun;
}(_Weapon__WEBPACK_IMPORTED_MODULE_0__["Weapon"]);

/***/ }),

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
/* harmony import */ var _Model_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Model/Map */ "./src/js/Model/Map.js");
/* harmony import */ var _Model_Characters_Pirate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Model/Characters/Pirate */ "./src/js/Model/Characters/Pirate.js");
/* harmony import */ var _Manager_CharacterManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Manager/CharacterManager */ "./src/js/Manager/CharacterManager.js");
/* harmony import */ var _Model_Characters_Marines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Model/Characters/Marines */ "./src/js/Model/Characters/Marines.js");
/* harmony import */ var _Manager_ThingManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Manager/ThingManager */ "./src/js/Manager/ThingManager.js");
/* harmony import */ var _Model_Things_Wall__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Model/Things/Wall */ "./src/js/Model/Things/Wall.js");
/* harmony import */ var _Model_Things_Weapons_Knife__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Model/Things/Weapons/Knife */ "./src/js/Model/Things/Weapons/Knife.js");
/* harmony import */ var _Model_Things_Weapons_Shootgun__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Model/Things/Weapons/Shootgun */ "./src/js/Model/Things/Weapons/Shootgun.js");









$(document).ready(function () {
  //Router.home()
  _router__WEBPACK_IMPORTED_MODULE_0__["Router"].arena('Toto', 'Ploufy');
  var map = new _Model_Map__WEBPACK_IMPORTED_MODULE_1__["Map"]();
  map.render();
  var pirate = new _Manager_CharacterManager__WEBPACK_IMPORTED_MODULE_3__["CharacterManager"](new _Model_Characters_Pirate__WEBPACK_IMPORTED_MODULE_2__["Pirate"]());
  var marines = new _Manager_CharacterManager__WEBPACK_IMPORTED_MODULE_3__["CharacterManager"](new _Model_Characters_Marines__WEBPACK_IMPORTED_MODULE_4__["Marines"]());
  var knife = new _Manager_ThingManager__WEBPACK_IMPORTED_MODULE_5__["ThingManager"](new _Model_Things_Weapons_Knife__WEBPACK_IMPORTED_MODULE_7__["Knife"]());
  var shootgun = new _Manager_ThingManager__WEBPACK_IMPORTED_MODULE_5__["ThingManager"](new _Model_Things_Weapons_Shootgun__WEBPACK_IMPORTED_MODULE_8__["Shootgun"]());
  map.init(pirate);
  map.init(marines);
  map.init(knife);
  map.init(shootgun);
  var wall = new _Manager_ThingManager__WEBPACK_IMPORTED_MODULE_5__["ThingManager"](new _Model_Things_Wall__WEBPACK_IMPORTED_MODULE_6__["Wall"]());

  for (var i = 0; i <= 15; i++) {
    map.init(wall);
  }

  $('.bloc').click(function () {
    if ($(this).data('type') == 'free') {
      map.move(pirate, $(this).data());
    }
  });
});

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