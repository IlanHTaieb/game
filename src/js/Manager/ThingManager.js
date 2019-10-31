export class ThingManager {
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

        node.data("type", this.current.getType())
        node.addClass(this.current.getType())
    }
}