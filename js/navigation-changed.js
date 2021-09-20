document.addEventListener('DOMContentLoaded', () => {
    fin.me.showDeveloperTools();

    const changeLocationBtn = document.querySelector('#change-location');

    changeLocationBtn.addEventListener('click', (e) => {
        fin.me.navigate("https://google.com")
    });

})