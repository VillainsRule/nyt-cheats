(async () => {
    if (!location.href.includes('nytimes.com/crosswords/game/mini')) return alert('Please visit the New York Times crossword Mini to run this script.');
    if (!confirm('Are you sure you want to see today\'s answer? There is no going back!'));

    let miniRequest = await fetch('/svc/crosswords/v6/puzzle/mini.json');
    let mini = await miniRequest.json();

    const chunks = Array.from({
        length: Math.sqrt(mini.body[0].cells.length)
    }, () => []);

    mini.body[0].cells.forEach((answer, index) => chunks[index % chunks.length].push(answer));

    const board = [];
    for (let columns = 0; columns < chunks[0].length; columns++) {
        const innerArray = [];
        for (let rows = 0; rows < chunks.length; rows++) innerArray.push(chunks[rows][columns]);
        board.push(innerArray);
    };

    let answers = 'NYTIMES CROSSWORD MINI | ANSWERS\n';
    for (let row = 1; row <= board.length; row++) answers += `    Row ${row}: [ ${board[row - 1].map(a => a.answer || '◾').join(' ')} ]\n`;
    alert(answers);
})();
