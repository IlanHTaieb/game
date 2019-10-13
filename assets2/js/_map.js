export const Map = {
    data: {
        nbX: 10,
        nbY: 8,
        size: 100 + 'px',
        line: '<div class="line"></div>',
        bloc: '<div class="bloc"></div>',
        freeBlocs: []
    },
    init() {
        for (let i = 1; i <= Map.data.nbY; i++) {
            $('.arena').append(Map.data.line)
            $('.line:nth-child('+i+')').addClass('line-'+i)
            $('.line:nth-child('+i+')').attr('pos-y', i)

            for (let b = 1; b <= Map.data.nbX; b++) {
                $('.line:nth-child('+i+')').append(Map.data.bloc)

                $('.line:nth-child('+i+') .bloc:nth-child('+b+')')
                    .data('X', b)

                this.data.freeBlocs.push({
                    "id": this.data.freeBlocs.length,
                    "posX": b,
                    "posY": i
                })
            }

            $('.line').css('display', 'flex')
            $('.bloc').css('border', '2px solid black')
            $('.bloc').css('width', this.data.size)
            $('.bloc').css('height', this.data.size)
        }
    },
    clear: function (id) {
        this.data.freeBlocs.splice(id, 1)
    }
}