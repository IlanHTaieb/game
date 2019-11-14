import {Router} from "./_router.js";
import {Map} from "./Model/map.js";
import {Pirate} from "./Model/Characters/Pirate.js";
import {CharacterManager} from "./Manager/Elements/CharacterManager.js";
import {Marines} from "./Model/Characters/Marines.js";
import {ThingManager} from "./Manager/Elements/ThingManager.js";
import {Wall} from "./Model/Things/Wall.js";
import {Knife} from "./Model/Things/Weapons/Knife.js";
import {Shootgun} from "./Model/Things/Weapons/Shootgun.js";
import {ItemManager} from "./Manager/Elements/ItemManager.js";
import {Game} from "./Game.js";

$(document).ready(function () {
    let pirateName = 'Pirate'
    let marinesName = 'Marines'

    // Routes
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
                :  'Marines'

        $('.home').hide()

        Router.arena(
            pirateName,
            marinesName
        )

        /////////
        // Initialization
        const game = new Game(pirateName, marinesName)

        game.map.render()

        game.map.init(game.characters.pirate);
        game.map.init(game.characters.marines);
        game.map.init(game.things.items.knife);
        game.map.init(game.things.items.shootgun);

        for (let i = 0; i <= 15; i++) {
            game.map.init(game.things.wall)
        }

        // Chose the first player
        game.map.setFirstPlayer(game.characters)


        // Events
        $('.bloc').on('mouseover', function () {
            if ($(this).data('type') == 'free' || $(this).data('type') == 'item') {
                game.map.showCase($(this).data(), $(this))
            } else {
                $('.bloc').css('background-color', 'rgba(11, 74, 89, 0.7)')
            }
        })

        // Actions
        $('.bloc').click(function () {
            console.log('- Click to move')
            if ($(this).data('type') == 'free' || $(this).data('type') == 'item') {
                game.map.move($(this).data())
                console.log('- End move')

                let compareY =
                    game.characters.marines.current.getPosY() - game.characters.pirate.current.getPosY()

                let compareX =
                    game.characters.marines.current.getPosX() - game.characters.pirate.current.getPosX()

                compareY = compareY < 0 ? - compareY : compareY
                compareX = compareX < 0 ? - compareX : compareX

                if ((1 === compareY && 0 === compareX) || (0 === compareY && 1 === compareX)) {
                    $('.info').hide()
                    $('.arena').hide()

                    Router.fight()
                }
            }
        })
        ///////
    })
    //
});