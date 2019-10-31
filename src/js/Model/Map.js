import {Bloc} from "./Bloc";
import {BlocManager} from "../Manager/BlocManager";

export class Map {
    height = 8;
    width = 10;
    arena = [];
    freeBlocs = [];

    constructor() {
        for (let y = 1; y <= this.height; y++) {
            this.arena[y] = [];
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
            );

            bloc.forEach(function (cases) {
                $('#line' + line).append(cases.render())
            })
        })
    }

    init(element) {
        let line = this.freeBlocs[
            this.posRandom('line')
            ]

        let item = line[
            this.posRandom('column')
            ]

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

    move(character, bloc) {
        console.log('- Character PosY')
        console.log(character.getCurrent().getPosY())
        console.log('- Character PosX')
        console.log(character.getCurrent().getPosX())
        console.log('- Bloc PosY')
        console.log(bloc.posY)
        console.log('- Bloc PosX')
        console.log(bloc.posX)

        console.log('- Move up')
        console.log(character.getCurrent().getPosY() - bloc.posY)
        console.log('- Move down')
        console.log(bloc.posY - character.getCurrent().getPosY())
        console.log('- Move left')
        console.log(character.getCurrent().getPosX() - bloc.posX)
        console.log('- Move up')
        console.log(bloc.posX - character.getCurrent().getPosX())

        //let characterPosY = character.getCurrent().getPosY()
        //let characterPosX = character.getCurrent().getPosX()
        //let blocposY = bloc.posY
        //let blocPosX = bloc.posX

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

        //let moveUp = character.getCurrent().getPosY() - bloc.posY
        //let moveDown = bloc.posY - character.getCurrent().getPosY()
        //let moveLeft = character.getCurrent().getPosY() - bloc.posY
        //let moveRight = bloc.posY - character.getCurrent().getPosY()

        moves.forEach(move => {
            console.log('- Start move')
            let line = move.dir == 'X'
                ? {
                    character: character.getCurrent().getPosY(),
                    bloc: bloc.posY
                }
                : {
                    character: character.getCurrent().getPosX(),
                    bloc: bloc.posX
                }

            console.log('- Character speed')
            console.log(character.getCurrent().getMove(),move.distance)
            console.log('- Line')
            console.log(line)
            console.log('- Move')
            console.log(move)
            console.log('- Move exists')
            console.log(move.distance < 0)
            console.log('- Move not to long')
            console.log(move.distance <= character.getCurrent().getMove())
            console.log('- Line')
            console.log(line.character == line.bloc)

            let moveExists = move.distance > 0
            let moveNotTooLong = move .distance <= character.getCurrent().getMove()
            let onTheLine = line.character == line.bloc

            if (onTheLine) {
                if (moveExists && moveNotTooLong && onTheLine) {
                    this.createFreeBloc(bloc.posY, bloc.posX)
                    character.move(bloc.posY, bloc.posX)
                }
            }
        })

        /*
        if (character.getCurrent().getPosY() == bloc.posY) {
            if (
                character.getCurrent().getPosX() == bloc.posX + 1
                || character.getCurrent().getPosX() == bloc.posX - 1
            ) {
                this.createFreeBloc(bloc.posY, bloc.posX)
                character.move(bloc.posY, bloc.posX)
            }
        } else {
            if (character.getCurrent().getPosX() == bloc.posX) {
                if (
                    character.getCurrent().getPosY() == bloc.posY + 1
                    || character.getCurrent().getPosY() == bloc.posY - 1
                ) {
                    this.createFreeBloc(bloc.posY, bloc.posX)
                    character.move(bloc.posY, bloc.posX)
                }
            }
        }
        */
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