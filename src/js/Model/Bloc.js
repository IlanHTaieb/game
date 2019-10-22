export class Bloc {
    posY
    posX
    size

    constructor(posY, posX, size = 100) {
        this.posY = posY
        this.posX = posX
        this.size = size
    }

    getPosY() {
        return this.posY
    }

    getPosX() {
        return this.posX
    }

    getSize() {
        return this.size + 'px'
    }

    setPosY(posY) {
        this.posY = posY
    }

    setPosX(posX) {
        this.posX = posX
    }

    setSize(size) {
        this.size = size + 'px'
    }
}