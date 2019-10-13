import {Map} from "./_map";

export const Personnages = {
    data: {
        player1: "pirate",
        player2: "marines"
    },
    initPirate(bloc) {
        $('.bloc[pos-y=' + bloc.posY + '][pos-x=' + bloc.posX + ']').addClass('pos-pirate')
        Map.clear(bloc.id)
    },
    initMarines(bloc) {
        $('.bloc[pos-y=' + bloc.posY + '][pos-x=' + bloc.posX + ']').addClass('pos-marines')
        Map.clear(bloc.id)
    }
};