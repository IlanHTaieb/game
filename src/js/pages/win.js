export const Win = {
    component: (winner) => {
        return `
                <div class="win container">
                    <div class="card card-light">
                    
                        <div class="card-body">
                            <h2 class="card-title">${winner} a Gagné !</h2>
                            <button id="replay" class="btn btn-primary">Recommencer</button>
                        </div>
                    </div>
                </div>
    `;
    },
    render: function (winner) {
        $('.fight').remove()
        $('.body').append(this.component(winner))
    }
}
