(() => {
    let parsed = JSON.parse(localStorage['games-state-wordleV2/ANON']);
    let today = parsed[parsed.length - 1];

    parsed.states[today].data.boardState = new Array(6).fill('');
    parsed.states[today].data.game.currentRowIndex = 0;
    parsed.states[today].data.game.status = 'IN_PROGRESS';

    localStorage['games-state-wordleV2/ANON'] = JSON.stringify(parsed);
    location.reload();
})();