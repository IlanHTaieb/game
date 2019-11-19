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

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _Manager_Elements_CharacterManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager/Elements/CharacterManager.js */ "./src/js/Manager/Elements/CharacterManager.js");
/* harmony import */ var _Model_Characters_Pirate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Model/Characters/Pirate.js */ "./src/js/Model/Characters/Pirate.js");
/* harmony import */ var _Model_Characters_Marines_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Model/Characters/Marines.js */ "./src/js/Model/Characters/Marines.js");
/* harmony import */ var _Model_Map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Model/Map.js */ "./src/js/Model/Map.js");
/* harmony import */ var _Manager_Elements_ItemManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Manager/Elements/ItemManager.js */ "./src/js/Manager/Elements/ItemManager.js");
/* harmony import */ var _Model_Things_Weapons_Knife_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Model/Things/Weapons/Knife.js */ "./src/js/Model/Things/Weapons/Knife.js");
/* harmony import */ var _Model_Things_Weapons_Shootgun_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Model/Things/Weapons/Shootgun.js */ "./src/js/Model/Things/Weapons/Shootgun.js");
/* harmony import */ var _Manager_Elements_ThingManager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Manager/Elements/ThingManager.js */ "./src/js/Manager/Elements/ThingManager.js");
/* harmony import */ var _Model_Things_Wall_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Model/Things/Wall.js */ "./src/js/Model/Things/Wall.js");
/* harmony import */ var _Model_Things_potion_Poison_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Model/Things/potion/Poison.js */ "./src/js/Model/Things/potion/Poison.js");
/* harmony import */ var _Model_Things_potion_Heal_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Model/Things/potion/Heal.js */ "./src/js/Model/Things/potion/Heal.js");
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_router.js */ "./src/js/_router.js");
/* harmony import */ var _InstantFight_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InstantFight.js */ "./src/js/InstantFight.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var Game =
/*#__PURE__*/
function () {
  /**
   * Game constructor.
   *
   * @param pirateName
   * @param marinesName
   */
  function Game(pirateName, marinesName) {
    _classCallCheck(this, Game);

    _defineProperty(this, "characters", void 0);

    _defineProperty(this, "things", void 0);

    _defineProperty(this, "map", void 0);

    this.characters = {
      pirate: new _Manager_Elements_CharacterManager_js__WEBPACK_IMPORTED_MODULE_0__["CharacterManager"](new _Model_Characters_Pirate_js__WEBPACK_IMPORTED_MODULE_1__["Pirate"]()),
      marines: new _Manager_Elements_CharacterManager_js__WEBPACK_IMPORTED_MODULE_0__["CharacterManager"](new _Model_Characters_Marines_js__WEBPACK_IMPORTED_MODULE_2__["Marines"]())
    };
    this.characters.pirate.getCurrent().setName(pirateName);
    this.characters.marines.getCurrent().setName(marinesName);
    this.things = {
      weapons: {
        knife: new _Manager_Elements_ItemManager_js__WEBPACK_IMPORTED_MODULE_4__["ItemManager"](new _Model_Things_Weapons_Knife_js__WEBPACK_IMPORTED_MODULE_5__["Knife"]()),
        shootgun: new _Manager_Elements_ItemManager_js__WEBPACK_IMPORTED_MODULE_4__["ItemManager"](new _Model_Things_Weapons_Shootgun_js__WEBPACK_IMPORTED_MODULE_6__["Shootgun"]())
      },
      potions: {
        poison: new _Manager_Elements_ItemManager_js__WEBPACK_IMPORTED_MODULE_4__["ItemManager"](new _Model_Things_potion_Poison_js__WEBPACK_IMPORTED_MODULE_9__["Poison"]()),
        heal: new _Manager_Elements_ItemManager_js__WEBPACK_IMPORTED_MODULE_4__["ItemManager"](new _Model_Things_potion_Heal_js__WEBPACK_IMPORTED_MODULE_10__["Heal"]())
      },
      wall: new _Manager_Elements_ThingManager_js__WEBPACK_IMPORTED_MODULE_7__["ThingManager"](new _Model_Things_Wall_js__WEBPACK_IMPORTED_MODULE_8__["Wall"]())
    };
    this.map = new _Model_Map_js__WEBPACK_IMPORTED_MODULE_3__["Map"]();
  }
  /**
   * Start the game.
   */


  _createClass(Game, [{
    key: "start",
    value: function start() {
      this.map.render();
      this.init(this.characters.pirate);
      this.init(this.characters.marines);
      this.init(this.things.weapons.knife);
      this.init(this.things.weapons.shootgun);
      this.init(this.things.potions.heal);
      this.init(this.things.potions.poison);

      for (var i = 0; i <= 15; i++) {
        this.init(this.things.wall);
      }

      this.setFirstPlayer(this.characters);
      _router_js__WEBPACK_IMPORTED_MODULE_11__["Router"].info(this.characters.pirate, this.characters.marines);
      $('.infos-arena-text').text('Au tour de ' + this.getCurrentPlayer().getCurrent().getName());
    }
    /**
     * Init all element for a game.
     *
     * @param element
     */

  }, {
    key: "init",
    value: function init(element) {
      var item = this.map.getRandomBlock();
      var that = this;

      if (item) {
        element.setCurrent(item.bloc.getPosY(), item.bloc.getPosX());
        element.render();
        that.map.freeBlocs[item.bloc.getPosY()].splice(item.bloc.getPosX(), 1);

        if (0 === that.map.freeBlocs[item.bloc.getPosY()].length) {
          that.map.freeBlocs.splice(item.bloc.getPosY(), 1);
        }
      }
    }
    /**
     * Set the first player for the game.
     */

  }, {
    key: "setFirstPlayer",
    value: function setFirstPlayer() {
      var first = Math.floor(Math.random() * Object.entries(this.characters).length);
      this.currentPlayer = first;
    }
    /**
     * Get the current player.
     */

  }, {
    key: "getCurrentPlayer",
    value: function getCurrentPlayer() {
      return Object.entries(this.characters)[this.currentPlayer][1];
    }
    /**
     * Set one current player.
     */

  }, {
    key: "setCurrentPlayer",
    value: function setCurrentPlayer() {
      this.currentPlayer = this.currentPlayer >= Object.keys(this.characters).length - 1 ? 0 : this.currentPlayer + 1;
    }
    /**
     * Show the possible case to move for current player.
     *
     * @param bloc
     * @param element
     */

  }, {
    key: "showCase",
    value: function showCase(bloc, element) {
      var line;
      var currentPosition = {
        Y: this.getCurrentPlayer().getCurrent().getPosY(),
        X: this.getCurrentPlayer().getCurrent().getPosX()
      };
      var move = {
        Y: bloc.posY - currentPosition.Y,
        X: bloc.posX - currentPosition.X
      };

      if (this.checkMove(move) && (element.data("posY") !== currentPosition.Y || element.data("posX") !== currentPosition.X)) {
        $('.bloc').css('background-color', 'rgba(49, 145, 196, 0.5)');
        element.css('background-color', 'green');
      } else {
        $('.bloc').css('background-color', 'rgba(49, 145, 196, 0.5)');
      }
    }
    /**
     * Move the current player to the selected case.
     *
     * @param bloc
     */

  }, {
    key: "move",
    value: function move(bloc) {
      var _this = this;

      var move = {
        Y: bloc.posY - this.getCurrentPlayer().getCurrent().getPosY(),
        X: bloc.posX - this.getCurrentPlayer().getCurrent().getPosX()
      };
      console.log('start');
      this.checkObstacle({
        posY: this.getCurrentPlayer().getCurrent().getPosY(),
        posX: this.getCurrentPlayer().getCurrent().getPosX()
      }, bloc);
      console.log('ok');

      if (this.checkMove(move)) {
        $.when(this.dropItem(bloc)).done(function () {
          _this.map.createFreeBloc(bloc.posY, bloc.posX);

          _this.getCurrentPlayer().move(bloc);

          _this.setCurrentPlayer();

          $('.infos-arena-text').text('Au tour de ' + _this.getCurrentPlayer().getCurrent().getName());
        });
      }
    }
    /**
     * Give item to player.
     *
     * @param bloc
     */

  }, {
    key: "dropItem",
    value: function dropItem(bloc) {
      if (bloc.type === 'item') {
        this.getCurrentPlayer().getCurrent().getBag().push(bloc.instance);
        console.log(this.getCurrentPlayer().getCurrent());
        $('.' + bloc.instance.name).data('type', 'free').data('instance', undefined).empty().removeClass(bloc.instance.name);
      }
    }
    /**
     * Check if action is possible.
     *
     * @param move
     * @returns {boolean}
     */

  }, {
    key: "checkMove",
    value: function checkMove(move) {
      var speed = this.getCurrentPlayer().getCurrent().getMove();
      return this.unsigned(move.Y) + this.unsigned(move.X) <= speed;
    }
  }, {
    key: "checkObstacle",
    value: function checkObstacle(player, bloc) {
      var positionsY = [player.posY, bloc.posY];
      var positionsX = [player.posX, bloc.posX];

      for (var l = Math.min.apply(Math, positionsY); l < Math.max.apply(Math, positionsY); l++) {
        console.log(this.getbloc({
          posY: l,
          posX: bloc.posX
        }));
      }

      for (var x = Math.min.apply(Math, positionsX); x < Math.max.apply(Math, positionsX); x++) {
        console.log(this.getbloc({
          posY: bloc.posY,
          posX: x
        }));
      }
    }
  }, {
    key: "getbloc",
    value: function getbloc(bloc) {
      var node = $('.bloc:data("pos-y")').filter(function () {
        return $(this).data("pos-y") == bloc.posY && $(this).data("pos-x") == bloc.posX;
      });
      return node.data();
    }
    /**
     * Check if current player is beside his enemy.
     *
     * @returns {boolean}
     */

  }, {
    key: "isBesideEnemy",
    value: function isBesideEnemy() {
      var compareY = this.characters.marines.current.getPosY() - this.characters.pirate.current.getPosY();
      var compareX = this.characters.marines.current.getPosX() - this.characters.pirate.current.getPosX();
      compareY = compareY < 0 ? -compareY : compareY;
      compareX = compareX < 0 ? -compareX : compareX;
      return 1 === compareY && 0 === compareX || 0 === compareY && 1 === compareX;
    }
    /**
     * Run the fight!
     */

  }, {
    key: "runFight",
    value: function runFight() {
      var _this2 = this;

      $.when(_router_js__WEBPACK_IMPORTED_MODULE_11__["Router"].fight()).done(function () {
        var fight = new _InstantFight_js__WEBPACK_IMPORTED_MODULE_12__["InstantFight"](_this2.characters);
        fight.addEvents();
      });
    }
    /**
     * Format number to unsigned.
     *
     * @param value
     * @returns {number}
     */

  }, {
    key: "unsigned",
    value: function unsigned(value) {
      return value > 0 ? value : -value;
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/js/InstantFight.js":
/*!********************************!*\
  !*** ./src/js/InstantFight.js ***!
  \********************************/
/*! exports provided: InstantFight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstantFight", function() { return InstantFight; });
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_router.js */ "./src/js/_router.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var InstantFight =
/*#__PURE__*/
function () {
  function InstantFight(characters) {
    _classCallCheck(this, InstantFight);

    _defineProperty(this, "characters", void 0);

    _defineProperty(this, "target", void 0);

    _defineProperty(this, "currentPlayer", void 0);

    var that = this;
    this.characters = characters;
    $.when(this.setFirstPlayer()).done(function () {
      that.message('Au tour de ' + that.getCurrentPlayer().getCurrent().getName());
    });
  }

  _createClass(InstantFight, [{
    key: "addEvents",
    value: function addEvents() {
      var _this = this;

      $('#hit').click(function () {
        _this.hit();
      });
      $('#pokeball').click(function () {
        _this.pokeball();
      });
      $('#weapons').click(function () {
        console.log('Items !');
      });
      $('#flee').click(function () {
        _this.flee();
      });
    }
    /**
     * Set the first player for the game.
     */

  }, {
    key: "setFirstPlayer",
    value: function setFirstPlayer() {
      var first = Math.floor(Math.random() * Object.entries(this.characters).length);
      this.currentPlayer = first;
      this.setTarget();
    }
    /**
     * Get the current player.
     */

  }, {
    key: "getCurrentPlayer",
    value: function getCurrentPlayer() {
      return Object.entries(this.characters)[this.currentPlayer][1];
    }
    /**
     * Set one current player.
     */

  }, {
    key: "setCurrentPlayer",
    value: function setCurrentPlayer() {
      this.currentPlayer = this.currentPlayer >= Object.keys(this.characters).length - 1 ? 0 : this.currentPlayer + 1;
    }
    /**
     * Get the current target.
     *
     * @returns {*}
     */

  }, {
    key: "getTarget",
    value: function getTarget() {
      return this.target;
    }
    /**
     * Set target.
     */

  }, {
    key: "setTarget",
    value: function setTarget() {
      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

      if (target) {
        this.target = target;
      } else {
        var range = this.currentPlayer >= Object.keys(this.characters).length - 1 ? 0 : this.currentPlayer + 1;
        this.target = Object.entries(this.characters)[range][1];
      }
    }
    /**
     * Hit your enemy!
     *
     * @param target
     */

  }, {
    key: "hit",
    value: function hit() {
      var _this2 = this;

      var that = this;
      var target = this.getTarget().getCurrent();
      var currentPlayer = this.getCurrentPlayer().getCurrent();
      $('.btn').attr("disabled", true);
      document.getElementById('audio-sword').play();
      this.message(currentPlayer.getName() + ' attaque ' + target.getName());
      setTimeout(function () {
        document.getElementById('audio-ouch').play();
        that.message(target.getName() + ' a perdu ' + currentPlayer.getPower() + 'PDV');
      }, 2000);
      target.setHeal(target.getHeal() - currentPlayer.getPower());

      if (target.getHeal() <= 0) {
        $.when(_router_js__WEBPACK_IMPORTED_MODULE_0__["Router"].win(currentPlayer.getType())).done(function () {
          $('#replay').click(function () {
            location.reload();
          });
        });
      } else {
        var _that = this;

        $.when(this.setTarget(this.getCurrentPlayer())).done(function () {
          _this2.setCurrentPlayer();

          setTimeout(function () {
            _that.message('Au tour de ' + _that.getCurrentPlayer().getCurrent().getName());
          }, 4500);
          setTimeout(function () {
            $('.btn').attr("disabled", false);
          }, 4500);
        });
      }
    }
  }, {
    key: "pokeball",
    value: function pokeball() {
      this.message(this.getTarget().getCurrent().getName() + ' n\'est pas un pokemon.');
    }
  }, {
    key: "flee",
    value: function flee() {
      $.when(_router_js__WEBPACK_IMPORTED_MODULE_0__["Router"].win(this.getTarget().getCurrent().getType())).done(function () {
        $('#replay').click(function () {
          location.reload();
        });
      });
    }
    /**
     * Set message for players.
     *
     * @param message
     */

  }, {
    key: "message",
    value: function message(_message) {
      $('#info').empty().append('<p class="fight-message__text">' + _message + '</p>');
    }
  }]);

  return InstantFight;
}();

/***/ }),

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

/***/ "./src/js/Manager/ElementManager.js":
/*!******************************************!*\
  !*** ./src/js/Manager/ElementManager.js ***!
  \******************************************/
/*! exports provided: ElementManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementManager", function() { return ElementManager; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ElementManager =
/*#__PURE__*/
function () {
  function ElementManager(current) {
    _classCallCheck(this, ElementManager);

    _defineProperty(this, "current", void 0);

    this.current = current;
  }

  _createClass(ElementManager, [{
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
      node.append('<img height="350px" width="75px" class="arena-fighter ' + this.getCurrent().getType() + '" src="../../../public/images/perso/fight-' + this.getCurrent().getType() + '.png">');
      node.data("type", this.current.getType());
      node.data("instance", this.current);
      this.addTypeClass(node);
    }
  }, {
    key: "addTypeClass",
    value: function addTypeClass(node) {
      node.addClass(this.current.getType());
    }
  }]);

  return ElementManager;
}();

/***/ }),

