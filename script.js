// Initialize AOS Animate On Scroll Library
AOS.init({
    duration: 1000,
    once: true
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
});

// Portfolio Filtering
const filterButtons = document.querySelectorAll('[data-filter]');
const portfolioItems = document.querySelectorAll('#portfolio-grid > [data-category]'); // Select direct children columns

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(button => button.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                // Re-trigger AOS animation
                item.classList.remove('aos-animate');
                setTimeout(() => item.classList.add('aos-animate'), 50);
            } else {
                item.style.display = 'none';
            }
        });
        
        // Refresh AOS to calculate positions
        setTimeout(() => AOS.refresh(), 100);
    });
});

// Bootstrap Form Validation
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation');
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', event => {
            if (!contactForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault(); // Prevent actual submission for demo
                alert('Message sent successfully! (Demo)');
                contactForm.reset();
                contactForm.classList.remove('was-validated');
                return;
            }
            contactForm.classList.add('was-validated');
        }, false);
    }
})()
