export const Fight = {
    component: `
        <div class="fight h-100">
            <h1>Fight !</h1>
            
            
<div id="info" class="alert" role="alert"></div>
        
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
        
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <button type="button" id="hit" class="btn btn-danger">Attaquer</button>
                </div>
                
                <div class="col-md-6 col-sm-12">
                    <button type="button" id="pokeball" class="btn btn-info">Pokeball</button>
                </div>
                
                <div class="col-md-6 col-sm-12">
                    <button type="button" id="items" class="btn btn-success">Sac à dos</button>
                </div>
                
                <div class="col-md-6 col-sm-12">
                    <button type="button" id="flee" class="btn btn-dark">Fuir</button>
                </div>
            </div>
        </div>
    `,
    render: function () {
        $('.body').append(this.component)
    }
}
