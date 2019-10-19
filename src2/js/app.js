import {Router} from "../../src/js/_router";
import {Map} from "./board/Map"
import {Pirate} from "./characters/Pirate";
import {Marines} from "./characters/Marines";
import {Wall} from "./things/Wall";

$(document).ready(function () {
    //Router.home()
    Router.arena('Toto', 'Ploufy')
    let map = new Map()
    let pirate = new Pirate(map.makeRandom('y'), map.makeRandom('x'))
    let marines = new Marines(map.makeRandom('y'), map.makeRandom('x'))
    let wall = new Wall(map.makeRandom('y'), map.makeRandom('x'))
    map.render()
    pirate.render()
    marines.render()


    wall.render()

    $('.submit').click(function () {
        $('.home').hide()
        Router.arena('Toto', 'Ploufy')
    })
})