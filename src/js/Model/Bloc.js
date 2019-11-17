import {Model} from "./Model.js";

export class Bloc extends Model{
    size

    constructor(posY, posX, size = 95) {
        super()
        this.posY = posY
        this.posX = posX
        this.size = size
    }

    getSize() {
        return this.size + 'px'
    }

    setSize(size) {
        this.size = size + 'px'
    }
}