/***/ "./src/js/Manager/Elements/CharacterManager.js":
/*!*****************************************************!*\
  !*** ./src/js/Manager/Elements/CharacterManager.js ***!
  \*****************************************************/
/*! exports provided: CharacterManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterManager", function() { return CharacterManager; });
/* harmony import */ var _ElementManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ElementManager.js */ "./src/js/Manager/ElementManager.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var CharacterManager =
/*#__PURE__*/
function (_ElementManager) {
  _inherits(CharacterManager, _ElementManager);

  function CharacterManager() {
    _classCallCheck(this, CharacterManager);

    return _possibleConstructorReturn(this, _getPrototypeOf(CharacterManager).apply(this, arguments));
  }

  _createClass(CharacterManager, [{
    key: "create",
    value: function create(node) {
      node.append('<img height="350px" width="75px" class="arena-fighter ' + this.getCurrent().getType() + '" src="../../../public/images/perso/fight-' + this.getCurrent().getType() + '.png">');
    }
  }, {
    key: "move",
    value: function move(bloc) {
      this.removeOld();
      this.setCurrent(bloc.posY, bloc.posX);
      this.render();
    }
  }, {
    key: "removeOld",
    value: function removeOld() {
      var posY = this.current.getPosY();
      var posX = this.current.getPosX();
      $('.bloc:data("pos-y")').filter(function () {
        return $(this).data("pos-y") == posY && $(this).data("pos-x") == posX;
      }).empty().data('type', 'free').data('instance', null).removeClass(this.current.getType());
    }
  }]);

  return CharacterManager;
}(_ElementManager_js__WEBPACK_IMPORTED_MODULE_0__["ElementManager"]);

