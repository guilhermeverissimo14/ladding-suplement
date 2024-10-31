const carousel = new bootstrap.Carousel('#heroCarousel');

function changeSlide(index) {
    carousel.to(index);
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}