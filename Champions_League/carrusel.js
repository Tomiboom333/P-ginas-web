const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide() {
  const slideWidth = images[0].clientWidth;
  slides.style.transform = `translateX(${-index * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length;
  showSlide();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  showSlide();
});

window.addEventListener('resize', showSlide); // Ajusta en caso de cambio de tamaño