export const Home = {
    component: `
        <div class="home">
            <h1>Rejoignez la bataille</h1>
            
            <div class="card container p-0">
                <div class="card-header">
                    <h2>Entrez le nom de vos personnages</h2>
                </div>
                <div class="card-body">
                    <form>
                        <input class="my-3 form-control" type="text" name="player1" id="player1" placeholder="Pirate">
                        <input class="my-3 form-control" type="text" name="player2" id="player2" placeholder="Marines">
                        <button type="submit" class="m-auto w-25 d-block submit btn btn-primary">Entrer</button>
                    </form>
                </div>
            </div>
        </div>
    `,
    render: function () {
        $('.body').append(this.component)
    }
}
