(async () => {
    if (!location.href.includes('nytimes.com/games/connections')) return alert('Please visit the New York Times game Wordle to run this script.');
    if (!confirm('Are you sure you want to see today\'s answer? There is no going back!'));

    let levelColors = {
        0: 'Yellow',
        1: 'Green',
        2: 'Blue',
        3: 'Purple'
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
        alert(`${levelColors[index]} Category\n    Name: ${category.title}\n    Cards: ${category.cards.map(c => c.content).join(', ')}`);
    });
})();
