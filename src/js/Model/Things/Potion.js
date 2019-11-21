import {Item} from "../Item.js";

export class Potion extends Item{
    item = 'potion'
    power

    getPower() {
        return this.power
    }
}