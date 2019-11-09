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

$(document).ready(function () {
    // Routes
    //Router.home()
    Router.arena('Toto', 'Ploufy');

    // Initialization
    let characters = {
        pirate: new CharacterManager(new Pirate()),
        marines: new CharacterManager(new Marines())
    };

    let map = new Map(characters);
    map.render();

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

    // Chose the first player
    map.setFirstPlayer(characters)

    // Events
    $('.bloc').on('mouseover', function () {
        if ($(this).data('type') == 'free' || $(this).data('type') == 'item') {
            map.showCase($(this).data(), $(this))
        } else {
            $('.bloc').css('background-color', 'rgba(11, 74, 89, 0.7)')
        }
    })

    // Actions
    $('.bloc').click(function () {
        console.log('- Click to move')
        if ($(this).data('type') == 'free' || $(this).data('type') == 'item') {
            map.move($(this).data())
        }
    })
});