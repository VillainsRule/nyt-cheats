(() => {
    let parsed = JSON.parse(localStorage['nyt-wordle-moogle/ANON']);

    parsed.stats.currentStreak = Number.parseInt(prompt('What is your new current streak?')) || 0;
    parsed.stats.maxStreak = Number.parseInt(prompt('What is your new maximum achieved streak?')) || 0;
    parsed.stats.isOnStreak = !!parsed.stats.currentStreak;
    
    let newGuesses = prompt('What are your new successful guess distribution scores? Enter each of them separated by commas.\n\nExample: 1, 5, 8, 3, 4, 7 (this will put 1 successfull guess in one try, 5 successful guesses in two tries, etc).');
    let distribution = newGuesses
        .split(',')
        .map((num) => num.trim())
    distribution.forEach((num, index) => parsed.stats.guesses[index + 1] = num);
    parsed.stats.gamesWon = distribution.reduce((cur, prev) => cur + prev);

    let lost = Number.parseInt(prompt('How many games have you now lost?')) || 0;
    parsed.stats.guesses.fail = lost;
  
    localStorage['nyt-wordle-moogle/ANON'] = JSON.stringify(parsed);
    location.reload();
})();
