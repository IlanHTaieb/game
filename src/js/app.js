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

    map.setTestFirstPlayer(characters)

    //map.move(player, $(this).data())

    $('.bloc').click(function () {
        console.log('- Click to move')
        if ($(this).data('type') == 'free' || $(this).data('type') == 'item') {
            map.move($(this).data())
        }
    })

    // TODO
    //console.log('- Setting no played')
    //character.getCurrent().setHasPlayed(false)
    //console.log('- Done')


    /*
     $('.bloc').click(function () {
        console.log('- Click to move')
        if ($(this).data('type') == 'free' || $(this).data('type') == 'item') {
            console.log('- No obstacles')
            for (let [key, player] of Object.entries(characters)) {
                console.log('- Fetch user')
                if (player.getCurrent().getRound() === true) {
                    console.log('- Round ok for ' + player.getCurrent().getType())
                    map.move(player, $(this).data())
                    map.setCurrentPlayer(player, false)
                } else {
                    console.log('- Round not ok for ' + player.getCurrent().getType())
                    if (map.getLastPlayer() != player.getCurrent().getType()) {
                        console.log('- ' + player.getCurrent().getType() + ' is not the last player')
                        if (map.getFirstMoveActed() === true) {
                            console.log('- First move acted')
                            player.getCurrent().setRound(true)
                            map.setCurrentPlayer(player, true)
                        }
                    }
                }
            }
        }
    })
     */
});