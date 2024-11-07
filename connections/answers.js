(async () => {
    if (!location.href.includes('nytimes.com/games/connections')) return alert('Please visit the New York Times game Wordle to run this script.');

    let levelColors = {
        0: 'yellow',
        1: 'green',
        2: 'blue',
        3: 'purple'
    };

    let date = new Date(Date.now()).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'America/New_York'
    }).replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');

    let answers = await fetch(`/svc/connections/v2/${date}.json`);
    answers = await answers.json();
    answers.categories.forEach((category, index) => {
        alert(`${levelColors[index]} category\n    name: ${category.title}\n    words: ${category.cards.map(c => c.content).join(', ')}`);
    });
})();