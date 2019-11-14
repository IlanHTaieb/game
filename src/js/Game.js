import {CharacterManager} from "./Manager/Elements/CharacterManager.js"
import {Pirate} from "./Model/Characters/Pirate.js"
import {Marines} from "./Model/Characters/Marines.js"
import {Map} from "./Model/Map.js";
import {ItemManager} from "./Manager/Elements/ItemManager.js";
import {Knife} from "./Model/Things/Weapons/Knife.js";
import {Shootgun} from "./Model/Things/Weapons/Shootgun.js";
import {ThingManager} from "./Manager/Elements/ThingManager.js";
import {Wall} from "./Model/Things/Wall.js";

export class Game {
    characters
    things
    map

    constructor(pirateName, marinesName) {
        this.characters = {
            pirate: new CharacterManager(new Pirate()),
            marines: new CharacterManager(new Marines())
        }

        this.characters.pirate.current.setName(pirateName)
        this.characters.marines.current.setName(marinesName)

        this.things = {
            items: {
                knife: new ItemManager(new Knife()),
                shootgun: new ItemManager(new Shootgun())
            },
            wall: new ThingManager(new Wall())
        }

        this.map = new Map(this.characters)
    }
}