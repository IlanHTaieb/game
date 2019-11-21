import {Item} from "../Item.js"

export class Weapon extends Item{
    item = 'weapon'
    power

    getPower() {
        return this.power
    }
}