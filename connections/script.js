(() => {
    if (!location.href.includes('nytimes.com/games/connections')) return alert('Please visit the New York Times game Connections to run this script.');
    if (!confirm('Are you sure you want to see today\'s answers? There is no going back!'));
    
    let dayDifference = Math.floor((Date.now() - new Date('June 12, 2023')) / (1000 * 3600 * 24));
    let data = gameData[dayDifference].groups;
    let sortedData = Object.fromEntries(Object.entries(data).sort((a, b) => a[1].level - b[1].level));
  
    Object.entries(sortedData).forEach(group => {
        alert(`${group[1].level === 0 ? 'Yellow' : group[1].level === 1 ? 'Green' : group[1].level === 2 ? 'Blue' : 'Purple'} Category\n    Name: ${group[0]}\n    Words: ${group[1].members.join(', ')}`);
    });
})();
