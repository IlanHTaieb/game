import {Router} from "./_router.js";
import {Pirate} from "./Model/Characters/Pirate.js";
import {Marines} from "./Model/Characters/Marines.js";
import {Game} from "./Game.js";
import {InstantFight} from "./InstantFight.js";

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

        $('.home').remove()

        Router.arena(pirateName, marinesName)

        run()
    })

    const run = () => {
        // Initialization
        const game = new Game(pirateName, marinesName)

        game.start()

        Router.info(game.characters.pirate, game.characters.marines)

        $('.infos-arena-text').text('Au tour de ' + game.getCurrentPlayer().getCurrent().getName())

        // Events
        $('.bloc').on('mouseover', function () {
            if ($(this).data('type') == 'free' || $(this).data('type') == 'item') {
                game.showCase($(this).data(), $(this))
            } else {
                $('.bloc').css('background-color', 'rgba(49, 145, 196, 0.5)')
            }
        })

        // Actions
        $('.bloc').click(function () {
            console.log('- Click to move')
            if ($(this).data('type') == 'free' || $(this).data('type') == 'item') {
                game.move($(this).data())
                console.log('- End move')

                let compareY =
                    game.characters.marines.current.getPosY() - game.characters.pirate.current.getPosY()

                let compareX =
                    game.characters.marines.current.getPosX() - game.characters.pirate.current.getPosX()

                compareY = compareY < 0 ? -compareY : compareY
                compareX = compareX < 0 ? -compareX : compareX

                if ((1 === compareY && 0 === compareX) || (0 === compareY && 1 === compareX)) {
                    $.when(Router.fight())
                        .done(() => {
                            const fight = new InstantFight(game.characters)

                            $('#hit').click(() => {
                                fight.hit()
                            })

                            $('#pokeball').click(() => {
                                fight.pokeball()
                            })

                            $('#items').click(() => {
                                console.log('Items !')
                            })

                            $('#flee').click(() => {
                                fight.flee()
                            })
                        })
                }
            }
        })
    }
});