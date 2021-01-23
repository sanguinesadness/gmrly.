const searchForm = document.querySelector('form[name="game-search"]');
const input = searchForm.querySelector('input');
const button = searchForm.querySelector('button');

function searchGames(userInput) {
    const gameCards = document.querySelectorAll('.game-card');

    gameCards.forEach((card) => {
        const gameName = card.querySelector('.game-card__content > .title').textContent;

        if (gameName.toLowerCase().includes(userInput.toLowerCase())) {
            card.style.display = "flex";
        }
        else {
            card.style.display = "none";
        }
    });
}

input.addEventListener('keyup', (e) => {
    searchGames(input.value);
});