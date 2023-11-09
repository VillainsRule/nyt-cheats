(() => {
    if (!location.href.includes('nytimes.com/puzzles/spelling-bee')) return alert('Please visit the New York Times game Spelling Bee to run this script.');
    if (!confirm('Are you sure you want to see today\'s answers? There is no going back!'));
     alert(`NYTIMES SPELLING BEE | ANSWERS\n    Pangram${gameData.today.pangrams.length > 1 ? 's' : ''}: ${gameData.today.pangrams.join(' & ')}\n    Answers: ${gameData.today.answers.join(', ')}\n\nenjoy :D`);
})();
