import {Bloc} from "./Bloc.js"
import {BlocManager} from "../Manager/BlocManager.js"

export class Map {
    height = 10
    width = 10
    arena = []
    freeBlocs = []
    characters
    currentPlayer

    constructor(characters) {
        console.log('- Setting all characters')
        console.log(characters)
        console.log('- Nb: ' + (Object.keys(characters).length))
        this.characters = characters

        for (let y = 1; y <= this.height; y++) {
            this.arena[y] = []

            for (let x = 1; x <= this.width; x++) {
                this.arena[y][x] = new BlocManager(new Bloc(y, x))
            }
        }

        this.freeBlocs = this.arena
    }

    getHeigth() {
        return this.height
    }

    getWidth() {
        return this.width
    }

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

    init(element) {
        let item = this.chooseBlock()
        let that = this

        if (item) {
            element.setCurrent(
                item.bloc.getPosY(),
                item.bloc.getPosX()
            )

            element.render()

            that.freeBlocs[item.bloc.getPosY()].splice(item.bloc.getPosX(), 1)

            if (that.freeBlocs[item.bloc.getPosY()].length == 0) {
                that.freeBlocs.splice(item.bloc.getPosY(), 1)
            }
        }
    }

    chooseBlock() {
        let line = this.posRandom('line')
        let column = this.posRandom('column')

        if ('undefined' != this.freeBlocs[line][column]) {
            return this.freeBlocs[line][column]
        } else {
            this.chooseBlock()
        }
    }

    setTestFirstPlayer(characters) {
        let first =  Object.entries(characters)[
            Math.floor(
                Math.random() * Object.entries(characters).length
            )
            ][1]

        console.log('- The first player is ' + first.getCurrent().getType())
        this.currentPlayer = first

        return first
    }

    getCurrentplayer() {
        return this.characters[this.currentPlayer][1]
    }

    setCurrentPlayer(character) {
        this.currentPlayer =
            this.currentPlayer >= (Object.keys(this.characters).length - 1)
                ? 0
                : this.currentPlayer + 1

        character.getCurrent().setRound(val)
    }

    move(character, bloc) {
        let currentPosition = {
            Y: character.getCurrent().getPosY(),
            X: character.getCurrent().getPosX()
        }

        let destinationPosition = {
            Y: bloc.posY,
            X: bloc.posX
        }

        let move = {
            Y: destinationPosition.Y - currentPosition.Y,
            X: destinationPosition.X - currentPosition.X
        }


        if (this.checkMove(character, move)) {
            this.createFreeBloc(bloc.posY, bloc.posX)
            character.move(bloc.posY, bloc.posX)

            console.log('- Setting played')
            character.getCurrent().setHasPlayed(true)
            console.log('- Done')
        }
    }

    checkMove(character, move) {
        console.log('- Setting no played')
        character.getCurrent().setHasPlayed(false)
        console.log('- Done')

        let speed = character.getCurrent().getMove()
        let horizontalMove = move.X <= speed && move.X >= -speed
        let verticalMove = move.Y <= speed && move.Y >= -speed
        let bottomRightMove = (move.X + move.Y) <= speed && (move.X + move.Y) >= -speed
        let toBottomLeftMove = (move.Y + move.X) == 0
            ? (move.Y == 1 && move.X == -1) || (move.Y == -1 && move.X == 1)
            : true

        if (horizontalMove && verticalMove && bottomRightMove && toBottomLeftMove) {
            return true
        } else  {
            return false
        }
    }

    createFreeBloc(posY, posX) {
        this.freeBlocs[posY][posX] = new BlocManager(
            new Bloc(posY, posX)
        )
    }

    posRandom(dir, line = 1) {
        return Math.floor(Math.random() * (
            dir == 'line'
                ? this.height
                : this.freeBlocs[line].length - 1
        )) + 1
    }
}