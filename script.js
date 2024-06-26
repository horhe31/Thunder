document.addEventListener('DOMContentLoaded', function() {
    const testimonials = [
        { text: '"Their resilience is a source of inspiration for all of us!" - Alex Johnson' },
        { text: '"A true story of grit and success. Hats off!" - Emily Davis' },
        { text: '"Their journey shows that anything is possible with determination." - Michael Brown' },
    ];

    const loadMoreButton = document.getElementById('loadMore');
    let testimonialIndex = 0;

    loadMoreButton.addEventListener('click', function() {
        if (testimonialIndex < testimonials.length) {
            const newTestimonial = document.createElement('div');
            newTestimonial.className = 'testimonial';
            newTestimonial.innerHTML = `<p>${testimonials[testimonialIndex].text}</p>`;
            document.getElementById('testimonials').insertBefore(newTestimonial, loadMoreButton);
            testimonialIndex++;
        } else {
            loadMoreButton.disabled = true;
            loadMoreButton.innerText = 'No More Testimonials';
        }
    });

    document.getElementById('testimonial-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('testimonial-name').value;
        const message = document.getElementById('testimonial-message').value;
        const newTestimonial = document.createElement('div');
        newTestimonial.className = 'testimonial';
        newTestimonial.innerHTML = `<p>"${message}" - ${name}</p>`;
        document.getElementById('testimonials').appendChild(newTestimonial);
        this.reset();
    });

    const nav = document.getElementById('navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            nav.classList.add('nav-hidden');
        } else {
            nav.classList.remove('nav-hidden');
        }
        lastScrollY = window.scrollY;
    });

    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.like, .love').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('reacted');
        });
    });
});
