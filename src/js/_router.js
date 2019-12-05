import { Home } from "./pages/home.js"
import { Arena } from "./pages/arena.js"
import {Fight} from "./pages/fight.js";
import {Info} from "./pages/_info.js";
import {Win} from "./pages/win.js";
import {Nuclear} from "./pages/nuclear.js";

export const Router = {
    home: function () {
        Home.render()
    },
    arena: function () {
        $('.home').remove()
        Arena.render()
    },
    fight: function () {
        $('.info').remove()
        $('.arena-page').remove()

        Fight.render()
    },
    info: (p1, p2) => {
        Info.render(p1, p2)
    },
    win: (winner) => {
        Win.render(winner)
    },
    nuclear: () => {
        Nuclear.render()
    }
}