export const Fight = {
    component: `
        <div class="fight h-100">
            <h1>Fight !</h1>
        
            <div class="fight-body h-100 row flex-column justify-content-between">
                <div class="row justify-content-md-end">
                    <div class="col-md-5 info border">
                        Player 2
                    </div>
                </div>
        
                <div class="row justify-content-start">
                    <div class="col-md-5 info border">
                        Player 1
                    </div>
                </div>
            </div>
        
            <div class="form">
                <input class="form-control" type="text" name="player1" id="player1" placeholder="Joueur 1">
                <input class="form-control" type="text" name="player2" id="player2" placeholder="Joueur 2">
                <button class="submit">Entrer</button>
            </div>
        </div>
    `,
    render: function () {
        console.log('ok')
        $('.body').append(this.component)
    }
}