/***/ }),

/***/ "./src/js/Manager/Elements/ItemManager.js":
/*!************************************************!*\
  !*** ./src/js/Manager/Elements/ItemManager.js ***!
  \************************************************/
/*! exports provided: ItemManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemManager", function() { return ItemManager; });
/* harmony import */ var _ElementManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ElementManager.js */ "./src/js/Manager/ElementManager.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var ItemManager =
/*#__PURE__*/
function (_ElementManager) {
  _inherits(ItemManager, _ElementManager);

  function ItemManager() {
    _classCallCheck(this, ItemManager);

    return _possibleConstructorReturn(this, _getPrototypeOf(ItemManager).apply(this, arguments));
  }

  _createClass(ItemManager, [{
    key: "addTypeClass",
    value: function addTypeClass(node) {
      node.addClass(this.current.getName()).empty().append('<img class="arena-fighter ' + this.getCurrent().getName() + '" src="../../../../public/images/perso/fight-' + this.getCurrent().getName() + '.png">');
    }
  }]);

  return ItemManager;
}(_ElementManager_js__WEBPACK_IMPORTED_MODULE_0__["ElementManager"]);

/***/ }),

/***/ "./src/js/Manager/Elements/ThingManager.js":
/*!*************************************************!*\
  !*** ./src/js/Manager/Elements/ThingManager.js ***!
  \*************************************************/
