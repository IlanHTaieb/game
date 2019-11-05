import {Model} from "./Model";

export class Bloc extends Model{
    size

    constructor(posY, posX, size = 100) {
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