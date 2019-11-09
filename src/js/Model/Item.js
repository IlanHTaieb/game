import {Model} from "./Model.js";

export class Item extends Model {
    type = 'item'
    name = ''

    getName() {
        return this.name
    }
}