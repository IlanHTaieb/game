import {Model} from "./Model.js";

export class Item extends Model {
    type = 'item'
    item = ''
    name = ''

    getName() {
        return this.name
    }

    drop(bag) {
        bag[this.item][this.getName()] = this
    }
}