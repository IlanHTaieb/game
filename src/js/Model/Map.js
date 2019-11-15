import {Bloc} from "./Bloc.js"
import {BlocManager} from "../Manager/BlocManager.js"

export class Map {
    height = 10
    width = 10
    arena = []
    freeBlocs = []

    /**
     * The Map constructor.
     */
    constructor() {
        for (let y = 1; y <= this.height; y++) {
            this.arena[y] = []

            for (let x = 1; x <= this.width; x++) {
                this.arena[y][x] = new BlocManager(new Bloc(y, x))
            }
        }

        this.freeBlocs = this.arena
    }

    /**
     * Get height of the map.
     *
     * @returns {number}
     */
    getHeight() {
        return this.height
    }

    /**
     * Get width of the map.
     *
     * @returns {number}
     */
    getWidth() {
        return this.width
    }

    /**
     * Append the map to DOM.
     */
    render() {
        this.arena.forEach(function (bloc, line) {
            $('.arena').append(
                $('<div/>', {
                    'id': 'line' + line,
                    'class': 'line'
                })
                    .data('line', line)
            )

            bloc.forEach(function (cases) {
                $('#line' + line).append(cases.render())
            })
        })
    }

    /**
     * Select one bloc in the map.
     *
     * @returns {*}
     */
    getRandomBlock() {
        let line = this.posRandom('line')
        let column = this.posRandom('column')

        if ('undefined' !== this.freeBlocs[line][column]) {
            return this.freeBlocs[line][column]
        } else {
            this.getRandomBlock()
        }
    }

    /**
     * Make the selected bloc free.
     *
     * @param posY
     * @param posX
     */
    createFreeBloc(posY, posX) {
        this.freeBlocs[posY][posX] = new BlocManager(
            new Bloc(posY, posX)
        )
    }

    /**
     * Generate a random index with freeBlocs's metrix.
     *
     * @param dir
     * @param line
     * @returns {number}
     */
    posRandom(dir, line = 1) {
        return Math.floor(Math.random() * (
            dir == 'line'
                ? this.height
                : this.freeBlocs[line].length - 1
        )) + 1
    }
}