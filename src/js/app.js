import {Router} from "./_router";
import {Map} from "./Model/Map";

$(document).ready(function () {
    //Router.home()
    Router.arena('Toto', 'Ploufy')
    let map = new Map()
    map.render()
})