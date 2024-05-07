(async () => {
    const type = (key, autoUppercase) => {
        const element = document.querySelector('.Board-module_boardContainer__TBHNL');

        const event = new KeyboardEvent('keydown', {
            key: autoUppercase ? key.toUpperCase() : key,
            bubbles: true
        });

        element.dispatchEvent(event);
    };

    let date = new Date(Date.now()).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'America/New_York'
    }).replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');

    let answer = await fetch(`/svc/wordle/v2/${date}.json`);
    (await answer.json()).solution.split('').forEach(type);
    type('Enter', false);
})();