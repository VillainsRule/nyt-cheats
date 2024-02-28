(() => {
    let parsed = JSON.parse(localStorage['nyt-wordle-moogle/ANON']);

    parsed.settings.hardMode = true;

    localStorage['nyt-wordle-moogle/ANON'] = JSON.stringify(parsed);
    location.reload();
})();
