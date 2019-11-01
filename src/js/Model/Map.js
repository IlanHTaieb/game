import {Bloc} from "./Bloc"
import {BlocManager} from "../Manager/BlocManager"

export class Map {
    height = 8
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

        $.when(item).done(function () {
            element.setCurrent(
                item.bloc.getPosY(),
                item.bloc.getPosX()
            )

            element.render()
        })

        this.freeBlocs[item.bloc.getPosY()].splice(item.bloc.getPosX(), 1)

        if (this.freeBlocs[item.bloc.getPosY()].length == 0) {
            this.freeBlocs.splice(item.bloc.getPosY(), 1)
        }
    }

    chooseBlock() {
        return this.freeBlocs
            [this.posRandom('line')]
            [this.posRandom('column')]
    }

    move(character, bloc) {
        let posX
        let posY
        let that = this
        let moves = [
            {
                //Move up
                dir: 'Y',
                distance: character.getCurrent().getPosY() - bloc.posY
            },
            {
                //Move down
                dir: 'Y',
                distance: bloc.posY - character.getCurrent().getPosY()
            },
            {
                //Move left
                dir: 'X',
                distance: character.getCurrent().getPosX() - bloc.posX
            },
            {
                //Move right
                dir: 'X',
                distance: bloc.posX - character.getCurrent().getPosX()
            }
        ]

        $.when(
            moves.forEach(move => {
                let line = move.dir == 'X'
                    ? {
                        character: character.getCurrent().getPosY(),
                        bloc: bloc.posY,
                        speed: character.getCurrent().getMove(),
                        dir: 'Y'
                    }
                    : {
                        character: character.getCurrent().getPosX(),
                        bloc: bloc.posX,
                        speed: character.getCurrent().getMove(),
                        dir: 'X'
                    }

                    let init = this.checkMove(move, line)

                if (line.character == line.bloc) {
                    if (init.result) {
                        init.dir == 'X' ? posX = true : posY = true
                    }
                }
            })
        ).done(function () {
            if (posY || posX) {
                that.createFreeBloc(bloc.posY, bloc.posX)
                character.move(bloc.posY, bloc.posX)
            }
        })
    }

    checkMove(move, line) {
        let moveExists = move.distance > 0
        let moveNotTooLong = move.distance <= line.speed

        if (moveExists && moveNotTooLong) {
            return line.dir == 'X'
                ? {result:move.distance, dir: 'Y'}
                : {result:move.distance, dir: 'X'}
        } else {
            return line.dir == 'X'
                ? {result:false, dir: 'Y'}
                : {result:false, dir: 'X'}
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