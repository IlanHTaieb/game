export const Arena = {
    component: function () {
        return `
            <div class="arena-page row justify-content-between align-items-center m-0 px-5">
                <div class="arena"></div>
            </div>
        `
    },
    render: function () {
        $('.body').append(this.component())
    }
}
