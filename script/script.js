function closeModal() {
    const modal = document.getElementById("customModal");
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) backdrop.remove();
}

document.addEventListener("DOMContentLoaded", () => {
    const leadForm = document.getElementById("leadCaptureForm");
    const productPage = document.getElementById("product-page");
    const leadFormSection = document.getElementById("lead-form");
    const welcomeMessage = document.getElementById("welcomeMessage");

    const phoneInput = document.getElementById("phone");
    phoneInput.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);
        e.target.value = value
            .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
            .replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    leadForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (!validateEmail(email)) {
            Toastify({
                text: "Por favor, insira um e-mail válido.",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                style: {
                    background: "#ef4444",
                },
            }).showToast();

            return;
        }

        welcomeMessage.textContent = name.length > 10
            ? `Bem-vindo, ${name.slice(0, 10)}...!`
            : `Bem-vindo, ${name}!`;
        leadFormSection.style.display = "none";
        productPage.style.display = "block";


        Toastify({
            text: "Cadastro realizado com sucesso!",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "#28a745",
            },
        }).showToast();

        closeModal();
    });
});

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



let countdownTime = 600; // 10 minutos em segundos

function startCountdown() {
    const countdownDisplay = document.getElementById("countdownTimer");
    const interval = setInterval(() => {
        const minutes = Math.floor(countdownTime / 60);
        const seconds = countdownTime % 60;
        countdownDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (countdownTime <= 0) {
            clearInterval(interval);
            countdownDisplay.textContent = "00:00";
        } else {
            countdownTime--;
        }
    }, 1000);
}

startCountdown();
