import {Map} from "./_map";

export const Wall = {
    init: function(bloc) {
        $('.bloc[pos-y=' + bloc.posY + '][pos-x=' + bloc.posX + ']').addClass('pos-wall')
        Map.clear(bloc.id)
    }
}