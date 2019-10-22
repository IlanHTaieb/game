import {Router} from "./_router";
import {Map} from "./Model/Map";
import {Pirate} from "./Model/Characters/Pirate";
import {CharacterManager} from "./Manager/CharacterManager";
import {Marines} from "./Model/Characters/Marines";
import {ThingManager} from "./Manager/ThingManager";
import {Wall} from "./Model/Things/Wall";

$(document).ready(function () {
    //Router.home()
    Router.arena('Toto', 'Ploufy')
    let map = new Map()
    map.render()

    let pirate = new CharacterManager(new Pirate(
        map.makeRandom()
    ))

    let marines = new CharacterManager(new Marines(
        map.makeRandom()
    ))

    pirate.render()
    marines.render()
    for (let i = 0; i < 20; i++) {
        let wall = new ThingManager(new Wall(
            map.makeRandom()
        ))

        wall.render()
    }
})