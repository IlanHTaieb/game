export const Home = {
    component: `
        <div id="swup" class="home h-100">
            <div class="container home-content">
                <div class="row h-100">
                    <div class="col-md-7 h-100">
                    </div>
                    
                    <div class="game-container position-relative col-md-5 h-100 px-5 d-flex flex-column justify-content-center">
                        <img src="https://fontmeme.com/permalink/191117/ea3ac8f33b05521ce8b2b9eba1950ad4.png" alt="polices-de-calligraphie" border="0">                        
                        
                        <form>
                            <input class="my-3 form-control border-bottom" type="text" name="player1" id="player1" placeholder="Pirate">
                            <input class="my-3 form-control border-bottom" type="text" name="player2" id="player2" placeholder="Marines">
                            
                            <label class="label-select" for="height-map">Taille de la carte</label>
                            
                            <select name="height-map" id="height-map">
                                <option value="little">Petite</option>
                                <option value="medium">Moyenne</option>
                                <option value="large">Grande</option>
                            </select>
                            
                            <label class="label-select" for="nbWeapons">Nombe d'armes</label>
                            
                            <select name="nbWeapons" id="nbWeapons">
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            
                            <div class="field">
                                <input type="checkbox" name="nuclear" id="nuclear">
                                <label for="nuclear">Bombe nucleaire ?</label>
                            </div>
                            
                            <button type="submit" class="w-100 submit btn btn-primary">Entrer</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <audio src="../../../public/sountracks/home_low.mp3" id="audio" loop autoplay></audio>
        </div>
        
    `,
    render: function () {
        $('.body').append(this.component)
    }
}
