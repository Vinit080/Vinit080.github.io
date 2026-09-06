document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect for Hero Section
    const texts = [
        "Software Developer.",
        "UI/UX Enthusiast.",
        "Problem Solver."
    ];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    let isDeleting = false;
    
    const typingElement = document.getElementById("typing-text");

    function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];

        if (isDeleting) {
            letter = currentText.slice(0, --index);
        } else {
            letter = currentText.slice(0, ++index);
        }

        typingElement.textContent = letter;

        let typeSpeed = 100;

        if (isDeleting) {
            typeSpeed /= 2;
        }

        if (!isDeleting && letter.length === currentText.length) {
            typeSpeed = 2000; // Pause at the end
            isDeleting = true;
        } else if (isDeleting && letter.length === 0) {
            isDeleting = false;
            count++;
            typeSpeed = 500; // Pause before next word
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing effect
    type();

    // Scroll Animation (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-scroll');
    fadeElements.forEach(el => observer.observe(el));
});
