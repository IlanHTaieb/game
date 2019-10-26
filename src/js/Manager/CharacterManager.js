export class CharacterManager {
    instance

    constructor(instance) {
        this.instance = instance
    }

    getInstance() {
        return this.instance
    }

    setInstance(posY, posX) {
        this.instance.setPosY(posY)
        this.instance.setPosX(posX)
    }

    render() {
        let posY = this.instance.getPosY()
        let posX = this.instance.getPosX()

        let node = $('.bloc:data("pos-y")')
            .filter(function () {
                return $(this).data("pos-y") == posY && $(this).data("pos-x") == posX
            })

        node.data("type", this.instance.getType())
        node.addClass(this.instance.getType())
    }
}