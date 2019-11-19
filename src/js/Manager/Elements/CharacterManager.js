import {ElementManager} from "../ElementManager.js";

export class CharacterManager extends ElementManager{
    create(node) {
        node.append('<img height="350px" width="75px" class="arena-fighter ' + this.getCurrent().getType() + '" src="../../../public/images/perso/fight-' + this.getCurrent().getType() + '.png">')
    }

    move(bloc) {
        this.removeOld()
        this.setCurrent(bloc.posY, bloc.posX)
        this.render()
    }

    removeOld() {
        let posY = this.current.getPosY()
        let posX = this.current.getPosX()

        $('.bloc:data("pos-y")')
            .filter(function () {
                return $(this).data("pos-y") == posY && $(this).data("pos-x") == posX
            })
            .empty()
            .data('type', 'free')
            .data('instance', null)
            .removeClass(this.current.getType())
    }
}