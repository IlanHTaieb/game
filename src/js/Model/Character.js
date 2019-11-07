import {Model} from "./Model.js";

export class Character extends Model{
    heal = 200
    power = 10
    move = 3
    round = false

    getHeal() {
        return this.heal
    }

    getPower() {
        return this.power
    }

    getMove() {
        return this.move
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

    getRound() {
        return this.round
    }

    setRound(round) {
        this.round = round
    }
}