/*! exports provided: ThingManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThingManager", function() { return ThingManager; });
/* harmony import */ var _ElementManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ElementManager.js */ "./src/js/Manager/ElementManager.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var ThingManager =
/*#__PURE__*/
function (_ElementManager) {
  _inherits(ThingManager, _ElementManager);

  function ThingManager() {
    _classCallCheck(this, ThingManager);

    return _possibleConstructorReturn(this, _getPrototypeOf(ThingManager).apply(this, arguments));
  }

  return ThingManager;
}(_ElementManager_js__WEBPACK_IMPORTED_MODULE_0__["ElementManager"]);

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
/* harmony import */ var _Model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model.js */ "./src/js/Model/Model.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Bloc =
/*#__PURE__*/
function (_Model) {
  _inherits(Bloc, _Model);

  function Bloc(posY, posX) {
    var _this;

    var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 95;

    _classCallCheck(this, Bloc);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Bloc).call(this));

    _defineProperty(_assertThisInitialized(_this), "size", void 0);

    _this.posY = posY;
    _this.posX = posX;
    _this.size = size;
    return _this;
  }

  _createClass(Bloc, [{
    key: "getSize",
    value: function getSize() {
      return this.size + 'px';
    }
  }, {
    key: "setSize",
    value: function setSize(size) {
      this.size = size + 'px';
    }
  }]);

  return Bloc;
}(_Model_js__WEBPACK_IMPORTED_MODULE_0__["Model"]);

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
/* harmony import */ var _Model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model.js */ "./src/js/Model/Model.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Character =
/*#__PURE__*/
function (_Model) {
  _inherits(Character, _Model);

  function Character() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Character);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Character)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "heal", 100);

    _defineProperty(_assertThisInitialized(_this), "power", 10);

    _defineProperty(_assertThisInitialized(_this), "move", 3);

    _defineProperty(_assertThisInitialized(_this), "bag", []);

    _defineProperty(_assertThisInitialized(_this), "name", void 0);

    return _this;
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
    key: "getBag",
    value: function getBag() {
      return this.bag;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
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
    key: "setBag",
    value: function setBag(bag) {
      this.bag = bag;
    }
  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
  }]);

  return Character;
}(_Model_js__WEBPACK_IMPORTED_MODULE_0__["Model"]);

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
/* harmony import */ var _Character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character.js */ "./src/js/Model/Character.js");
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
}(_Character_js__WEBPACK_IMPORTED_MODULE_0__["Character"]);

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
/* harmony import */ var _Character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character.js */ "./src/js/Model/Character.js");
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
}(_Character_js__WEBPACK_IMPORTED_MODULE_0__["Character"]);

