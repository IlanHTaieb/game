import {Bloc} from "./Bloc";

export class Map {
    maxX = 10
    maxY = 8
    arena = []
    occupedBlocs = []

    constructor() {
        for (let y = 0; y < this.maxY; y++) {
            this.arena[y] = []
            for (let x = 0; x < this.maxX; x++) {
                this.arena[y][x] = new Bloc(y, x)
            }
        }
    }

    render() {
        this.arena.forEach(function (bloc, line) {
            $('.arena').append('<div id="line' + line + '" class="line" data-line="' + line + '"></div>')
            
            bloc.forEach(function (cases) {
                cases.render('#line' + line)
            })
        })
    }
}