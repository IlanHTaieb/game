export class Thing {
    posY = 0
    posX = 0
    type = ''

    getPosY() {
        return this.posY
    }

    getPosX() {
        return this.posX
    }

    getType() {
        return this.type
    }

    setPosY(posY) {
        this.posY = posY
    }

    setPosX(posX) {
        this.posX = posX
    }
}