// Wishlist functionality
function toggleWishlist(event) {
    event.preventDefault();
    const btn = event.target;
    
    if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        btn.textContent = '🤍';
    } else {
        btn.classList.add('active');
        btn.textContent = '❤️';
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.8s ease-in-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .card, .testimonial-card').forEach(el => {
    observer.observe(el);
});
