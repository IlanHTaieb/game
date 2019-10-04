export const Personnages = {
    data: {
        player1: "pirate",
        player2: "marines",
        positions: {
            "pLine": 0,
            "pBloc": 0,
            "mLine": 0,
            "mbloc": 0
        }
    },
    init(lines, blocs) {
        this.data.positions.pline = this.makeRandom(lines);
        this.data.positions.pBloc = this.makeRandom(blocs);

        this.data.positions.mline = this.makeRandom(lines);
        this.data.positions.mBloc = this.makeRandom(blocs);

        this.initPirate(this.data.positions.pBloc, this.data.positions.pline);

        this.initMarines(
            this.data.positions.mBloc == this.data.positions.pBloc
                ? this.makeRandom(blocs)
                : this.data.positions.mBloc,

            this.data.positions.mline == this.data.positions.pline
                ? this.makeRandom(lines)
                : this.data.positions.mline
        )

    },
    initPirate(x, y) {
        $('.bloc[pos-y=' + y + '][pos-x=' + x + ']').addClass('pos-pirate')
    },
    initMarines(x, y) {
        $('.bloc[pos-y=' + y + '][pos-x=' + x + ']').addClass('pos-marines')
    },
    makeRandom(max) {
        return Math.floor(Math.random() * (max)) + 1
    }
};