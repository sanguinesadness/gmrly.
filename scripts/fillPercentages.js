const gameCards = document.querySelectorAll('.game-card');

gameCards.forEach((card) => {
    const percentage = parseInt(card.querySelector('.percentage').textContent);
    const progress = card.querySelector('.progress-bar .negative-value');

    progress.style.width = `${100 - percentage}%`;
});