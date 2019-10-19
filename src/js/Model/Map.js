import {Bloc} from "./Bloc";
import {BlocManager} from "../Manager/BlocManager";

export class Map {
    height = 8
    width = 10
    arena = []
    occupedBlocs = []

    constructor() {
        for (let y = 0; y < this.height; y++) {
            this.arena[y] = []
            for (let x = 0; x < this.width; x++) {
                this.arena[y][x] = new BlocManager(new Bloc(y, x))
            }
        }
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

    makeRandom(pos) {
        let random = Math.floor(Math.random() * (pos === 'x' ? this.width : this.height)) + 1
        console.log(random)
        return random
    }
}