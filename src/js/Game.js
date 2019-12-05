import {CharacterManager} from "./Manager/Elements/CharacterManager.js"
import {Pirate} from "./Model/Characters/Pirate.js"
import {Marines} from "./Model/Characters/Marines.js"
import {Map} from "./Model/Map.js";
import {ItemManager} from "./Manager/Elements/ItemManager.js";
import {Knife} from "./Model/Things/Weapons/Knife.js";
import {Shootgun} from "./Model/Things/Weapons/Shootgun.js";
import {ThingManager} from "./Manager/Elements/ThingManager.js";
import {Wall} from "./Model/Things/Wall.js";
import {Poison} from "./Model/Things/potion/Poison.js";
import {Heal} from "./Model/Things/potion/Heal.js";
import {Router} from "./_router.js";
import {InstantFight} from "./InstantFight.js";
import {Move} from "./Model/Move.js";
import {NuclearBomb} from "./Model/Things/Weapons/Nuclear/NuclearBomb.js";
import {NuclearBombCommand} from "./Model/Things/Weapons/Nuclear/NuclearBombCommand.js";
import {MachineGun} from "./Model/Things/Weapons/MachineGun.js";
import {Revolver} from "./Model/Things/Weapons/Revolver.js";
import {RPG} from "./Model/Things/Weapons/RPG.js";

export class Game {
    characters
    things
    map
    nuclear
    nbWeapons

    /**
     * Game constructor.
     *
     * @param pirateName
     * @param marinesName
     */
    constructor(pirateName, marinesName, mapSize, nbWeapons, nuclear) {
        this.characters = {
            pirate: new CharacterManager(new Pirate()),
            marines: new CharacterManager(new Marines())
        }

        this.nbWeapons = nbWeapons

        this.nuclear = nuclear

        this.characters.pirate.getCurrent().setName(pirateName)
        this.characters.marines.getCurrent().setName(marinesName)

        this.things = {
            weapons: {
                knife: new ItemManager(new Knife()),
                shootgun: new ItemManager(new Shootgun()),
                machineGun: new ItemManager(new MachineGun()),
                revolver: new ItemManager(new Revolver()),
                RPG: new ItemManager(new RPG())
            },
            potions: {
                poison: new ItemManager(new Poison()),
                heal: new ItemManager(new Heal())
            },
            wall: new ThingManager(new Wall())
        }

        if (this.nuclear) {
            this.things.weapons.nuclearBomb = new ItemManager(new NuclearBomb())
            this.things.weapons.nuclearBombCommand = new ItemManager(new NuclearBombCommand())
        }

        this.map = new Map(mapSize)
        this.move = new Move()
    }

    /**
     * Start the game.
     */
    start() {
        this.map.render()

        this.init(this.characters.pirate)
        this.init(this.characters.marines)
        this.init(this.things.potions.heal)
        this.init(this.things.potions.poison)

        for (let nb = 0; nb < this.nbWeapons; nb++) {
            this.init(Object.entries(this.things.weapons)[nb][1])
        }

        for (let i = 0; i <= 15; i++) {
            this.init(this.things.wall)
        }

        if (this.nuclear) {
            this.init(this.things.weapons.nuclearBomb)
            this.init(this.things.weapons.nuclearBombCommand)
        }

        this.setFirstPlayer(this.characters)

        Router.info(this.characters.pirate, this.characters.marines)

        $('.infos-arena-text').text('Au tour de ' + this.getCurrentPlayer().getCurrent().getName())

        this.addEvents()
    }

    /**
     * Load event listeners for arena page.
     */
    addEvents() {
        let that = this

        $('.bloc').on('mouseover', function () {
            if ('free' == $(this).data('type') || 'item' == $(this).data('type')) {
                that.showCase($(this).data(), $(this))
            } else {
                $('.bloc').css('background-color', 'rgba(49, 145, 196, 0.5)')
            }
        })

        $('.bloc').click(function () {
            if ('free' == $(this).data('type') || 'item' == $(this).data('type')) {
                that.moving($(this).data())

                if (that.isBesideEnemy()) {
                    that.runFight()
                }
            }
        })
    }

