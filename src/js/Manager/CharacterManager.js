export class CharacterManager {
    character

    constructor(character) {
        this.character = character
    }

    render(posY, posX) {
        return $('.bloc:data("pos-y")')
            .filter(function () {
                return $(this).data("pos-y") == posY
            })
            .filter(function () {
                return $(this).data("posX") == posX
            })
    }
}