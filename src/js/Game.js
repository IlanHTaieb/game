import {CharacterManager} from "./Manager/Elements/CharacterManager"
import {Pirate} from "./Model/Characters/Pirate.js"
import {Marines} from "./Model/Characters/Marines.js"
import {Map} from "./Model/Map";
import {ItemManager} from "./Manager/Elements/ItemManager";
import {Knife} from "./Model/Things/Weapons/Knife";
import {Shootgun} from "./Model/Things/Weapons/Shootgun";
import {ThingManager} from "./Manager/Elements/ThingManager";
import {Wall} from "./Model/Things/Wall";

export class Game {
    characters
    things
    map

    constructor() {
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