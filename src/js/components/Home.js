export class Home {
    getHtml() {
        let that = this
        $.get('http://game.test/src/html/home.html', function (data) {
            that.consoleHtml(data)
        })
    }

    consoleHtml(data) {
        console.log(data)
    }
}