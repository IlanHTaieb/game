import {Item} from "../Item.js";

export class Potion extends Item{
    item = 'potions'
    power

    getPower() {
        return this.power
    }
}