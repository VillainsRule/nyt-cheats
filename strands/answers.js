(async () => {
    if (!location.href.includes('nytimes.com/games/strands')) return alert('Please visit the New York Times game Strands to run this script.');
    if (!confirm('Are you sure you want to see today\'s answer? There is no going back!'));

    let date = new Date(Date.now()).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'America/New_York'
    }).replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');

    let answer = await fetch(`/games-assets/strands/${date}.json`);
    answer = await answer.json();
    
    alert(`Strands [BETA] by the New York Times\n    Answers: ${Object.keys(answer.themeCoords).map(s => s.toLowerCase()).join(', ')}\n\nenjoy :D`);
})();
