import {Model} from "./Model.js";

export class Character extends Model{
    heal = 100
    power = 10
    move = 3
    name
    bag = {
        weapons: [],
        potions: []
    }

    getHeal() {return this.heal}

    getPower() {return this.power}

    getMove() {return this.move}

    getBag(item = null) {return item ? this.bag[item] : this.bag}

    getName() {return this.name}

    setHeal(heal) {this.heal = heal}

    setPower(power) {this.power = power}

    setMove(move) {this.move = move}

    setBag(bag, item) {this.bag[item] = bag}

    setName(name) {this.name = name}
}