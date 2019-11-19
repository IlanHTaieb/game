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

export class Game {
    characters
    things
    map

    /**
     * Game constructor.
     *
     * @param pirateName
     * @param marinesName
     */
    constructor(pirateName, marinesName) {
        this.characters = {
            pirate: new CharacterManager(new Pirate()),
            marines: new CharacterManager(new Marines())
        }

        this.characters.pirate.getCurrent().setName(pirateName)
        this.characters.marines.getCurrent().setName(marinesName)

        this.things = {
            weapons: {
                knife: new ItemManager(new Knife()),
                shootgun: new ItemManager(new Shootgun())
            },
            potions: {
                poison: new ItemManager(new Poison()),
                heal: new ItemManager(new Heal())
            },
            wall: new ThingManager(new Wall())
        }

        this.map = new Map()
    }

    /**
     * Start the game.
     */
    start() {
        this.map.render()

        this.init(this.characters.pirate)
        this.init(this.characters.marines)
        this.init(this.things.weapons.knife)
        this.init(this.things.weapons.shootgun)
        this.init(this.things.potions.heal)
        this.init(this.things.potions.poison)

        for (let i = 0; i <= 15; i++) {
            this.init(this.things.wall)
        }

        this.setFirstPlayer(this.characters)

        Router.info(this.characters.pirate, this.characters.marines)

        $('.infos-arena-text').text('Au tour de ' + this.getCurrentPlayer().getCurrent().getName())
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


        if (this.checkMove(move) && (element.data("posY") !== currentPosition.Y || element.data("posX") !== currentPosition.X)) {
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
    move(bloc) {
        let move = {
            Y: bloc.posY - this.getCurrentPlayer().getCurrent().getPosY(),
            X: bloc.posX - this.getCurrentPlayer().getCurrent().getPosX()
        }

        console.log('start')
        this.checkObstacle(
            {
                posY: this.getCurrentPlayer().getCurrent().getPosY(),
                posX: this.getCurrentPlayer().getCurrent().getPosX()
            },
            bloc
        )
        console.log('ok')

        if (this.checkMove(move)) {
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
        if (bloc.type === 'item') {
            this.getCurrentPlayer().getCurrent().getBag().push(bloc.instance)

            console.log(this.getCurrentPlayer().getCurrent())
            $('.' + bloc.instance.name)
                .data('type', 'free')
                .data('instance', undefined)
                .empty()
                .removeClass(bloc.instance.name)
        }
    }

    /**
     * Check if action is possible.
     *
     * @param move
     * @returns {boolean}
     */
    checkMove(move) {
        let speed = this.getCurrentPlayer().getCurrent().getMove()

        return (this.unsigned(move.Y) + this.unsigned(move.X)) <= speed
    }

    checkObstacle(player, bloc) {
        let positionsY = [player.posY, bloc.posY]
        let positionsX = [player.posX, bloc.posX]

        for (let l = Math.min(...positionsY); l < Math.max(...positionsY); l++) {
            console.log(
                this.getbloc({posY: l, posX: bloc.posX})
            )
        }

        for (let x = Math.min(...positionsX); x < Math.max(...positionsX); x++) {
            console.log(
                this.getbloc({posY: bloc.posY, posX: x})
            )
        }
    }

    getbloc(bloc) {
        let node = $('.bloc:data("pos-y")')
            .filter(function () {
                return $(this).data("pos-y") == bloc.posY && $(this).data("pos-x") == bloc.posX
            })

        return node.data()
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
    }

    /**
     * Format number to unsigned.
     *
     * @param value
     * @returns {number}
     */
    unsigned(value) {
        return value > 0
            ? value
            : -value
    }
}