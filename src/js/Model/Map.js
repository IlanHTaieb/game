import {Bloc} from "./Bloc.js"
import {BlocManager} from "../Manager/BlocManager.js"

const MAP_SIZE = {
    little: 7,
    medium: 9,
    large: 10
}

export class Map {
    mapSize
    arena = []
    freeBlocs = []


    /**
     * The Map constructor.
     */
    constructor(mapSize) {
        this.mapSize = mapSize

        this.createBoard()
    }

    /**
     * Set the board.
     */
    createBoard() {
        for (let y = 1; y <= MAP_SIZE[this.mapSize]; y++) {
            this.arena[y] = []

            for (let x = 1; x <= MAP_SIZE[this.mapSize]; x++) {
                this.arena[y][x] = new BlocManager(
                    new Bloc(y, x, (9/MAP_SIZE[this.mapSize]) * 100)
                )
            }
        }

        this.freeBlocs = this.arena
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
                ? MAP_SIZE[this.mapSize]
                : this.freeBlocs[line].length - 1
        )) + 1
    }
}