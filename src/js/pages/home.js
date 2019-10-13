export const Home = {
    component: `
        <div class="home">
            <h1>Rejoignez la bataille</h1>
            
            <div class="form">
                <input class="form-control" type="text" name="player1" id="player1" placeholder="Joueur 1">
                <input class="form-control" type="text" name="player2" id="player2" placeholder="Joueur 2">
                <button class="submit">Entrer</button>
            </div>
        </div>
    `,
    render: function () {
        $('.body').append(this.component)
    }
}
