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