console.log("JavaScript is linked and running!");

const progress = document.getElementById('Progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update(); 
});

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update(); 
});

function update() {
    // Update circle classes
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // Update progress bar width
    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    // Enable/disable buttons
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}


update();
