import {Router} from "./_router.js";
import {Pirate} from "./Model/Characters/Pirate.js";
import {Marines} from "./Model/Characters/Marines.js";
import {Game} from "./Game.js";

$(document).ready(function () {
    let pirateName = 'Pirate'
    let marinesName = 'Marines'

    Router.home()

    $('.home form').submit((e) => {
        e.preventDefault()

        pirateName =
            $('#player1').val()
                ? $('#player1').val()
                : 'Pirate'

        marinesName =
            $('#player2').val()
                ? $('#player2').val()
                : 'Marines'

        Router.arena(pirateName, marinesName)

        run()
    })

    const run = () => {
        // Initialization
        const game = new Game(pirateName, marinesName)
        game.start()

        // Events
        $('.bloc').on('mouseover', function () {
            if ('free' == $(this).data('type') || 'item' == $(this).data('type')) {
                game.showCase($(this).data(), $(this))
            } else {
                $('.bloc').css('background-color', 'rgba(49, 145, 196, 0.5)')
            }
        })

        // Actions
        $('.bloc').click(function () {
            if ('free' == $(this).data('type') || 'item' == $(this).data('type')) {
                game.move($(this).data())

                if (game.isBesideEnemy()) {
                    game.runFight()
                }
            }
        })
    }
});