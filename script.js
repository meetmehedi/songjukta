// ========================================
// SPLASH SCREEN TRANSITION LOGIC
// ========================================

// Wait for page to load
window.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    // Duration in milliseconds (3 seconds = 3000ms)
    const SPLASH_DURATION = 3000;

    // After splash duration, fade out splash and show main content
    setTimeout(() => {
        // Add fade-out class to splash screen
        splashScreen.classList.add('fade-out');

        // Show main content
        mainContent.classList.add('show');

        // Remove splash screen from DOM after animation completes
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 800); // Match the CSS transition duration

    }, SPLASH_DURATION);
});

// ========================================
// ORIGINAL VALENTINE'S DAY SCRIPT
// ========================================

// Configure Date

// NOTE: Months are 0-indexed in JavaScript (0 = January, 1 = February, etc.)
const startDate = new Date(2021, 0, 1); // defaulting to Jan 1, 2021 - User can adjust

// Update Counter Function
function updateCounter() {
    const now = new Date();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

// Start Counter
setInterval(updateCounter, 1000);
updateCounter(); // Run immediately

// Petal Animation
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    // Randomize starting position
    petal.style.left = Math.random() * 100 + 'vw';

    // Randomize animation duration
    const duration = Math.random() * 5 + 5; // between 5 and 10 seconds
    petal.style.animationDuration = duration + 's';

    // Randomize size
    const size = Math.random() * 10 + 10; // between 10px and 20px
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';

    // Randomize color shade
    const colors = ['#ffccd5', '#ffb3c1', '#ff8fa3', '#fff0f3'];
    petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    document.getElementById('petals-container').appendChild(petal);

    // Remove petal after animation to keep memory usage low
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

// Create petals periodically
setInterval(createPetal, 300);

// Add click effect for more petals
document.addEventListener('click', (e) => {
    for (let i = 0; i < 5; i++) {
        setTimeout(createPetal, i * 100);
    }
});
