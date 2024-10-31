const carousel = new bootstrap.Carousel('#heroCarousel');

function changeSlide(index) {
    carousel.to(index);
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}


const modal = new bootstrap.Modal(document.getElementById('imageModal'));
const modalImage = document.getElementById('modalImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');


const images = ['https://acdn.mitiendanube.com/stores/004/517/888/themes/amazonas/2-img-1529067934-1724976115-5b8ba23e9af7fce8a97ccc5ee2f59d0c1724976115-480-0.webp?279779495',
    'https://acdn.mitiendanube.com/stores/004/517/888/themes/amazonas/2-img-1251702055-1724976116-9c15a420eb889c61a5784b22007609e61724976116-480-0.webp?279779495',
    'https://acdn.mitiendanube.com/stores/004/517/888/themes/amazonas/2-img-1197562273-1724976118-246bf300dbf00d148996ea380225674b1724976118-480-0.webp?279779495'];

let currentImageIndex = 0;

function showImage(index) {
    modalImage.src = images[index];
    currentImageIndex = index;
}

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);

});

function modalShow() {
    modal.show();
    showImage(0);
}


let currentTestimonialIndex = 0;

function showTestimonial(index) {
    const slider = document.getElementById("testimonialSlider");
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function prevTestimonial() {
    const testimonials = document.querySelectorAll(".testimonial");
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
}

function nextTestimonial() {
    const testimonials = document.querySelectorAll(".testimonial");
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
}

setInterval(nextTestimonial, 3000);