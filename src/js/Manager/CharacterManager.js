export class CharacterManager {
    character

    constructor(character) {
        this.character = character
    }

    render() {
        let posY = this.character.getPosY()
        let posX = this.character.getPosX()

        let node = $('.bloc:data("pos-y")')
            .filter(function () {
                return $(this).data("pos-y") == posY && $(this).data("pos-x") == posX
            })

        node.data("type", this.character.getType())
        node.addClass(this.character.getType())
    }
}