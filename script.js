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

    // Smooth scroll for navigation
    const navLinks = document.querySelectorAll('nav a');
    navlinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
</script>
