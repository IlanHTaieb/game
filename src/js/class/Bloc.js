export class Bloc {
    posY = 0
    posX = 0
    size = 0
    node = ''
    style = ''

    constructor(posY, posX, size = 100) {
        this.posY = posY
        this.posX = posX
        this.size = size + 'px'
        this.style = 'width: ' + this.size + '; height: ' + this.size + '; border: 1px solid black;'
        this.node = '<div class="bloc" style="' + this.style + '" data-pox-y="' + posY + '" data-pos-x="' + posX + '"></div>'
    }

    render(line) {
        $(line).append(this.node)
    }
}