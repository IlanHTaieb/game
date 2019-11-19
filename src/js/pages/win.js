export const Win = {
    component: (winner) => {
        return `
                <div class="win-page h-100 w-100">
                    <div class="win row m-0 justify-content-end">
                        <div class="col-md-7 py-5 d-flex justify-content-end">
                            <div class="w-75 h-25 d-flex justify-content-between align-items-start">
                                <img src="https://fontmeme.com/permalink/191117/150ab97b0a737e05259fcade8dfa1322.png" alt="polices-de-calligraphie" border="0">
                                <button id="replay" class="btn">Rejouer</button>
                            </div>
                        </div>
                        
                        <div class="col-md-5 py-5">
                            <img height="1300" src="../../../public/images/perso/fight-${winner.toLowerCase()}.png" alt="">
                        </div>
                    </div>
            
                    <audio src="../../../public/sountracks/win_low.mp3" id="audio" loop autoplay></audio>
                </div>
        
    `;
    },
    render: function (winner) {
        $('.fight-page').remove()
        $('.body').append(this.component(winner))
    }
}
