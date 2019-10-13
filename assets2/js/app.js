import {Map} from './_map'
import {Personnages} from './_personnages'
import {Wall} from './_wall'
import {Router} from './_router'

$(document).ready(function () {
    $('.body').append(Router.welcome());

    let player1 = '';
    let player2 = '';

    $('#player1').on('input', function () {
        player1 = $('#player1').val()
    });

    $('#player2').on('input', function () {
        player2 = $('#player2').val()
    });

    $('.submit').click(function () {
        $('.welcome').hide()
        $('.body').append(Router.home(player1, player2))

        Map.init()

        Personnages.initPirate(
            makeRandom(Map.data.freeBlocs.length)
        )

        Personnages.initMarines(
            makeRandom(Map.data.freeBlocs.length)
        )

        for (let i = 0; i < Math.floor(Math.random() * (Map.data.freeBlocs.length/2)); i++) {
            Wall.init(
                makeRandom(Map.data.freeBlocs.length)
            )
        }
    });

    function makeRandom(max) {
        return Map.data.freeBlocs[Math.floor(Math.random() * (max)) + 1]
    }
});