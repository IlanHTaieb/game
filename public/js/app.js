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
/* harmony import */ var _Model_Move_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Model/Move.js */ "./src/js/Model/Move.js");
/* harmony import */ var _Model_Things_Weapons_Nuclear_NuclearBomb_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Model/Things/Weapons/Nuclear/NuclearBomb.js */ "./src/js/Model/Things/Weapons/Nuclear/NuclearBomb.js");
/* harmony import */ var _Model_Things_Weapons_Nuclear_NuclearBombCommand_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Model/Things/Weapons/Nuclear/NuclearBombCommand.js */ "./src/js/Model/Things/Weapons/Nuclear/NuclearBombCommand.js");
/* harmony import */ var _Model_Things_Weapons_MachineGun_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Model/Things/Weapons/MachineGun.js */ "./src/js/Model/Things/Weapons/MachineGun.js");
/* harmony import */ var _Model_Things_Weapons_Revolver_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Model/Things/Weapons/Revolver.js */ "./src/js/Model/Things/Weapons/Revolver.js");
/* harmony import */ var _Model_Things_Weapons_RPG_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Model/Things/Weapons/RPG.js */ "./src/js/Model/Things/Weapons/RPG.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  function Game(pirateName, marinesName, mapSize, nbWeapons, nuclear) {
    _classCallCheck(this, Game);

    _defineProperty(this, "characters", void 0);

    _defineProperty(this, "things", void 0);

    _defineProperty(this, "map", void 0);

    _defineProperty(this, "nuclear", void 0);

    _defineProperty(this, "nbWeapons", void 0);

    this.characters = {
      pirate: new _Manager_Elements_CharacterManager_js__WEBPACK_IMPORTED_MODULE_0__["CharacterManager"](new _Model_Characters_Pirate_js__WEBPACK_IMPORTED_MODULE_1__["Pirate"]()),
      marines: new _Manager_Elements_CharacterManager_js__WEBPACK_IMPORTED_MODULE_0__["CharacterManager"](new _Model_Characters_Marines_js__WEBPACK_IMPORTED_MODULE_2__["Marines"]())
    };
    this.nbWeapons = nbWeapons;
    this.nuclear = nuclear;
    this.characters.pirate.getCurrent().setName(pirateName);
    this.characters.marines.getCurrent().setName(marinesName);
    this.things = {
      weapons: {
        knife: new _Manager_Elements_ItemManager_js__WEBPACK_IMPORTED_MODULE_4__["ItemManager"](new _Model_Things_Weapons_Knife_js__WEBPACK_IMPORTED_MODULE_5__["Knife"]()),
        shootgun: new _Manager_Elements_ItemManager_js__WEBPACK_IMPORTED_MODULE_4__["ItemManager"](new _Model_Things_Weapons_Shootgun_js__WEBPACK_IMPORTED_MODULE_6__["Shootgun"]()),
        machineGun: new _Manager_Elements_ItemManager_js__WEBPACK_IMPORTED_MODULE_4__["ItemManager"](new _Model_Things_Weapons_MachineGun_js__WEBPACK_IMPORTED_MODULE_16__["MachineGun"]()),
        revolver: new _Manager_Elements_ItemManager_js__WEBPACK_IMPORTED_MODULE_4__["ItemManager"](new _Model_Things_Weapons_Revolver_js__WEBPACK_IMPORTED_MODULE_17__["Revolver"]()),
        RPG: new _Manager_Elements_ItemManager_js__WEBPACK_IMPORTED_MODULE_4__["ItemManager"](new _Model_Things_Weapons_RPG_js__WEBPACK_IMPORTED_MODULE_18__["RPG"]())
      },
      potions: {
        poison: new _Manager_Elements_ItemManager_js__WEBPACK_IMPORTED_MODULE_4__["ItemManager"](new _Model_Things_potion_Poison_js__WEBPACK_IMPORTED_MODULE_9__["Poison"]()),
        heal: new _Manager_Elements_ItemManager_js__WEBPACK_IMPORTED_MODULE_4__["ItemManager"](new _Model_Things_potion_Heal_js__WEBPACK_IMPORTED_MODULE_10__["Heal"]())
      },
      wall: new _Manager_Elements_ThingManager_js__WEBPACK_IMPORTED_MODULE_7__["ThingManager"](new _Model_Things_Wall_js__WEBPACK_IMPORTED_MODULE_8__["Wall"]())
    };

    if (this.nuclear) {
      this.things.weapons.nuclearBomb = new _Manager_Elements_ItemManager_js__WEBPACK_IMPORTED_MODULE_4__["ItemManager"](new _Model_Things_Weapons_Nuclear_NuclearBomb_js__WEBPACK_IMPORTED_MODULE_14__["NuclearBomb"]());
      this.things.weapons.nuclearBombCommand = new _Manager_Elements_ItemManager_js__WEBPACK_IMPORTED_MODULE_4__["ItemManager"](new _Model_Things_Weapons_Nuclear_NuclearBombCommand_js__WEBPACK_IMPORTED_MODULE_15__["NuclearBombCommand"]());
    }

    this.map = new _Model_Map_js__WEBPACK_IMPORTED_MODULE_3__["Map"](mapSize);
    this.move = new _Model_Move_js__WEBPACK_IMPORTED_MODULE_13__["Move"]();
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
      this.init(this.things.potions.heal);
      this.init(this.things.potions.poison);

      for (var nb = 0; nb < this.nbWeapons; nb++) {
        this.init(Object.entries(this.things.weapons)[nb][1]);
      }

      for (var i = 0; i <= 15; i++) {
        this.init(this.things.wall);
      }

      if (this.nuclear) {
        this.init(this.things.weapons.nuclearBomb);
        this.init(this.things.weapons.nuclearBombCommand);
      }

      this.setFirstPlayer(this.characters);
      _router_js__WEBPACK_IMPORTED_MODULE_11__["Router"].info(this.characters.pirate, this.characters.marines);
      $('.infos-arena-text').text('Au tour de ' + this.getCurrentPlayer().getCurrent().getName());
      this.addEvents();
    }
    /**
     * Load event listeners for arena page.
     */

  }, {
    key: "addEvents",
    value: function addEvents() {
      var that = this;
      $('.bloc').on('mouseover', function () {
        if ('free' == $(this).data('type') || 'item' == $(this).data('type')) {
          that.showCase($(this).data(), $(this));
        } else {
          $('.bloc').css('background-color', 'rgba(49, 145, 196, 0.5)');
        }
      });
      $('.bloc').click(function () {
        if ('free' == $(this).data('type') || 'item' == $(this).data('type')) {
          that.moving($(this).data());

          if (that.isBesideEnemy()) {
            that.runFight();
          }
        }
      });
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

      if (this.move.checkMoveLength(this.getCurrentPlayer(), move) && (element.data("posY") !== currentPosition.Y || element.data("posX") !== currentPosition.X)) {
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
    key: "moving",
    value: function moving(bloc) {
      var _this = this;

      if (this.move.movable(this.getCurrentPlayer(), bloc)) {
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
      if ('item' === bloc.type) {
        for (var _i = 0, _Object$entries = Object.entries(this.things); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              thingKey = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          for (var _i2 = 0, _Object$entries2 = Object.entries(value); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                key = _Object$entries2$_i[0],
                item = _Object$entries2$_i[1];

            if (bloc.instance.name === key && 'item' === bloc.type) {
              item.getCurrent().drop(this.getCurrentPlayer().getCurrent().getBag());
              this.cleanUpBloc(bloc.instance);
            }
          }
        }
      }
    }
    /**
     * Clean up the bloc.
     *
     * @param bloc
     */

  }, {
    key: "cleanUpBloc",
    value: function cleanUpBloc(bloc) {
      $('.' + bloc.name).data('type', 'free').data('instance', undefined).empty().removeClass(bloc.name);
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  /**
   * Add event listeners for the fightpage.
   */


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
      $('#items').click(function () {
        _this.openBag();
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
      if (this.currentPlayer.poison) this.currentPlayer.heal = this.currentPlayer.heal - 10;
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
    value: function hit(hasWeapon) {
      var that = this;
      var target = this.getTarget().getCurrent();
      var currentPlayer = this.getCurrentPlayer().getCurrent();
      var power = hasWeapon ? hasWeapon : currentPlayer.getPower();
      $('.btn').attr("disabled", true);
      document.getElementById('audio-sword').play();
      this.message(currentPlayer.getName() + ' attaque ' + target.getName());
      setTimeout(function () {
        document.getElementById('audio-ouch').play();
        that.message(target.getName() + ' a perdu ' + power + 'PDV');
      }, 2000);
      target.setHeal(target.getHeal() - power);
      $('.remaining_life_' + target.getType()).css('width', target.getHeal() + '%');
      $('.missing_life_' + target.getType()).css('width', 100 - target.getHeal() + '%');

      if (target.getHeal() <= 0) {
        $.when(_router_js__WEBPACK_IMPORTED_MODULE_0__["Router"].win(currentPlayer.getType())).done(function () {
          $('#replay').click(function () {
            location.reload();
          });
        });
      } else {
        this.endRound(4500);
      }
    }
    /**
     * Open your bag.
     */

  }, {
    key: "openBag",
    value: function openBag() {
      var _this2 = this;

      $('.fight-commands').hide();
      $('.open-bag').show();
      $('.open-bag').append("\n                        <div class=\"col-md-6 col-sm-12 py-2\">\n                            <button type=\"button\" id=\"back\" class=\"btn btn-danger\">Retour</button>\n                        </div>\n                        ");
      $('#back').click(function (e) {
        $('.fight-commands').show();
        $('.open-bag').empty().hide();
      });

      for (var _i = 0, _Object$entries = Object.entries(this.getCurrentPlayer().getCurrent().getBag()); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            items = _Object$entries$_i[1];

        var _loop = function _loop() {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
              key = _Object$entries2$_i[0],
              item = _Object$entries2$_i[1];

          $.when(_this2.showBagCommands(item)).done(function () {
            $('#' + item.getName()).click(function (e) {
              $('.btn').attr("disabled", true);
              item.item == "weapons" ? _this2.useWeapon(item) : _this2.usePotion(item);
            });
          });
        };

        for (var _i2 = 0, _Object$entries2 = Object.entries(items); _i2 < _Object$entries2.length; _i2++) {
          _loop();
        }
      }
    }
    /**
     * Show items in the menu.
     *
     * @param item
     */

  }, {
    key: "showBagCommands",
    value: function showBagCommands(item) {
      if (item.getName() !== 'nuclearBomb') {
        $('.open-bag').append("\n                        <div class=\"col-md-6 col-sm-12 py-2\">\n                            <button type=\"button\" id=\"" + item.getName() + "\" class=\"btn action\">" + item.getName() + "</button>\n                        </div>\n                        ");
      }
    }
    /**
     * Use weapon.
     *
     * @param weapon
     */

  }, {
    key: "useWeapon",
    value: function useWeapon(weapon) {
      var current = this.getCurrentPlayer().getCurrent();

      if (current.getBag('weapons')['nuclearBombCommand'].name === 'nuclearBombCommand') {
        if (undefined !== current.getBag('weapons')['nuclearBomb']) {
          $.when(_router_js__WEBPACK_IMPORTED_MODULE_0__["Router"].nuclear()).done(function () {
            $('#replay').click(function () {
              location.reload();
            });
          });
        } else {
          this.message('Vous n\'avez pas la bombe');
          this.endRound(500);
        }
      } else {
        this.hit(weapon.getPower());
      }

      $('.fight-commands').show();
      $('.open-bag').empty().hide();
    }
    /**
     * Use potion.
     *
     * @param potion
     */

  }, {
    key: "usePotion",
    value: function usePotion(potion) {
      var _this3 = this;

      var current = this.getCurrentPlayer().getCurrent();

      switch (potion.getName()) {
        case 'heal':
          $.when(current.setHeal(current.getHeal() + potion.getPower())).done(function () {
            _this3.message(current.getName() + ' récupère ' + potion.getPower() + 'PDV');

            _this3.endRound(2000);

            $('.fight-commands').show();
            $('.open-bag').empty().hide();
            $('.remaining_life_' + target.getType()).css('width', target.getHeal() + '%');
            $('.missing_life_' + target.getType()).css('width', 100 - target.getHeal() + '%');
          });
          break;

        case 'poison':
          $.when(this.getTarget().getCurrent().poison = true).done(function () {
            _this3.endRound(2000);

            $('.fight-commands').show();
            $('.open-bag').empty().hide();
          });
          break;
      }
    }
    /**
     * Pokeball Go !
     */

  }, {
    key: "pokeball",
    value: function pokeball() {
      this.message(this.getTarget().getCurrent().getName() + ' n\'est pas un pokemon.');
    }
    /**
     * Flee the fight?
     */

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
     * Process end of the round.
     *
     * @param delay
     */

  }, {
    key: "endRound",
    value: function endRound(delay) {
      var _this4 = this;

      $.when(this.setTarget(this.getCurrentPlayer())).done(function () {
        var that = _this4;

        _this4.setCurrentPlayer();

        if (_this4.getCurrentPlayer().getCurrent().poison) {
          setTimeout(function () {
            that.getCurrentPlayer().getCurrent().setHeal(that.getCurrentPlayer().getCurrent().getHeal() - 5);
            that.message(that.getCurrentPlayer().getCurrent().getName() + ' perds 5PVD supplémentaire');
            $('.remaining_life_' + target.getType()).css('width', target.getHeal() + '%');
            $('.missing_life' + target.getType()).css('width', 100 - target.getHeal() + '%');
          }, delay - 1000);
        }

        setTimeout(function () {
          that.message('Au tour de ' + that.getCurrentPlayer().getCurrent().getName());
        }, delay);
        setTimeout(function () {
          $('.btn').attr("disabled", false);
        }, delay);
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

    _defineProperty(_assertThisInitialized(_this), "name", void 0);

    _defineProperty(_assertThisInitialized(_this), "bag", {
      weapons: [],
      potions: []
    });

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
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return item ? this.bag[item] : this.bag;
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
    value: function setBag(bag, item) {
      this.bag[item] = bag;
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

    _defineProperty(_assertThisInitialized(_this), "item", '');

    _defineProperty(_assertThisInitialized(_this), "name", '');

    return _this;
  }

  _createClass(Item, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "drop",
    value: function drop(bag) {
      bag[this.item][this.getName()] = this;
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



var MAP_SIZE = {
  little: 9,
  medium: 10,
  large: 12
};
var Map =
/*#__PURE__*/
function () {
  /**
   * The Map constructor.
   */
  function Map(mapSize) {
    _classCallCheck(this, Map);

    _defineProperty(this, "mapSize", void 0);

    _defineProperty(this, "arena", []);

    _defineProperty(this, "freeBlocs", []);

    this.mapSize = mapSize;
    this.createBoard();
  }
  /**
   * Set the board.
   */


  _createClass(Map, [{
    key: "createBoard",
    value: function createBoard() {
      for (var y = 1; y <= MAP_SIZE[this.mapSize]; y++) {
        this.arena[y] = [];

        for (var x = 1; x <= MAP_SIZE[this.mapSize]; x++) {
          this.arena[y][x] = new _Manager_BlocManager_js__WEBPACK_IMPORTED_MODULE_1__["BlocManager"](new _Bloc_js__WEBPACK_IMPORTED_MODULE_0__["Bloc"](y, x, 9 / MAP_SIZE[this.mapSize] * 100));
        }
      }

      this.freeBlocs = this.arena;
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
      return Math.floor(Math.random() * (dir == 'line' ? MAP_SIZE[this.mapSize] - 1 : this.freeBlocs[line].length - 1)) + 1;
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

/***/ "./src/js/Model/Move.js":
/*!******************************!*\
  !*** ./src/js/Model/Move.js ***!
  \******************************/
/*! exports provided: Move */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Move", function() { return Move; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Move =
/*#__PURE__*/
function () {
  function Move() {
    _classCallCheck(this, Move);
  }

  _createClass(Move, [{
    key: "movable",

    /**
     * Return availability for player to move.
     *
     * @param currentPlayer
     * @param bloc
     */
    value: function movable(currentPlayer, bloc) {
      var move = {
        Y: bloc.posY - currentPlayer.getCurrent().getPosY(),
        X: bloc.posX - currentPlayer.getCurrent().getPosX()
      };
      var wayIsFree = this.checkObstacle({
        posY: currentPlayer.getCurrent().getPosY(),
        posX: currentPlayer.getCurrent().getPosX()
      }, bloc);
      return this.checkMoveLength(currentPlayer, move) && wayIsFree;
    }
    /**
     * Check if action is possible.
     *
     * @param move
     * @returns {boolean}
     */

  }, {
    key: "checkMoveLength",
    value: function checkMoveLength(currentPlayer, move) {
      var speed = currentPlayer.getCurrent().getMove();
      return this.unsigned(move.Y) + this.unsigned(move.X) <= speed;
    }
    /**
     * Check if the way is free.
     *
     * @param player
     * @param bloc
     * @returns {boolean}
     */

  }, {
    key: "checkObstacle",
    value: function checkObstacle(player, bloc) {
      var positionsY = [player.posY, bloc.posY];
      var positionsX = [player.posX, bloc.posX];
      var moveBlocs = [];

      for (var y = Math.min.apply(Math, positionsY); y <= Math.max.apply(Math, positionsY); y++) {
        moveBlocs[y] = [];

        for (var x = Math.min.apply(Math, positionsX); x <= Math.max.apply(Math, positionsX); x++) {
          moveBlocs.push(this.getBloc({
            posY: y,
            posX: x
          }));
        }
      }

      var moveBlocsY = this.groupByPos(moveBlocs, 'Y');
      var moveBlocsX = this.groupByPos(moveBlocs, 'X');
      delete moveBlocsY.undefined;
      delete moveBlocsX.undefined;
      this.blocFilter(moveBlocsY);
      this.blocFilter(moveBlocsX);
      return 0 < Object.entries(moveBlocsY).length && 0 < Object.entries(moveBlocsX).length;
    }
    /**
     * Get the required bloc.
     *
     * @param bloc
     * @returns {*|jQuery}
     */

  }, {
    key: "getBloc",
    value: function getBloc(bloc) {
      var node = $('.bloc:data("pos-y")').filter(function () {
        return $(this).data("pos-y") == bloc.posY && $(this).data("pos-x") == bloc.posX;
      });
      return node.data();
    }
    /**
     * Group moveBloc array by pos.
     *
     * @param element
     * @returns {*}
     */

  }, {
    key: "groupByPos",
    value: function groupByPos(element, dir) {
      return element.reduce(function (r, a) {
        r[dir === 'Y' ? a.posY : a.posX] = [].concat(_toConsumableArray(r[dir === 'Y' ? a.posY : a.posX] || []), [a]);
        return r;
      }, {});
    }
    /**
     * Remove line of blocks if it contains wall.
     *
     * @param elements
     */

  }, {
    key: "blocFilter",
    value: function blocFilter(elements) {
      var _loop = function _loop() {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        value.some(function (e) {
          if (elements.hasOwnProperty(key)) {
            if ('wall' === e.type) {
              delete elements[key];
              return true;
            }
          }
        });
      };

      for (var _i = 0, _Object$entries = Object.entries(elements); _i < _Object$entries.length; _i++) {
        _loop();
      }
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

  return Move;
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

    _defineProperty(_assertThisInitialized(_this), "item", 'potions');

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

    _defineProperty(_assertThisInitialized(_this), "item", 'weapons');

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

/***/ "./src/js/Model/Things/Weapons/MachineGun.js":
/*!***************************************************!*\
  !*** ./src/js/Model/Things/Weapons/MachineGun.js ***!
  \***************************************************/
/*! exports provided: MachineGun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineGun", function() { return MachineGun; });
/* harmony import */ var _Weapon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Weapon.js */ "./src/js/Model/Things/Weapon.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var MachineGun =
/*#__PURE__*/
function (_Weapon) {
  _inherits(MachineGun, _Weapon);

  function MachineGun() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MachineGun);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MachineGun)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "name", 'machineGun');

    _defineProperty(_assertThisInitialized(_this), "power", 70);

    return _this;
  }

  return MachineGun;
}(_Weapon_js__WEBPACK_IMPORTED_MODULE_0__["Weapon"]);

/***/ }),

/***/ "./src/js/Model/Things/Weapons/Nuclear/NuclearBomb.js":
/*!************************************************************!*\
  !*** ./src/js/Model/Things/Weapons/Nuclear/NuclearBomb.js ***!
  \************************************************************/
/*! exports provided: NuclearBomb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuclearBomb", function() { return NuclearBomb; });
/* harmony import */ var _Weapon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Weapon.js */ "./src/js/Model/Things/Weapon.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var NuclearBomb =
/*#__PURE__*/
function (_Weapon) {
  _inherits(NuclearBomb, _Weapon);

  function NuclearBomb() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NuclearBomb);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NuclearBomb)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "name", 'nuclearBomb');

    return _this;
  }

  return NuclearBomb;
}(_Weapon_js__WEBPACK_IMPORTED_MODULE_0__["Weapon"]);

/***/ }),

/***/ "./src/js/Model/Things/Weapons/Nuclear/NuclearBombCommand.js":
/*!*******************************************************************!*\
  !*** ./src/js/Model/Things/Weapons/Nuclear/NuclearBombCommand.js ***!
  \*******************************************************************/
/*! exports provided: NuclearBombCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuclearBombCommand", function() { return NuclearBombCommand; });
/* harmony import */ var _Weapon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Weapon.js */ "./src/js/Model/Things/Weapon.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var NuclearBombCommand =
/*#__PURE__*/
function (_Weapon) {
  _inherits(NuclearBombCommand, _Weapon);

  function NuclearBombCommand() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NuclearBombCommand);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NuclearBombCommand)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "name", 'nuclearBombCommand');

    return _this;
  }

  return NuclearBombCommand;
}(_Weapon_js__WEBPACK_IMPORTED_MODULE_0__["Weapon"]);

/***/ }),

/***/ "./src/js/Model/Things/Weapons/RPG.js":
/*!********************************************!*\
  !*** ./src/js/Model/Things/Weapons/RPG.js ***!
  \********************************************/
/*! exports provided: RPG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPG", function() { return RPG; });
/* harmony import */ var _Weapon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Weapon.js */ "./src/js/Model/Things/Weapon.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var RPG =
/*#__PURE__*/
function (_Weapon) {
  _inherits(RPG, _Weapon);

  function RPG() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RPG);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RPG)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "name", 'RPG');

    _defineProperty(_assertThisInitialized(_this), "power", 80);

    return _this;
  }

  return RPG;
}(_Weapon_js__WEBPACK_IMPORTED_MODULE_0__["Weapon"]);

