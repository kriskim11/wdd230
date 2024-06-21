document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;





document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('#hamburger');
    const navLinks = document.querySelector('#nav-links');
    const modeButton = document.querySelector('#mode');
    const main = document.querySelector('main');


    // Dark Mode Toggle
    modeButton.addEventListener('click', () => {
        if (modeButton.textContent.includes('🌙')) {
            document.body.style.background = '#303030';
            document.body.style.color = '#E0E0E0';
            modeButton.textContent = '🌞';
        } else {
            document.body.style.background = '#FFFFFF';
            document.body.style.color = '#212121';
            modeButton.textContent = '🌙';
        }
    });
});
