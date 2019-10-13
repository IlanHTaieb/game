import { Home } from './_home'
import { Welcome } from "./_welcome";

export const Router = {
    welcome: function () {
        return Welcome.render()
    },
    home: function (p1, p2) {
        return Home.render(p1, p2)
    }
}