/***/ }),

/***/ "./src/js/Model/Item.js":
/*!******************************!*\
  !*** ./src/js/Model/Item.js ***!
  \******************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var _Model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model.js */ "./src/js/Model/Model.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Item =
/*#__PURE__*/
function (_Model) {
  _inherits(Item, _Model);

  function Item() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Item)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "type", 'item');

    _defineProperty(_assertThisInitialized(_this), "name", '');

    return _this;
  }

  _createClass(Item, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }]);

  return Item;
}(_Model_js__WEBPACK_IMPORTED_MODULE_0__["Model"]);

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
/* harmony import */ var _Bloc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bloc.js */ "./src/js/Model/Bloc.js");
/* harmony import */ var _Manager_BlocManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Manager/BlocManager.js */ "./src/js/Manager/BlocManager.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Map =
/*#__PURE__*/
function () {
  /**
   * The Map constructor.
   */
  function Map() {
    _classCallCheck(this, Map);

    _defineProperty(this, "height", 10);

    _defineProperty(this, "width", 10);

    _defineProperty(this, "arena", []);

    _defineProperty(this, "freeBlocs", []);

    for (var y = 1; y <= this.height; y++) {
      this.arena[y] = [];

      for (var x = 1; x <= this.width; x++) {
        this.arena[y][x] = new _Manager_BlocManager_js__WEBPACK_IMPORTED_MODULE_1__["BlocManager"](new _Bloc_js__WEBPACK_IMPORTED_MODULE_0__["Bloc"](y, x));
      }
    }

    this.freeBlocs = this.arena;
  }
  /**
   * Get height of the map.
   *
   * @returns {number}
   */


  _createClass(Map, [{
    key: "getHeight",
    value: function getHeight() {
      return this.height;
    }
    /**
     * Get width of the map.
     *
     * @returns {number}
     */

  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.width;
    }
    /**
     * Append the map to DOM.
     */

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
    /**
     * Select one bloc in the map.
     *
     * @returns {*}
     */

  }, {
    key: "getRandomBlock",
    value: function getRandomBlock() {
      var line = this.posRandom('line');
      var column = this.posRandom('column');

      if ('undefined' !== this.freeBlocs[line][column]) {
        return this.freeBlocs[line][column];
      } else {
        this.getRandomBlock();
      }
    }
    /**
     * Make the selected bloc free.
     *
     * @param posY
     * @param posX
     */

  }, {
    key: "createFreeBloc",
    value: function createFreeBloc(posY, posX) {
      this.freeBlocs[posY][posX] = new _Manager_BlocManager_js__WEBPACK_IMPORTED_MODULE_1__["BlocManager"](new _Bloc_js__WEBPACK_IMPORTED_MODULE_0__["Bloc"](posY, posX));
    }
    /**
     * Generate a random index with freeBlocs's metrix.
     *
     * @param dir
     * @param line
     * @returns {number}
     */

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

/***/ "./src/js/Model/Model.js":
/*!*******************************!*\
  !*** ./src/js/Model/Model.js ***!
  \*******************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Model =
/*#__PURE__*/
function () {
  function Model() {
    _classCallCheck(this, Model);

    _defineProperty(this, "posY", 0);

    _defineProperty(this, "posX", 0);

    _defineProperty(this, "type", '');
  }

  _createClass(Model, [{
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

  return Model;
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
/* harmony import */ var _Model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model.js */ "./src/js/Model/Model.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Thing =
/*#__PURE__*/
function (_Model) {
  _inherits(Thing, _Model);

  function Thing() {
    _classCallCheck(this, Thing);

    return _possibleConstructorReturn(this, _getPrototypeOf(Thing).apply(this, arguments));
  }

  return Thing;
}(_Model_js__WEBPACK_IMPORTED_MODULE_0__["Model"]);

/***/ }),

/***/ "./src/js/Model/Things/Potion.js":
/*!***************************************!*\
  !*** ./src/js/Model/Things/Potion.js ***!
  \***************************************/
/*! exports provided: Potion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Potion", function() { return Potion; });
/* harmony import */ var _Item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Item.js */ "./src/js/Model/Item.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Potion =
/*#__PURE__*/
function (_Item) {
  _inherits(Potion, _Item);

  function Potion() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Potion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Potion)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "power", void 0);

    return _this;
  }

  _createClass(Potion, [{
    key: "getPower",
    value: function getPower() {
      return this.power;
    }
  }]);

  return Potion;
}(_Item_js__WEBPACK_IMPORTED_MODULE_0__["Item"]);

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
/* harmony import */ var _Thing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Thing.js */ "./src/js/Model/Thing.js");
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
}(_Thing_js__WEBPACK_IMPORTED_MODULE_0__["Thing"]);

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
/* harmony import */ var _Item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Item.js */ "./src/js/Model/Item.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Weapon =
/*#__PURE__*/
function (_Item) {
  _inherits(Weapon, _Item);

  function Weapon() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Weapon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Weapon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "power", void 0);

    return _this;
  }

  _createClass(Weapon, [{
    key: "getPower",
    value: function getPower() {
      return this.power;
    }
  }]);

  return Weapon;
}(_Item_js__WEBPACK_IMPORTED_MODULE_0__["Item"]);

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
/* harmony import */ var _Weapon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Weapon.js */ "./src/js/Model/Things/Weapon.js");
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

    _defineProperty(_assertThisInitialized(_this), "name", 'knife');

    _defineProperty(_assertThisInitialized(_this), "power", 20);

    return _this;
  }

  return Knife;
}(_Weapon_js__WEBPACK_IMPORTED_MODULE_0__["Weapon"]);

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
/* harmony import */ var _Weapon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Weapon.js */ "./src/js/Model/Things/Weapon.js");
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

    _defineProperty(_assertThisInitialized(_this), "name", 'shootgun');

    _defineProperty(_assertThisInitialized(_this), "power", 40);

    return _this;
  }

  return Shootgun;
}(_Weapon_js__WEBPACK_IMPORTED_MODULE_0__["Weapon"]);

