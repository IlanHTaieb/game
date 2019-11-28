import {Pirate} from "./Model/Characters/Pirate.js";
import {Marines} from "./Model/Characters/Marines.js";
import {Game} from "./Game.js";
import {Router} from "./_router.js";

$(document).ready(function () {
    //const router = new Router()
    let pirateName = 'Pirate'
    let marinesName = 'Marines'
    let mapSize


    Router.home()
    //$.when(router.renderHome())

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

        mapSize = $('#height-map').val()


        Router.arena(pirateName, marinesName)

        run()
    })


    const run = () => {
        // Initialization
        const game = new Game(pirateName, marinesName, mapSize)
        game.start()
    }
});