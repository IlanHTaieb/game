export class Move {    
    /**
     * Return availability for player to move.
     *
     * @param currentPlayer
     * @param bloc
     */
    movable(currentPlayer, bloc) {
        let move = {
            Y: bloc.posY - currentPlayer.getCurrent().getPosY(),
            X: bloc.posX - currentPlayer.getCurrent().getPosX()
        }

        let wayIsFree = this.checkObstacle(
            {
                posY: currentPlayer.getCurrent().getPosY(),
                posX: currentPlayer.getCurrent().getPosX()
            },
            bloc
        )

        return (this.checkMoveLength(currentPlayer, move) && wayIsFree)
    }

    /**
     * Check if action is possible.
     *
     * @param move
     * @returns {boolean}
     */
    checkMoveLength(currentPlayer, move) {
        let speed = currentPlayer.getCurrent().getMove()

        return (this.unsigned(move.Y) + this.unsigned(move.X)) <= speed
    }

    /**
     * Check if the way is free.
     *
     * @param player
     * @param bloc
     * @returns {boolean}
     */
    checkObstacle(player, bloc) {
        let positionsY = [player.posY, bloc.posY]
        let positionsX = [player.posX, bloc.posX]
        let moveBlocs = []

        for (let y = Math.min(...positionsY); y <= Math.max(...positionsY); y++) {
            moveBlocs[y] = []
            for (let x = Math.min(...positionsX); x <= Math.max(...positionsX); x++) {
                moveBlocs.push(this.getBloc({posY: y, posX: x}))
            }
        }

        let moveBlocsY = this.groupByPos(moveBlocs, 'Y')
        let moveBlocsX = this.groupByPos(moveBlocs, 'X')

        delete moveBlocsY.undefined
        delete moveBlocsX.undefined

        this.blocFilter(moveBlocsY)
        this.blocFilter(moveBlocsX)

        return (0 < Object.entries(moveBlocsY).length && 0 < Object.entries(moveBlocsX).length)
    }

    /**
     * Get the required bloc.
     *
     * @param bloc
     * @returns {*|jQuery}
     */
    getBloc(bloc) {
        let node = $('.bloc:data("pos-y")')
            .filter(function () {
                return $(this).data("pos-y") == bloc.posY && $(this).data("pos-x") == bloc.posX
            })

        return node.data()
    }

    /**
     * Group moveBloc array by pos.
     *
     * @param element
     * @returns {*}
     */
    groupByPos(element, dir) {
        return element.reduce((r, a) => {
            r[dir === 'Y' ? a.posY : a.posX] = [...r[dir === 'Y' ? a.posY : a.posX] || [], a]
            return r
        }, {})
    }

    /**
     * Remove line of blocks if it contains wall.
     *
     * @param elements
     */
    blocFilter(elements) {
        for (let [key, value] of Object.entries(elements)) {
            value.some(e => {
                if (elements.hasOwnProperty(key)) {
                    if ('wall' === e.type) {
                        delete elements[key]
                        return true
                    }
                }
            })
        }
    }

    /**
     * Format number to unsigned.
     *
     * @param value
     * @returns {number}
     */
    unsigned(value) {
        return value > 0
            ? value
            : -value
    }
}