/***/ }),

/***/ "./src/js/Model/Things/potion/Heal.js":
/*!********************************************!*\
  !*** ./src/js/Model/Things/potion/Heal.js ***!
  \********************************************/
/*! exports provided: Heal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heal", function() { return Heal; });
/* harmony import */ var _Potion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Potion.js */ "./src/js/Model/Things/Potion.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Heal =
/*#__PURE__*/
function (_Potion) {
  _inherits(Heal, _Potion);

  function Heal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Heal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Heal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "name", 'heal');

    _defineProperty(_assertThisInitialized(_this), "power", -50);

    return _this;
  }

  return Heal;
}(_Potion_js__WEBPACK_IMPORTED_MODULE_0__["Potion"]);

/***/ }),

/***/ "./src/js/Model/Things/potion/Poison.js":
/*!**********************************************!*\
  !*** ./src/js/Model/Things/potion/Poison.js ***!
  \**********************************************/
/*! exports provided: Poison */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poison", function() { return Poison; });
/* harmony import */ var _Potion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Potion.js */ "./src/js/Model/Things/Potion.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Poison =
/*#__PURE__*/
function (_Potion) {
  _inherits(Poison, _Potion);

  function Poison() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Poison);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Poison)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "name", 'poison');

    _defineProperty(_assertThisInitialized(_this), "power", 5);

    return _this;
  }

  return Poison;
}(_Potion_js__WEBPACK_IMPORTED_MODULE_0__["Potion"]);

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
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home.js */ "./src/js/pages/home.js");
/* harmony import */ var _pages_arena_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/arena.js */ "./src/js/pages/arena.js");
/* harmony import */ var _pages_fight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/fight.js */ "./src/js/pages/fight.js");
/* harmony import */ var _pages_info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/_info.js */ "./src/js/pages/_info.js");
/* harmony import */ var _pages_win_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/win.js */ "./src/js/pages/win.js");





