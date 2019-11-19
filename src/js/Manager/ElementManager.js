export class ElementManager {
    current

    constructor(current) {
        this.current = current
    }

    getCurrent() {
        return this.current
    }

    setCurrent(posY, posX) {
        this.current.setPosY(posY)
        this.current.setPosX(posX)
    }

    render() {
        let posY = this.current.getPosY()
        let posX = this.current.getPosX()

        let node = $('.bloc:data("pos-y")')
            .filter(function () {
                return $(this).data("pos-y") == posY && $(this).data("pos-x") == posX
            })

        node.append('<img height="350px" width="75px" class="arena-fighter ' + this.getCurrent().getType() + '" src="../../../public/images/perso/fight-' + this.getCurrent().getType() + '.png">')
        node.data("type", this.current.getType())
        node.data("instance", this.current)
        this.addTypeClass(node)
    }

    addTypeClass(node) {
        node.addClass(this.current.getType())
    }
}