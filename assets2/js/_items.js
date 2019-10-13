/**
 *
 *
 *  Work in progress.
 *
 *
 */


import {Map} from "./_map";

export const Items = {
    data: {},
    init: function () {
        $.getJSON("http://localhost/_OPENCLASSROOMS/game/assets/js/data/items.json", data => {
            Items.data = data
        })
    },
    initWeapon: function (bloc) {
        let weapon = this.data.weapons[
            Math.floor(Math.random() * (this.data.weapons.length)) + 1
        ]

        $('.bloc[pos-y=' + bloc.posY + '][pos-x=' + bloc.posX + ']').addClass('pos-weapon-' + weapon)

        Map.clear(bloc.id)
    },
    initPotion: function (bloc) {
        let potion = this.data.weapons[
            Math.floor(Math.random() * (this.data.potions.length)) + 1
        ]

        $('.bloc[pos-y=' + bloc.posY + '][pos-x=' + bloc.posX + ']').addClass('pos-potion-' + potion)

        Map.clear(bloc.id)
    }
}