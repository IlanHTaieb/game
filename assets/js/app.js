import { Map } from './_map'
import { Personnages } from './_personnages'
import { Router } from './_router'

$(document).ready(function () {
    $('.body').append(Router.welcome())

    let player1 = ''
    let player2 = ''

    $('#player1').on('input', function () {
        player1 = $('#player1').val()
    })

    $('#player2').on('input', function () {
        player2 = $('#player2').val()
    })

    $('.submit').click(function () {
        $('.welcome').hide()
        $('.body').append(Router.home(player1, player2))
        Map.init()
        Personnages.init(Map.data.nbX, Map.data.nbY)
    })
})