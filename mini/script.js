(async () => {
    let miniRequest = await fetch('/svc/crosswords/v6/puzzle/mini.json');
    let mini = await miniRequest.json();

    let chunks = Array.from({ length: Math.sqrt(mini.body[0].cells.length) }, () => []);

    mini.body[0].cells.forEach((answer, index) => chunks[index % chunks.length].push(answer));

    let board = [];
    for (let columns = 0; columns < chunks[0].length; columns++) {
        let innerArray = [];
        for (let rows = 0; rows < chunks.length; rows++) innerArray.push(chunks[rows][columns]);
        board.push(innerArray);
    };

    let answers = 'NYTIMES CROSSWORD MINI | ANSWERS\n';
    for (let row = 1; row <= board.length; row++) answers += `    Row ${row}: [ ${board[row - 1].map(a => a.answer || '◾').join(' ')} ]\n`;
    alert(answers);
})();