/***/ }),

/***/ "./src/js/Model/Things/Weapons/Revolver.js":
/*!*************************************************!*\
  !*** ./src/js/Model/Things/Weapons/Revolver.js ***!
  \*************************************************/
/*! exports provided: Revolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Revolver", function() { return Revolver; });
/* harmony import */ var _Weapon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Weapon.js */ "./src/js/Model/Things/Weapon.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Revolver =
/*#__PURE__*/
function (_Weapon) {
  _inherits(Revolver, _Weapon);

  function Revolver() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Revolver);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Revolver)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "name", 'revolver');

    _defineProperty(_assertThisInitialized(_this), "power", 40);

    return _this;
  }

  return Revolver;
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

    _defineProperty(_assertThisInitialized(_this), "power", 60);

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

    _defineProperty(_assertThisInitialized(_this), "power", 20);

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
/* harmony import */ var _pages_nuclear_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/nuclear.js */ "./src/js/pages/nuclear.js");






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
  },
  nuclear: function nuclear() {
    _pages_nuclear_js__WEBPACK_IMPORTED_MODULE_5__["Nuclear"].render();
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
/* harmony import */ var _Model_Characters_Pirate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model/Characters/Pirate.js */ "./src/js/Model/Characters/Pirate.js");
/* harmony import */ var _Model_Characters_Marines_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Model/Characters/Marines.js */ "./src/js/Model/Characters/Marines.js");
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game.js */ "./src/js/Game.js");
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_router.js */ "./src/js/_router.js");




