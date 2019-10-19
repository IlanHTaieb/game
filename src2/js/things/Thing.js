export class Thing {
    posY = 0
    posX = 0
    type = ''

    constructor(posY, posX) {
        this.posY = posY
        this.posX = posX
    }

    render() {
        let posY = this.posY
        let posX = this.posX
        let div = document.querySelector('.line:nth-child(' + this.posY + ')')
            .childNodes[this.posX]

        div.classList.add(this.type)
    }
}