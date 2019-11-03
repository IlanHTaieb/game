import {Router} from "./_router";
import {Map} from "./Model/Map";
import {Pirate} from "./Model/Characters/Pirate";
import {CharacterManager} from "./Manager/CharacterManager";
import {Marines} from "./Model/Characters/Marines";
import {ThingManager} from "./Manager/ThingManager";
import {Wall} from "./Model/Things/Wall";
import {Knife} from "./Model/Things/Weapons/Knife";
import {Shootgun} from "./Model/Things/Weapons/Shootgun";

$(document).ready(function () {
    //Router.home()
    Router.arena('Toto', 'Ploufy')
    let map = new Map()
    map.render()

    let pirate = new CharacterManager(new Pirate())
    let marines = new CharacterManager(new Marines())
    let knife = new ThingManager(new Knife())
    let shootgun = new ThingManager(new Shootgun())

    map.init(pirate)
    map.init(marines)
    map.init(knife)

    let wall = new ThingManager(new Wall())

    for (let i = 0; i <= 15; i++) {
        map.init(wall)
    }

    $('.bloc').click(function () {
        if ($(this).data('type') == 'free') {
            map.move(pirate, $(this).data())
        }
    })
})