export const Nuclear = {
    component: (winner) => {
        return `
                <div class="nuclear-page h-100 w-100">
                    <div class="win row m-0 justify-content-end">
                        <div class="col-md-7 py-5 d-flex justify-content-start">
                            <div class="w-75 h-25 d-flex justify-content-between align-items-start">
                                <img src="https://fontmeme.com/permalink/191128/74ca5b6866ee6125a30bc114a0f64f76.png" alt="ghost-army-stencil-font" border="0">
                                <button id="replay" class="btn">Rejouer</button>
                            </div>
                        </div>
                    </div>
            
                    <audio src="../../../public/sountracks/america-fuck-yeah.mp3" id="audio" loop autoplay></audio>
                </div>
        
    `;
    },
    render: function () {
        $('.fight-page').remove()
        $('.win-page').remove()
        $('.body').append(this.component())
    }
}
