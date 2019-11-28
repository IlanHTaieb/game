export class Router {
    renderHome() {
        $.get('http://game.test/src/html/home.txt', (data) => {
            $('.body').html(data)
        })
    }

    renderArena() {
        $.get('http://game.test/src/html/arena.html', (data) => {
            $('.body').html(data)
        })
    }
}