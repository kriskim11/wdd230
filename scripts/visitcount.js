document.addEventListener('DOMContentLoaded', () => {
    const visitCounterElement = document.getElementById('visitCounter');
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    visitCounterElement.textContent = visitCount;
});