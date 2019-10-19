export class Bloc {
    posY = 0
    posX = 0
    size = 0
    node = ''

    constructor(posY, posX, size = 100) {
        this.posY = posY
        this.posX = posX
        this.size = size
    }

    getStyle() {
        return 'width: ' + this.getSize() + '; height: ' + this.getSize() + '; border: 1px solid black;'
    }

    getSize() {
        return this.size + 'px'
    }

    getNode() {
        '<div class="bloc" style="' + this.getStyle() + '" data-pox-y="' + posY + '" data-pos-x="' + posX + '"></div>'
    }

    render(line) {
        $(line).append(this.node)
    }
}