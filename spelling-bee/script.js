(() => {
    alert(`NYTIMES SPELLING BEE | ANSWERS\n    Pangram${gameData.today.pangrams.length > 1 ? 's' : ''}: ${gameData.today.pangrams.join(' & ')}\n    Answers: ${gameData.today.answers.filter(a => !gameData.today.pangrams.includes(a)).join(', ')}\n\nenjoy :D`);
})();