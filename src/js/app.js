import {Pirate} from "./Model/Characters/Pirate.js";
import {Marines} from "./Model/Characters/Marines.js";
import {Game} from "./Game.js";
import {Router} from "./_router.js";

$(document).ready(function () {
    let pirateName = 'Pirate'
    let marinesName = 'Marines'
    let nuclear
    let mapSize
    let nbWeapons


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

        nuclear = $('#nuclear').is(':checked')
        mapSize = $('#height-map').val()
        nbWeapons = $('#nbWeapons').val()


        Router.arena(pirateName, marinesName)

        run()
    })


    const run = () => {
        // Initialization
        const game = new Game(pirateName, marinesName, mapSize, nbWeapons, nuclear)
        game.start()
        // TODO : Next => Game.js
    }
});