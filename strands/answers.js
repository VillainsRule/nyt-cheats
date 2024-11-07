(async () => {
    let date = new Date(Date.now()).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'America/New_York'
    }).replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');

    let answer = await fetch(`/svc/strands/v2/${date}.json`);
    answer = await answer.json();

    alert(`answers: ${Object.keys(answer.themeCoords).map(s => s.toLowerCase()).join(', ')}\n\nenjoy :D`);
})();