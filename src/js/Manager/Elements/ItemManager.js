import {ElementManager} from "../ElementManager.js";

export class ItemManager extends ElementManager{
    addTypeClass(node) {
        node.addClass(this.current.getName())
    }
}