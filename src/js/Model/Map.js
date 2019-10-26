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

        $.when(item).then(function () {
            element.setInstance(
                item.bloc.getPosY(),
                item.bloc.getPosX()
            )
            console.log(element.getInstance().getPosX())
            element.render()
        })

        console.log(
            'removing',
            this.freeBlocs[item.bloc.getPosY()][item.bloc.getPosX()]
        )

        this.freeBlocs[item.bloc.getPosY()].splice(item.bloc.getPosX(), 1)

        console.log(
            'removed',
            this.freeBlocs[item.bloc.getPosY()][item.bloc.getPosX()],
            this.freeBlocs[item.bloc.getPosY()]
        )

        if (this.freeBlocs[item.bloc.getPosY()].length == 0) {
            this.freeBlocs.splice(item.bloc.getPosY(), 1)
        }

        console.log(
            'result',
            this.freeBlocs[item.bloc.getPosY()]
        )
    }

    posRandom(dir, line = 1) {
        return Math.floor(Math.random() * (
            dir == 'line'
                ? this.height
                : this.freeBlocs[line].length - 1
        )) + 1
    }

    makeRandom() {
        let posY = Math.floor(Math.random() * (this.height)) + 1
        let posX = Math.floor(Math.random() * (this.width)) + 1

        let node = $('.bloc:data("pos-y")').filter(function () {
            return $(this).data("pos-y") == posY && $(this).data("pos-x") == posX
        });

        if (node.data('type') != 'free') {
            this.makeRandom()
        }

        return {
            posY: posY,
            posX: posX
        }
    }
}