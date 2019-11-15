export const Info = {
    component: (p1, p2) => {
        return `
                <div class="info">
                    <div class="player player_1">
                        <div class="avatar"></div>
                        <p class="info-player-1" style="text-align: center;">${p1.current.getName()}</p>
                        <div class="power">Vous avez une puissance de <span class="power-value-${p1.current.getName()}">${p1.current.getPower()}</span></div>
                        <div class="life_line"></div>
                        <div class="life">${p1.current.getHeal()}/100</div>
                    </div>
                    
                    <div class="player player_2">
                        <div class="avatar"></div>
                        <p class="info-player-2" style="text-align: center;">${p2.current.getName()}</p>
                        <div class="power">Vous avez une puissance de <span class="power-value-${p2.current.getName()}">${p2.current.getPower()}</span></div>
                        <div class="life_line"></div>
                        <div class="life">${p2.current.getHeal()}/100</div>
                    </div>
                    </div>
    `;
    },
    render: function (p1, p2) {
        $('.body').append(this.component(p1, p2))
    }
}
