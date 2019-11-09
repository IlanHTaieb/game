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
        console.log('- Number of participants: ' + (Object.keys(characters).length))

        this.characters = characters

        for (let y = 1; y <= this.height; y++) {
            this.arena[y] = []

            for (let x = 1; x <= this.width; x++) {
                this.arena[y][x] = new BlocManager(new Bloc(y, x))
            }
        }

        this.freeBlocs = this.arena
    }

    getHeight() {
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

            if (0 === that.freeBlocs[item.bloc.getPosY()].length) {
                that.freeBlocs.splice(item.bloc.getPosY(), 1)
            }
        }
    }

    chooseBlock() {
        let line = this.posRandom('line')
        let column = this.posRandom('column')

        if ('undefined' !== this.freeBlocs[line][column]) {
            return this.freeBlocs[line][column]
        } else {
            this.chooseBlock()
        }
    }

    setFirstPlayer(characters) {
        let first = Math.floor(
            Math.random() * Object.entries(characters).length
        )

        this.currentPlayer = first
        console.log('- The first player is ' + this.getCurrentPlayer().getCurrent().getType())
    }

    getCurrentPlayer() {
        return Object.entries(this.characters)[this.currentPlayer][1]
    }

    setCurrentPlayer() {
        this.currentPlayer =
            this.currentPlayer >= (Object.keys(this.characters).length - 1)
                ? 0
                : this.currentPlayer + 1
    }

    move(bloc) {
        let currentPosition = {
            Y: this.getCurrentPlayer().getCurrent().getPosY(),
            X: this.getCurrentPlayer().getCurrent().getPosX()
        }

        let destinationPosition = {
            Y: bloc.posY,
            X: bloc.posX
        }

        let move = {
            Y: destinationPosition.Y - currentPosition.Y,
            X: destinationPosition.X - currentPosition.X
        }

        if (this.checkMove(move)) {
            this.createFreeBloc(bloc.posY, bloc.posX)
            this.getCurrentPlayer().move(bloc.posY, bloc.posX)

            this.setCurrentPlayer()
            console.log('- The new player is ' + this.getCurrentPlayer().getCurrent().getType())
        }
    }

    showCase(bloc, element) {
        var line;
        let currentPosition = {
            Y: this.getCurrentPlayer().getCurrent().getPosY(),
            X: this.getCurrentPlayer().getCurrent().getPosX()
        }

        let destinationPosition = {
            Y: bloc.posY,
            X: bloc.posX
        }

        let move = {
            Y: destinationPosition.Y - currentPosition.Y,
            X: destinationPosition.X - currentPosition.X
        }


        if (
            this.checkMove(move)
            && (
                element.data("posY") !== currentPosition.Y
                || element.data("posX") !== currentPosition.X
            )
        ) {
            move.Y = 0 < move.Y
                ? move.Y
                : -move.Y

            move.X = 0 < move.X
                ? move.X
                : -move.X

            for (let l = currentPosition.Y-move.Y; l < currentPosition.Y+move.Y; l++) {
                line =
                    $('.bloc').filter(function () {
                        return $(this).data("posY") == l
                    })

                line.map(function (element) {
                    for (let c = currentPosition.X-move.X; c < currentPosition.X+move.X; c++) {
                        let bloc =
                            $('.bloc').filter(function () {
                                return $(this).data("posX") == c
                            })

                        console.log(bloc)
                    }
                })

                for (let c = 1; c < move.X; c++) {
                    let bloc =
                        $('.bloc').filter(function () {
                            return $(this).data("posX") == currentPosition.X + l
                        })

                    //console.log(bloc)

                }
            }


            element.css('background-color', 'green')
        } else {
            $('.bloc').css('background-color', 'rgba(11, 74, 89, 0.7)')
        }
    }

    checkMove(move) {
        let speed = this.getCurrentPlayer().getCurrent().getMove()

        move.Y = 0 < move.Y
            ? move.Y
            : -move.Y

        move.X = move.X > 0
            ? move.X
            : -move.X

        return (move.Y + move.X) <= speed
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