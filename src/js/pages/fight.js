export const Fight = {
    component: `
        <div class="fight-page h-100 w-100 py-5">
            <div class="fight container h-100">
                <h1 style="color: white">Fight !</h1>
                            
                <div class="fight-body row justify-content-between">
                        <div class="col-md-5 h-100 d-flex flex-column justify-content-end fight-info">
                            <img src="../../../public/images/perso/fight-marines.png" alt="">
                        </div>
            
                        <div class="col-md-5 h-100 d-flex flex-column justify-content-start fight-info">
                            <div class="row h-100">
                                <div class="col-12 h-50">
                                    <img src="../../../public/images/perso/fight-pirate.png" alt="">
                                </div>
                                
                                <div id="info" class="fight-message col-12 h-50 d-flex justify-content-center align-items-center"></div>
                            </div>
                        </div>
                    </div>
            
                <div class="fight-commands row text-center py-5">
                    <div class="col-md-6 col-sm-12 py-2">
                        <button type="button" id="hit" class="btn action">Attaquer</button>
                    </div>
                    
                    <div class="col-md-6 col-sm-12 py-2">
                        <button type="button" id="pokeball" class="btn action">Pokeball</button>
                    </div>
                    
                    <div class="col-md-6 col-sm-12 py-2">
                        <button type="button" id="items" class="btn action">Sac à dos</button>
                    </div>
                    
                    <div class="col-md-6 col-sm-12 py-2">
                        <button type="button" id="flee" class="btn action">Fuir</button>
                    </div>
                </div>
            </div>
            
            <div class="open-bag row text-center py-5"></div>
            
            <audio src="../../../public/sountracks/fight_low.mp3" id="audio" loop autoplay></audio>
            <audio src="../../../public/sountracks/sword2.mp3" id="audio-sword"></audio>
            <audio src="../../../public/sountracks/ouch.mp3" id="audio-ouch"></audio>
        </div>
        
    `,
    render: function () {
        $('.body').append(this.component)
    }
}