var Router = {
  home: function home() {
    _pages_home_js__WEBPACK_IMPORTED_MODULE_0__["Home"].render();
  },
  arena: function arena() {
    $('.home').remove();
    _pages_arena_js__WEBPACK_IMPORTED_MODULE_1__["Arena"].render();
  },
  fight: function fight() {
    $('.info').remove();
    $('.arena-page').remove();
    _pages_fight_js__WEBPACK_IMPORTED_MODULE_2__["Fight"].render();
  },
  info: function info(p1, p2) {
    _pages_info_js__WEBPACK_IMPORTED_MODULE_3__["Info"].render(p1, p2);
  },
  win: function win(winner) {
    _pages_win_js__WEBPACK_IMPORTED_MODULE_4__["Win"].render(winner);
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
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_router.js */ "./src/js/_router.js");
/* harmony import */ var _Model_Characters_Pirate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Model/Characters/Pirate.js */ "./src/js/Model/Characters/Pirate.js");
/* harmony import */ var _Model_Characters_Marines_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Model/Characters/Marines.js */ "./src/js/Model/Characters/Marines.js");
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game.js */ "./src/js/Game.js");




$(document).ready(function () {
  var pirateName = 'Pirate';
  var marinesName = 'Marines';
  _router_js__WEBPACK_IMPORTED_MODULE_0__["Router"].home();
  $('.home form').submit(function (e) {
    e.preventDefault();
    pirateName = $('#player1').val() ? $('#player1').val() : 'Pirate';
    marinesName = $('#player2').val() ? $('#player2').val() : 'Marines';
    _router_js__WEBPACK_IMPORTED_MODULE_0__["Router"].arena(pirateName, marinesName);
    run();
  });

  var run = function run() {
    // Initialization
    var game = new _Game_js__WEBPACK_IMPORTED_MODULE_3__["Game"](pirateName, marinesName);
    game.start(); // Events

    $('.bloc').on('mouseover', function () {
      if ($(this).data('type') == 'free' || $(this).data('type') == 'item') {
        game.showCase($(this).data(), $(this));
      } else {
        $('.bloc').css('background-color', 'rgba(49, 145, 196, 0.5)');
      }
    }); // Actions

    $('.bloc').click(function () {
      if ($(this).data('type') == 'free' || $(this).data('type') == 'item') {
        game.move($(this).data());

        if (game.isBesideEnemy()) {
          game.runFight();
        }
      }
    });
  };
});

/***/ }),

/***/ "./src/js/pages/_info.js":
/*!*******************************!*\
  !*** ./src/js/pages/_info.js ***!
  \*******************************/
/*! exports provided: Info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
var Info = {
  component: function component(p1, p2) {
    return "\n                <div class=\"info p-5\">\n                    <div class=\"row d-flex justify-content-between h-50\">\n                        <div class=\"player player_1\">\n                            <div class=\"avatar\"></div>\n                            <p class=\"info-player-1\" style=\"text-align: center;\">".concat(p1.current.getName(), "</p>\n                            <div class=\"power\">Puissance: <span class=\"power-value-").concat(p1.current.getName(), "\">").concat(p1.current.getPower(), "</span></div>\n                            <div class=\"life_line\"></div>\n                            <div class=\"life\">").concat(p1.current.getHeal(), "/100</div>\n                        </div>\n                    \n                        <div class=\"player player_2\">\n                            <div class=\"avatar\"></div>\n                            <p class=\"info-player-2\" style=\"text-align: center;\">").concat(p2.current.getName(), "</p>\n                            <div class=\"power\">Puissance: <span class=\"power-value-").concat(p2.current.getName(), "\">").concat(p2.current.getPower(), "</span></div>\n                            <div class=\"life_line\"></div>\n                            <div class=\"life\">").concat(p2.current.getHeal(), "/100</div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"infos-arena w-75 m-auto d-flex justify-content-center align-items-center\">\n                        <p class=\"infos-arena-text\"></p>\n                    </div>\n                </div>\n    ");
  },
  render: function render(p1, p2) {
    $('.arena-page').append(this.component(p1, p2));
  }
};

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
  component: function component() {
    return "\n            <div class=\"arena-page position-relative row justify-content-end align-items-center m-0 px-5\">\n                <div class=\"arena position-absolute\"></div>\n                <audio src=\"../../../public/sountracks/arena_low.mp3\" id=\"audio\" loop autoplay></audio>\n            </div>\n        \n        ";
  },
  render: function render() {
    $('.body').append(this.component());
  }
};

/***/ }),

/***/ "./src/js/pages/fight.js":
/*!*******************************!*\
  !*** ./src/js/pages/fight.js ***!
  \*******************************/
