window.$ = require("jquery")
import {CharacterManager} from "../../src/js/Manager/Elements/CharacterManager";
import {Pirate} from "../../src/js/Model/Characters/Pirate";
import {Marines} from "../../src/js/Model/Characters/Marines";

let characters = {
    pirate: new CharacterManager(new Pirate()),
    marines: new CharacterManager(new Marines())
}

test('Pirate exists', () => {
    expect(characters.pirate.getCurrent().getType())
        .toEqual('pirate')
})

test('Marines exists', () => {
    expect(characters.marines.getCurrent().getType())
        .toEqual('marines')
})