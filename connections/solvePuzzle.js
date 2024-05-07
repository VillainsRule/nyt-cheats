(() => {
    let dat = JSON.parse(localStorage.getItem('nyt-connections-beta'));
    dat.gameStarted = true;
    dat.savedBoard.forEach(d => d.forEach(s => s.solved = true));
    localStorage.setItem('nyt-connections-beta', JSON.stringify(dat));
    location.reload();
})();