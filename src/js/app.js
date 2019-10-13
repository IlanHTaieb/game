import {Router} from "./_router";
import {Map} from "./class/Map"

$(document).ready(function () {
    //Router.home()
    Router.arena('Toto', 'Ploufy')
    let map = new Map
    map.render()

    $('.submit').click(function () {
        $('.home').hide()
        Router.arena('Toto', 'Ploufy')
    })
})