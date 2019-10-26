export class Character {
    heal = 200
    power = 10
    move = 3
    posY = 0
    posX = 0
    type = ''

    getHeal() {
        return this.heal
    }

    getPower() {
        return this.power
    }

    getMove() {
        return this.move
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

    setHeal(heal) {
        this.heal = heal
    }

    setPower(power) {
        this.power = power
    }

    setMove(move) {
        this.move = move
    }

    setPosY(posY) {
        this.posY = posY
    }

    setPosX(posX) {
        this.posX = posX
    }

    setType(type) {
        this.type = type
    }
}