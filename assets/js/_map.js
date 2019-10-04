export const Map = {
    data: {
        nbX: 10,
        nbY: 8,
        size: 100 + 'px',
        line: '<div class="line"></div>',
        bloc: '<div class="bloc"></div>',
    },
    init() {
        for (let i = 0; i <= Map.data.nbY; i++) {
            $('.arena').append(Map.data.line)
            $('.line:nth-child('+i+')').addClass('line-'+i)
            $('.line:nth-child('+i+')').attr('pos-y', i)

            for (let b = 0; b < Map.data.nbX; b++) {
                $('.line:nth-child('+i+')').append(Map.data.bloc)
                $('.line:nth-child('+i+') .bloc:nth-child('+b+')').attr('pos-x', b).attr('pos-y', i)
            }

            $('.line').css('display', 'flex')
            $('.bloc').css('border', '2px solid black')
            $('.bloc').css('width', this.data.size)
            $('.bloc').css('height', this.data.size)
        }
    }
}