document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.gallery-slide');
    const dotsContainer = document.querySelector('.gallery-dots');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    const totalSlides = slides.length;
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('dot')
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll('.dot');
    function updateClasses() {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }
    function goToSlide(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1; 
        } else if (index >= totalSlides) {
            currentIndex = 0; 
        } else {
            currentIndex = index;
        }
        updateClasses();
    }
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    document.addEventListener('keydown', (e) => {
        const gallery = document.getElementById('main-gallery');
        const rect = gallery.getBoundingClientRect();
        const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight) || 
                          (rect.top < window.innerHeight && rect.bottom > 0);
        if (isVisible) {
            if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1);
            if (e.key === 'ArrowRight') goToSlide(currentIndex + 1);
        }
    });
});