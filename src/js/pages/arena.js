export const Arena = {
    component: function () {
        return `
            <div class="arena-page position-relative row justify-content-end align-items-center m-0 px-5">
                <div class="arena position-absolute"></div>
                <audio src="../../../public/sountracks/arena_low.mp3" id="audio" loop autoplay></audio>
            </div>
        
        `
    },
    render: function () {
        $('.body').append(this.component())
    }
}
