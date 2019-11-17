export const Home = {
    component: `
        <div class="home h-100">
            <div class="container home-content">
                <div class="row h-100">
                    <div class="col-md-7 h-100">
                    </div>
                    
                    <div class="game-container position-relative col-md-5 h-100 px-5 d-flex flex-column justify-content-center">
                        <img src="https://fontmeme.com/permalink/191117/ea3ac8f33b05521ce8b2b9eba1950ad4.png" alt="polices-de-calligraphie" border="0">                        
                        
                        <form>
                            <input class="my-3 form-control border-bottom" type="text" name="player1" id="player1" placeholder="Pirate">
                            <input class="my-3 form-control border-bottom" type="text" name="player2" id="player2" placeholder="Marines">
                            <button type="submit" class="w-100 submit btn btn-primary">Entrer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `,
    render: function () {
        $('.body').append(this.component)
    }
}
