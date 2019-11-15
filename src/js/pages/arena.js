export const Arena = {
    component: function () {
        return `
            <div class="arena">
                <div id="info-arena" class="alert alert-info"></div>
            </div>`
    },
    render: function () {
        $('.body').append(this.component())
    }
}
