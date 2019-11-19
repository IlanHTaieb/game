import {Router} from "./_router.js";

export class InstantFight {
    characters
    target
    currentPlayer

    constructor(characters) {
        let that = this

        this.characters = characters
        $.when(this.setFirstPlayer())
            .done(function () {
                that.message('Au tour de ' + that.getCurrentPlayer().getCurrent().getName())
            })
    }

    addEvents() {
        $('#hit').click(() => {
            this.hit()
        })

        $('#pokeball').click(() => {
            this.pokeball()
        })

        $('#weapons').click(() => {
            console.log('Items !')
        })

        $('#flee').click(() => {
            this.flee()
        })
    }

    /**
     * Set the first player for the game.
     */
    setFirstPlayer() {
        let first = Math.floor(
            Math.random() * Object.entries(this.characters).length
        )

        this.currentPlayer = first
        this.setTarget()
    }

    /**
     * Get the current player.
     */
    getCurrentPlayer() {
        return Object.entries(this.characters)[this.currentPlayer][1]
    }

    /**
     * Set one current player.
     */
    setCurrentPlayer() {
        this.currentPlayer =
            this.currentPlayer >= (Object.keys(this.characters).length - 1)
                ? 0
                : this.currentPlayer + 1
    }

    /**
     * Get the current target.
     *
     * @returns {*}
     */
    getTarget() {
        return this.target
    }

    /**
     * Set target.
     */
    setTarget(target = undefined) {
        if (target) {
            this.target = target
        } else {
            let range =
                this.currentPlayer >= (Object.keys(this.characters).length - 1)
                    ? 0
                    : this.currentPlayer + 1

            this.target = Object.entries(this.characters)[range][1]
        }
    }

    /**
     * Hit your enemy!
     *
     * @param target
     */
    hit() {
        let that = this
        let target = this.getTarget().getCurrent()
        let currentPlayer = this.getCurrentPlayer().getCurrent()

        $('.btn').attr("disabled", true)
        document.getElementById('audio-sword').play()
        this.message(currentPlayer.getName() + ' attaque ' + target.getName())

        setTimeout(function () {
            document.getElementById('audio-ouch').play()
            that.message(target.getName() + ' a perdu ' + currentPlayer.getPower() + 'PDV')
        }, 2000)

        target.setHeal(
            target.getHeal() - currentPlayer.getPower()
        )


        if (target.getHeal() <= 0) {
            $.when(Router.win(currentPlayer.getType()))
                .done(() => {
                    $('#replay').click(() => {
                        location.reload()
                    })
                })
        } else {
            let that = this
            $.when(this.setTarget(this.getCurrentPlayer()))
                .done(() => {
                    this.setCurrentPlayer()

                    setTimeout(function () {
                        that.message('Au tour de ' + that.getCurrentPlayer().getCurrent().getName())
                    }, 4500)


                    setTimeout(function () {
                        $('.btn').attr("disabled", false)
                    }, 4500)
                })
        }
    }

    pokeball() {
        this.message(this.getTarget().getCurrent().getName() + ' n\'est pas un pokemon.')
    }

    flee() {
        $.when(Router.win(this.getTarget().getCurrent().getType()))
            .done(() => {
                $('#replay').click(() => {
                    location.reload()
                })
            })
    }

    /**
     * Set message for players.
     *
     * @param message
     */
    message(message) {
        $('#info')
            .empty()
            .append('<p class="fight-message__text">' + message + '</p>')
    }
}