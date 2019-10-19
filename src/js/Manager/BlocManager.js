export class BlocManager {
    bloc

    constructor(bloc) {
        this.bloc = bloc
    }

    render(line) {
        return $('<div/>', {
            'class': 'bloc'
        })
            .css('width', this.bloc.getSize())
            .css('height', this.bloc.getSize())
            .css('border', '1px solid black')
            .data({
                'id': line,
                'pos-y': this.bloc.getPosY(),
                'pos-x': this.bloc.getPosX(),
                'type': 'free'
            })
    }
}