import {Bloc} from "./Bloc";
import {BlocManager} from "../Manager/BlocManager";

export class Map {
    height = 8
    width = 10
    arena = []
    occupedBlocs = []

    constructor() {
        for (let y = 1; y <= this.height; y++) {
            this.arena[y] = []
            for (let x = 1; x <= this.width; x++) {
                this.arena[y][x] = new BlocManager(new Bloc(y, x))
            }
        }
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

    makeRandom() {
        let posY = Math.floor(Math.random() * (this.height)) + 1
        let posX = Math.floor(Math.random() * (this.width)) + 1

        let node = $('.bloc:data("pos-y")').filter(function () {
            return $(this).data("pos-y") == posY && $(this).data("pos-x") == posX
        })

        if (node.data('type') != 'free') {
            this.makeRandom(5)
        }

        return {
            posY: posY,
            posX: posX
        }
    }
}