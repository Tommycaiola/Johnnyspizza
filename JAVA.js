let currentSlide = 0;
const slides = document.querySelectorAll('.birra-slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0; // Torna alla prima slide
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Torna all'ultima slide
    } else {
        currentSlide = index;
    }

    // Calcola il trasloco per mostrare una sola slide alla volta
    const slideWidth = -currentSlide * 100;
    document.querySelector('.carosello-slides').style.transform = `translateX(${slideWidth}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
