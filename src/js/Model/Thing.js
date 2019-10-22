export class Thing {
    posY = 0
    posX = 0
    type = ''

    constructor(pos) {
        this.posY = pos.posY
        this.posX = pos.posX
    }

    getPosY() {
        return this.posY
    }

    getPosX() {
        return this.posX
    }

    getType() {
        return this.type
    }
}