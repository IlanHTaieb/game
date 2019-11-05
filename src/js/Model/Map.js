import {Bloc} from "./Bloc"
import {BlocManager} from "../Manager/BlocManager"

export class Map {
    height = 10
    width = 10
    arena = []
    freeBlocs = []

    constructor() {
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

    move(character, bloc) {
        console.log('- Starting move')

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

        console.log('- Character position')
        console.log(currentPosition)
        console.log('- Bloc position')
        console.log(destinationPosition)
        console.log('- Move length')
        console.log(move)

        if ((move.Y + move.X) <= character.getCurrent().getMove() && (move.Y + move.X) > -4) {
            this.createFreeBloc(bloc.posY, bloc.posX)
            character.move(bloc.posY, bloc.posX)
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