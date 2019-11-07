import {ElementManager} from "../ElementManager.js";

export class CharacterManager extends ElementManager{
    move(posY, posX) {
        this.removeOld()
        this.setCurrent(posY, posX)
        this.render()
    }

    removeOld() {
        let posY = this.current.getPosY()
        let posX = this.current.getPosX()

        $('.bloc:data("pos-y")')
            .filter(function () {
                return $(this).data("pos-y") == posY && $(this).data("pos-x") == posX
            })
            .data('type', 'free')
            .removeClass(this.current.getType())
    }
}