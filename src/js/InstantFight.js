import {Router} from "./_router.js";

export class InstantFight {
    characters
    target
    currentPlayer

    constructor(characters) {
        this.characters = characters
        this.setFirstPlayer()
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
        console.log('- The first player is ' + this.getCurrentPlayer().getCurrent().getName())
        console.log('- The current target is ' + this.getTarget().current.getName())
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
        console.log('- The new current player is ' + this.getCurrentPlayer().current.getName())
    }

    getTarget() {
        return this.target
    }

    /**
     * Set target.
     */
    setTarget(target = undefined) {
        console.log('- setting target')
        if (target) {
            console.log('- injected target')
            this.target = target

            console.log('- the new target is ' + this.getTarget().current.getName())
        } else {
            console.log(('- First target'))
            let range =
                this.currentPlayer >= (Object.keys(this.characters).length - 1)
                    ? 0
                    : this.currentPlayer + 1

            this.target = Object.entries(this.characters)[range][1]

            console.log('- The first target is ' + this.getTarget().current.getName())
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
        $('#info').addClass('alert-info')
        this.message(currentPlayer.getName() + ' attaque ' + target.getName())

        setTimeout(function () {
            that.message(target.getName() + ' a perdu ' + currentPlayer.getPower() + 'PDV')
        }, 2000)

        target.setHeal(
            target.getHeal() - currentPlayer.getPower()
        )


        if (target.getHeal() <= 0) {
            $.when(Router.win(currentPlayer.getName()))
                .done(() => {
                    $('#replay').click(() => {
                        location.reload()
                    })
                })
        } else {
            $.when(this.setTarget(this.getCurrentPlayer()))
                .done(() => {
                    setTimeout(function () {
                        that.message('Au tour de ' + currentPlayer.getName())
                    }, 4500)

                    this.setCurrentPlayer()

                    setTimeout(function () {
                        $('.btn').attr("disabled", false)
                    }, 4500)
                })
        }
    }

    pokeball() {
        $('#info').addClass('alert-info')
        this.message(this.getTarget().getCurrent().getName() + ' n\'est pas un pokemon, bien essayé')
    }

    flee() {
        $.when(Router.win(this.getTarget().getCurrent().getName()))
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
        console.log('Messaging')
        $('#info').text(message)
    }
}