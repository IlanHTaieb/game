import {ElementManager} from "../ElementManager.js";

export class ItemManager extends ElementManager{
    addTypeClass(node) {
        node
            .addClass(this.current.getName())
            .empty()
            .append('<img class="arena-fighter ' + this.getCurrent().getName() + '" src="../../../../public/images/perso/fight-' + this.getCurrent().getName() + '.png">')
    }
}