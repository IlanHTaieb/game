export class Character {
    heal = 200
    power = 10
    move = 3
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

        let div = $('.bloc:data(pos-y)')
        let div2 = $('.bloc[data-pos-y=5]')
        let div3 = document.querySelector('.line:nth-child(' + this.posY + ')')
            .childNodes[this.posX]

        console.log(div, div2, div3)
        div.addClass(this.type)
        div3.classList.add(this.type)
        //$('[data-pos-y=' + this.posY + '][data-pos-x=' + this.posX + ']')
        //    .addClass(this.type)
    }
}