(() => {
    let parsed = JSON.parse(localStorage['nyt-wordle-moogle/ANON']);

    parsed.game.boardState = new Array(6).fill('');
    parsed.game.currentRowIndex = 0;
    parsed.game.status = 'IN_PROGRESS';

    localStorage['nyt-wordle-moogle/ANON'] = JSON.stringify(parsed);
    location.reload();
})();
