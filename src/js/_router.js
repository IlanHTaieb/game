import { Home } from './pages/home'
import { Arena } from "./pages/arena";

export const Router = {
    home: function () {
        Home.render()
    },
    arena: function (p1, p2) {
        Arena.render(p1, p2)
    }
}