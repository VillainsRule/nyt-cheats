(async () => {
    if (!location.href.includes('nytimes.com/crosswords/game/mini')) return alert('Please visit the New York Times crossword Mini to run this script.');
    if (!confirm('Are you sure you want to see today\'s answers? There is no going back!'));

    let miniRequest = await fetch('/svc/crosswords/v6/puzzle/mini.json');
    let mini = await miniRequest.json();

    const chunks = Array.from({
        length: Math.sqrt(mini.body[0].cells.length)
    }, (_) => []);

    mini.body[0].cells.forEach((value, index) => chunks[index%chunks.length].push(value));

    const board = [];
    for (let i = 0; i < chunks[0].length; i++) {
        const innerArray = [];
        for (let j = 0; j < chunks.length; j++) innerArray.push(chunks[j][i]);
        board.push(innerArray);
    };

    for (let i = 1; i <= board.length; i++) alert(`Row ${i}: [ ${board[i - 1].map(a => a.answer || '◾').join(' ')} ]`);
})();
