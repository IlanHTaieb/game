export const Home = {
    component: function (p1, p2) {
        return `
            <div class="arena"></div>
        
            <div class="info">
                <div class="player player_1">
                    <div class="avatar"></div>
                    <p class="info-player-1" style="text-align: center;">` + p1 + `</p>
                    <div class="life_line"></div>
                    <div class="life">/100</div>
                </div>
                <div class="player player_2">
                    <div class="avatar"></div>
                    <p class="info-player-2" style="text-align: center;">` + p2 + `</p>
                    <div class="life_line"></div>
                    <div class="life">/100</div>
                </div>
            </div>
        `
    },
    render: function (p1, p2) {
        return this.component(p1, p2)
    }
}
