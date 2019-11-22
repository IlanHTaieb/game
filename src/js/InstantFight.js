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

    /**
     * Add event listeners for the fightpage.
     */
    addEvents() {
        $('#hit').click(() => {
            this.hit()
        })

        $('#pokeball').click(() => {
            this.pokeball()
        })

        $('#items').click(() => {
            this.openBag()
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

        if (this.currentPlayer.poison) this.currentPlayer.heal = (this.currentPlayer.heal - 10)
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
    hit(hasWeapon) {
        let that = this
        let target = this.getTarget().getCurrent()
        let currentPlayer = this.getCurrentPlayer().getCurrent()
        let power = hasWeapon
            ? hasWeapon
            : currentPlayer.getPower()

        $('.btn').attr("disabled", true)
        document.getElementById('audio-sword').play()
        this.message(currentPlayer.getName() + ' attaque ' + target.getName())

        setTimeout(function () {
            document.getElementById('audio-ouch').play()
            that.message(target.getName() + ' a perdu ' + power + 'PDV')
        }, 2000)

        target.setHeal(
            target.getHeal() - power
        )


        if (target.getHeal() <= 0) {
            $.when(Router.win(currentPlayer.getType()))
                .done(() => {
                    $('#replay').click(() => {
                        location.reload()
                    })
                })
        } else {
            this.endRound(4500)
        }
    }

    /**
     * Open your bag.
     */
    openBag() {
        $('.fight-commands').hide()
        $('.open-bag').show()

        $('.open-bag')
            .append(
                `
                        <div class="col-md-6 col-sm-12 py-2">
                            <button type="button" id="back" class="btn btn-danger">Retour</button>
                        </div>
                        `
            )

        $('#back').click(e => {
            $('.fight-commands').show()

            $('.open-bag')
                .empty()
                .hide()
        })

        for (let [key, items] of Object.entries(this.getCurrentPlayer().getCurrent().getBag())) {
            for (let [key, item] of Object.entries(items)) {
                $('.open-bag')
                    .append(
                        `
                        <div class="col-md-6 col-sm-12 py-2">
                            <button type="button" id="` + item.getName() + `" class="btn btn-success">` + item.getName() + `</button>
                        </div>
                        `
                    )

                $('#' + item.getName()).click(e => {
                    $('.btn').attr("disabled", true)

                    item.item == "weapons"
                        ? this.useWeapon(item)
                        : this.usePotion(item)
                })
            }
        }
    }

    /**
     * Use weapon.
     *
     * @param weapon
     */
    useWeapon(weapon) {
        console.log('ok')
        let current =
            this.getCurrentPlayer().getCurrent()
        console.log(current)

        console.log(weapon)
        this.hit(weapon.getPower())
        $('.fight-commands')
            .show()

        $('.open-bag')
            .empty()
            .hide()
    }

    /**
     * Use potion.
     *
     * @param potion
     */
    usePotion(potion) {
        let current = this.getCurrentPlayer().getCurrent()

        switch (potion.getName()) {
            case 'heal':
                $.when(current.setHeal(current.getHeal() + potion.getPower()))
                    .done(() => {
                        this.message(current.getName() + ' récupère ' + potion.getPower() + 'PDV')
                        this.endRound(2000)

                        $('.fight-commands')
                            .show()

                        $('.open-bag')
                            .empty()
                            .hide()
                    })
                break
            case 'poison':
                $.when(this.getTarget().getCurrent().poison = true)
                    .done(() => {
                        this.endRound(2000)

                        $('.fight-commands')
                            .show()

                        $('.open-bag')
                            .empty()
                            .hide()
                    })
                break
        }
    }


    /**
     * Pokeball Go !
     */
    pokeball() {
        this.message(this.getTarget().getCurrent().getName() + ' n\'est pas un pokemon.')
    }

    /**
     * Flee the fight?
     */
    flee() {
        $.when(Router.win(this.getTarget().getCurrent().getType()))
            .done(() => {
                $('#replay').click(() => {
                    location.reload()
                })
            })
    }

    /**
     * Process end of the round.
     *
     * @param delay
     */
    endRound(delay) {
        $.when(this.setTarget(this.getCurrentPlayer()))
            .done(() => {
                let that = this

                this.setCurrentPlayer()

                if (this.getCurrentPlayer().getCurrent().poison) {
                    setTimeout(function () {
                        that.getCurrentPlayer().getCurrent().setHeal(
                            that.getCurrentPlayer().getCurrent().getHeal() - 5
                        )

                        that.message(that.getCurrentPlayer().getCurrent().getName() + ' perds 5PVD supplémentaire')
                    }, delay - 1000)
                }

                setTimeout(function () {
                    that.message('Au tour de ' + that.getCurrentPlayer().getCurrent().getName())
                }, delay)


                setTimeout(function () {
                    $('.btn').attr("disabled", false)
                }, delay)
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