/*! exports provided: Fight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fight", function() { return Fight; });
var Fight = {
  component: "\n        <div class=\"fight-page h-100 w-100 py-5\">\n            <div class=\"fight container h-100\">\n                <h1 style=\"color: white\">Fight !</h1>\n                            \n                <div class=\"fight-body row justify-content-between\">\n                        <div class=\"col-md-5 h-100 d-flex flex-column justify-content-end fight-info\">\n                            <img src=\"../../../public/images/perso/fight-marines.png\" alt=\"\">\n                        </div>\n            \n                        <div class=\"col-md-5 h-100 d-flex flex-column justify-content-start fight-info\">\n                            <div class=\"row h-100\">\n                                <div class=\"col-12 h-50\">\n                                    <img src=\"../../../public/images/perso/fight-pirate.png\" alt=\"\">\n                                </div>\n                                \n                                <div id=\"info\" class=\"fight-message col-12 h-50 d-flex justify-content-center align-items-center\"></div>\n                            </div>\n                        </div>\n                    </div>\n            \n                <div class=\"row text-center py-5\">\n                    <div class=\"col-md-6 col-sm-12 py-2\">\n                        <button type=\"button\" id=\"hit\" class=\"btn btn-danger\">Attaquer</button>\n                    </div>\n                    \n                    <div class=\"col-md-6 col-sm-12 py-2\">\n                        <button type=\"button\" id=\"pokeball\" class=\"btn btn-info\">Pokeball</button>\n                    </div>\n                    \n                    <div class=\"col-md-6 col-sm-12 py-2\">\n                        <button type=\"button\" id=\"items\" class=\"btn btn-success\">Sac \xE0 dos</button>\n                    </div>\n                    \n                    <div class=\"col-md-6 col-sm-12 py-2\">\n                        <button type=\"button\" id=\"flee\" class=\"btn btn-dark\">Fuir</button>\n                    </div>\n                </div>\n            </div>\n            \n            <audio src=\"../../../public/sountracks/fight_low.mp3\" id=\"audio\" loop autoplay></audio>\n            <audio src=\"../../../public/sountracks/sword2.mp3\" id=\"audio-sword\"></audio>\n            <audio src=\"../../../public/sountracks/ouch.mp3\" id=\"audio-ouch\"></audio>\n        </div>\n        \n    ",
  render: function render() {
    $('.body').append(this.component);
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
  component: "\n        <div class=\"home h-100\">\n            <div class=\"container home-content\">\n                <div class=\"row h-100\">\n                    <div class=\"col-md-7 h-100\">\n                    </div>\n                    \n                    <div class=\"game-container position-relative col-md-5 h-100 px-5 d-flex flex-column justify-content-center\">\n                        <img src=\"https://fontmeme.com/permalink/191117/ea3ac8f33b05521ce8b2b9eba1950ad4.png\" alt=\"polices-de-calligraphie\" border=\"0\">                        \n                        \n                        <form>\n                            <input class=\"my-3 form-control border-bottom\" type=\"text\" name=\"player1\" id=\"player1\" placeholder=\"Pirate\">\n                            <input class=\"my-3 form-control border-bottom\" type=\"text\" name=\"player2\" id=\"player2\" placeholder=\"Marines\">\n                            <button type=\"submit\" class=\"w-100 submit btn btn-primary\">Entrer</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            \n            <audio src=\"../../../public/sountracks/home_low.mp3\" id=\"audio\" loop autoplay></audio>\n        </div>\n        \n    ",
  render: function render() {
    $('.body').append(this.component);
  }
};

/***/ }),

/***/ "./src/js/pages/win.js":
/*!*****************************!*\
  !*** ./src/js/pages/win.js ***!
  \*****************************/
/*! exports provided: Win */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Win", function() { return Win; });
var Win = {
  component: function component(winner) {
    return "\n                <div class=\"win-page h-100 w-100\">\n                    <div class=\"win row m-0 justify-content-end\">\n                        <div class=\"col-md-7 py-5 d-flex justify-content-end\">\n                            <div class=\"w-75 h-25 d-flex justify-content-between align-items-start\">\n                                <img src=\"https://fontmeme.com/permalink/191117/150ab97b0a737e05259fcade8dfa1322.png\" alt=\"polices-de-calligraphie\" border=\"0\">\n                                <button id=\"replay\" class=\"btn\">Rejouer</button>\n                            </div>\n                        </div>\n                        \n                        <div class=\"col-md-5 py-5\">\n                            <img height=\"1300\" src=\"../../../public/images/perso/fight-".concat(winner.toLowerCase(), ".png\" alt=\"\">\n                        </div>\n                    </div>\n            \n                    <audio src=\"../../../public/sountracks/win_low.mp3\" id=\"audio\" loop autoplay></audio>\n                </div>\n        \n    ");
  },
  render: function render(winner) {
    $('.fight-page').remove();
    $('.body').append(this.component(winner));
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

__webpack_require__(/*! C:\laragon\projects\game\src\js\app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! C:\laragon\projects\game\src\sass\app.sass */"./src/sass/app.sass");


/***/ })

/******/ });