import {Model} from "./Model.js";

export class Character extends Model{
    heal = 100
    power = 10
    move = 3
    name

    getHeal() {
        return this.heal
    }

    getPower() {
        return this.power
    }

    getMove() {
        return this.move
    }

    getName() {
        return this.name
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

    setName(name) {
        this.name = name
    }
}