$(document).ready(function () {
  //const router = new Router()
  var pirateName = 'Pirate';
  var marinesName = 'Marines';
  var nuclear;
  var mapSize;
  var nbWeapons;
  _router_js__WEBPACK_IMPORTED_MODULE_3__["Router"].home();
  $('.home form').submit(function (e) {
    e.preventDefault();
    pirateName = $('#player1').val() ? $('#player1').val() : 'Pirate';
    marinesName = $('#player2').val() ? $('#player2').val() : 'Marines';
    nuclear = $('#nuclear').is(':checked');
    mapSize = $('#height-map').val();
    nbWeapons = $('#nbWeapons').val();
    _router_js__WEBPACK_IMPORTED_MODULE_3__["Router"].arena(pirateName, marinesName);
    run();
  });

  var run = function run() {
    // Initialization
    var game = new _Game_js__WEBPACK_IMPORTED_MODULE_2__["Game"](pirateName, marinesName, mapSize, nbWeapons, nuclear);
    game.start();
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
  component: "\n        <div class=\"fight-page h-100 w-100 py-5\">\n            <div class=\"fight container h-100\">\n                <h1 style=\"color: white\">Fight !</h1>\n                            \n                <div class=\"fight-body row justify-content-between\">\n                        <div class=\"col-md-5 h-100 d-flex flex-column justify-content-end fight-info\">\n                            <img src=\"../../../public/images/perso/fight-marines.png\" alt=\"\">\n                            \n                            <div class=\"w-100 life_line\">\n                                <div class=\"remaining_life remaining_life_marines\"></div>\n                                <div class=\"missing_life missing_life_marines\"></div>\n                            </div>\n                        </div>\n            \n                        <div class=\"col-md-5 h-100 d-flex flex-column justify-content-start fight-info\">\n                            <div class=\"row h-100\">\n                                <div class=\"col-12 h-50\">\n                                    <img src=\"../../../public/images/perso/fight-pirate.png\" alt=\"\">\n                                    \n                                    <div class=\"w-100 life_line\">\n                                        <div class=\"remaining_life remaining_life_pirate\"></div>\n                                        <div class=\"missing_life missing_life_pirate\"></div>\n                                    </div>\n                                </div>\n                                \n                                <div id=\"info\" class=\"fight-message col-12 h-50 d-flex justify-content-center align-items-center\"></div>\n                            </div>\n                        </div>\n                    </div>\n            \n                <div class=\"fight-commands row text-center py-5\">\n                    <div class=\"col-md-6 col-sm-12 py-2\">\n                        <button type=\"button\" id=\"hit\" class=\"btn action\">Attaquer</button>\n                    </div>\n                    \n                    <div class=\"col-md-6 col-sm-12 py-2\">\n                        <button type=\"button\" id=\"pokeball\" class=\"btn action\">Pokeball</button>\n                    </div>\n                    \n                    <div class=\"col-md-6 col-sm-12 py-2\">\n                        <button type=\"button\" id=\"items\" class=\"btn action\">Sac \xE0 dos</button>\n                    </div>\n                    \n                    <div class=\"col-md-6 col-sm-12 py-2\">\n                        <button type=\"button\" id=\"flee\" class=\"btn action\">Fuir</button>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"open-bag row text-center py-5\"></div>\n            \n            <audio src=\"../../../public/sountracks/fight_low.mp3\" id=\"audio\" loop autoplay></audio>\n            <audio src=\"../../../public/sountracks/sword2.mp3\" id=\"audio-sword\"></audio>\n            <audio src=\"../../../public/sountracks/ouch.mp3\" id=\"audio-ouch\"></audio>\n        </div>\n        \n    ",
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
  component: "\n        <div id=\"swup\" class=\"home h-100\">\n            <div class=\"container home-content\">\n                <div class=\"row h-100\">\n                    <div class=\"col-md-7 h-100\">\n                    </div>\n                    \n                    <div class=\"game-container position-relative col-md-5 h-100 px-5 d-flex flex-column justify-content-center\">\n                        <img src=\"https://fontmeme.com/permalink/191117/ea3ac8f33b05521ce8b2b9eba1950ad4.png\" alt=\"polices-de-calligraphie\" border=\"0\">                        \n                        \n                        <form>\n                            <input class=\"my-3 form-control border-bottom\" type=\"text\" name=\"player1\" id=\"player1\" placeholder=\"Pirate\">\n                            <input class=\"my-3 form-control border-bottom\" type=\"text\" name=\"player2\" id=\"player2\" placeholder=\"Marines\">\n                            \n                            <label class=\"label-select\" for=\"height-map\">Taille de la carte</label>\n                            \n                            <select name=\"height-map\" id=\"height-map\">\n                                <option value=\"little\">Petite</option>\n                                <option value=\"medium\">Moyenne</option>\n                                <option value=\"large\">Grande</option>\n                            </select>\n                            \n                            <label class=\"label-select\" for=\"nbWeapons\">Nombe d'armes</label>\n                            \n                            <select name=\"nbWeapons\" id=\"nbWeapons\">\n                                <option value=\"2\">2</option>\n                                <option value=\"3\">3</option>\n                                <option value=\"4\">4</option>\n                                <option value=\"5\">5</option>\n                            </select>\n                            \n                            <div class=\"field\">\n                                <input type=\"checkbox\" name=\"nuclear\" id=\"nuclear\">\n                                <label for=\"nuclear\">Bombe nucleaire ?</label>\n                            </div>\n                            \n                            <button type=\"submit\" class=\"w-100 submit btn btn-primary\">Entrer</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            \n            <audio src=\"../../../public/sountracks/home_low.mp3\" id=\"audio\" loop autoplay></audio>\n        </div>\n        \n    ",
  render: function render() {
    $('.body').append(this.component);
  }
};

/***/ }),

/***/ "./src/js/pages/nuclear.js":
/*!*********************************!*\
  !*** ./src/js/pages/nuclear.js ***!
  \*********************************/
/*! exports provided: Nuclear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nuclear", function() { return Nuclear; });
var Nuclear = {
  component: function component(winner) {
    return "\n                <div class=\"nuclear-page h-100 w-100\">\n                    <div class=\"win row m-0 justify-content-end\">\n                        <div class=\"col-md-7 py-5 d-flex justify-content-start\">\n                            <div class=\"w-75 h-25 d-flex justify-content-between align-items-start\">\n                                <img src=\"https://fontmeme.com/permalink/191128/74ca5b6866ee6125a30bc114a0f64f76.png\" alt=\"ghost-army-stencil-font\" border=\"0\">\n                                <button id=\"replay\" class=\"btn\">Rejouer</button>\n                            </div>\n                        </div>\n                    </div>\n            \n                    <audio src=\"../../../public/sountracks/america-fuck-yeah.mp3\" id=\"audio\" loop autoplay></audio>\n                </div>\n        \n    ";
  },
  render: function render() {
    $('.fight-page').remove();
    $('.win-page').remove();
    $('.body').append(this.component());
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