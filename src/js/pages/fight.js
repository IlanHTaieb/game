export const Fight = {
    component: `
        <div class="fight-page h-100 w-100 py-5">
            <div class="fight container h-100">
                <h1 style="color: white">Fight !</h1>
                
                <div id="info" class="alert" role="alert"></div>
            
                <div class="fight-body row justify-content-between">
                        <div class="col-md-5 h-100 d-flex flex-column justify-content-end fight-info">
                            <img src="../../../public/images/perso/fight-marines.png" alt="">
                        </div>
            
                        <div class="col-md-5 h-100 d-flex flex-column justify-content-start fight-info">
                            <img src="../../../public/images/perso/fight-pirate.png" alt="">
                        </div>
                </div>
            
                <div class="row text-center py-5">
                    <div class="col-md-6 col-sm-12 py-2">
                        <button type="button" id="hit" class="btn btn-danger">Attaquer</button>
                    </div>
                    
                    <div class="col-md-6 col-sm-12 py-2">
                        <button type="button" id="pokeball" class="btn btn-info">Pokeball</button>
                    </div>
                    
                    <div class="col-md-6 col-sm-12 py-2">
                        <button type="button" id="items" class="btn btn-success">Sac à dos</button>
                    </div>
                    
                    <div class="col-md-6 col-sm-12 py-2">
                        <button type="button" id="flee" class="btn btn-dark">Fuir</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    render: function () {
        $('.body').append(this.component)
    }
}