    /**
     * Init all element for a game.
     *
     * @param element
     */
    init(element) {
        let item = this.map.getRandomBlock()
        let that = this

        if (item) {
            element.setCurrent(
                item.bloc.getPosY(),
                item.bloc.getPosX()
            )

            element.render()

            that.map.freeBlocs[item.bloc.getPosY()].splice(item.bloc.getPosX(), 1)

            if (0 === that.map.freeBlocs[item.bloc.getPosY()].length) {
                that.map.freeBlocs.splice(item.bloc.getPosY(), 1)
            }
        }
    }

    /**
     * Set the first player for the game.
     */
    setFirstPlayer() {
        let first = Math.floor(
            Math.random() * Object.entries(this.characters).length
        )

        this.currentPlayer = first
    }

    /**
     * Get the current player.
     */
    getCurrentPlayer() {
        return Object.entries(this.characters)[this.currentPlayer][1]
    }

    /**
     * Set one current player.
     */
    setCurrentPlayer() {
        this.currentPlayer =
            this.currentPlayer >= (Object.keys(this.characters).length - 1)
                ? 0
                : this.currentPlayer + 1
    }

    /**
     * Show the possible case to move for current player.
     *
     * @param bloc
     * @param element
     */
    showCase(bloc, element) {
        var line;

        let currentPosition = {
            Y: this.getCurrentPlayer().getCurrent().getPosY(),
            X: this.getCurrentPlayer().getCurrent().getPosX()
        }

        let move = {
            Y: bloc.posY - currentPosition.Y,
            X: bloc.posX - currentPosition.X
        }


        if (this.move.checkMoveLength(this.getCurrentPlayer(), move) && (element.data("posY") !== currentPosition.Y || element.data("posX") !== currentPosition.X)) {
            $('.bloc').css('background-color', 'rgba(49, 145, 196, 0.5)')
            element.css('background-color', 'green')
        } else {
            $('.bloc').css('background-color', 'rgba(49, 145, 196, 0.5)')
        }
    }

    /**
     * Move the current player to the selected case.
     *
     * @param bloc
     */
    moving(bloc) {
        if (this.move.movable(this.getCurrentPlayer(), bloc)) {
            // TODO : See Move.js
            $.when(this.dropItem(bloc)).done(() => {
                this.map.createFreeBloc(bloc.posY, bloc.posX)
                this.getCurrentPlayer().move(bloc)
                this.setCurrentPlayer()
                $('.infos-arena-text').text('Au tour de ' + this.getCurrentPlayer().getCurrent().getName())
            })
        }
    }

    /**
     * Give item to player.
     *
     * @param bloc
     */
    dropItem(bloc) {
        if ('item' === bloc.type) {
            for (let[thingKey, value] of Object.entries(this.things)) {
                for (let [key, item] of Object.entries(value)) {
                    if (bloc.instance.name === key && 'item' === bloc.type) {
                        item.getCurrent().drop(this.getCurrentPlayer().getCurrent().getBag())
                        this.cleanUpBloc(bloc.instance)
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
    cleanUpBloc(bloc) {
        $('.' + bloc.name)
            .data('type', 'free')
            .data('instance', undefined)
            .empty()
            .removeClass(bloc.name)
    }

    /**
     * Check if current player is beside his enemy.
     *
     * @returns {boolean}
     */
    isBesideEnemy() {
        let compareY =
            this.characters.marines.current.getPosY() - this.characters.pirate.current.getPosY()

        let compareX =
            this.characters.marines.current.getPosX() - this.characters.pirate.current.getPosX()

        compareY = compareY < 0 ? -compareY : compareY
        compareX = compareX < 0 ? -compareX : compareX

        return (1 === compareY && 0 === compareX) || (0 === compareY && 1 === compareX)
    }

    /**
     * Run the fight!
     */
    runFight() {
        $.when(Router.fight())
            .done(() => {
                let fight = new InstantFight(this.characters)
                fight.addEvents()
            })

        // TODO : Next => InstantFight.js
    }
}