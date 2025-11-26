let index = 0;
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[n].classList.add("active");
}

next.onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
};

prev.onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
};

// Auto-slide cada 4 segundos
setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 4000);
