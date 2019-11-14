import { Home } from "./pages/home.js"
import { Arena } from "./pages/arena.js"
import {Fight} from "./pages/fight.js";

export const Router = {
    home: function () {
        Home.render()
    },
    arena: function (p1, p2) {
        Arena.render(p1, p2)
    },
    fight: function () {
        Fight.render()
    }
}