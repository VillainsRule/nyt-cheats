(() => {
    let pangrams = gameData.today.pangrams;
    let answers = gameData.today.answers;

    alert(`pangram${pangrams.length > 1 ? 's' : ''}: ${pangrams.join(' & ')}\nother answers: ${answers.filter(a => !pangrams.includes(a)).join(', ')}\n\nenjoy :D`);
})();