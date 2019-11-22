import {Item} from "../Item.js"

export class Weapon extends Item{
    item = 'weapons'
    power

    getPower() {
        return this.power
    }
}