import {Router} from "./_router.js";
import {Map} from "./Model/Map.js";
import {Pirate} from "./Model/Characters/Pirate.js";
import {CharacterManager} from "./Manager/Elements/CharacterManager.js";
import {Marines} from "./Model/Characters/Marines.js";
import {ThingManager} from "./Manager/Elements/ThingManager.js";
import {Wall} from "./Model/Things/Wall.js";
import {Knife} from "./Model/Things/Weapons/Knife.js";
import {Shootgun} from "./Model/Things/Weapons/Shootgun.js";
import {ItemManager} from "./Manager/Elements/ItemManager.js";
import {Character} from "./Model/Character.js";



$(document).ready(function () {
    //Router.home()
    Router.arena('Toto', 'Ploufy');
    let map = new Map();
    map.render();

    let characters = {
        pirate: new CharacterManager(new Pirate()),
        marines: new CharacterManager(new Marines())
    };

    console.log();

    let knife = new ItemManager(new Knife());
    let shootgun = new ItemManager(new Shootgun());

    map.init(characters.pirate);
    map.init(characters.marines);
    map.init(knife);
    map.init(shootgun);

    let wall = new ThingManager(new Wall());

    for (let i = 0; i <= 15; i++) {
        map.init(wall)
    }

    let firstPlayer = Object.entries(characters)
        [Math.floor(Math.random() * Object.entries(characters).length)]
        [1];

    $('.bloc').click(function () {
        let currentPlayer = firstPlayer

        for (let [key, player] of Object.entries(characters)) {
            if (player.getCurrent().getRound()) {
                currentPlayer = player
                player.getCurrent().setRound(false)
            } else {
                player.getCurrent().setRound(true)
            }
        }

        if ($(this).data('type') == 'free' || $(this).data('type') == 'item') {
            map.move(currentPlayer, $(this).data())
        }
    })
});