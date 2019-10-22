export class ThingManager {
    thing;

    constructor(thing) {
        this.thing = thing
    }

    render() {
        let posY = this.thing.getPosY()
        let posX = this.thing.getPosX()

        let node = $('.bloc:data("pos-y")')
            .filter(function () {
                return $(this).data("pos-y") == posY && $(this).data("pos-x") == posX
            })

        node.data("type", this.thing.getType())
        node.addClass(this.thing.getType())
    }
}