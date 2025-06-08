const slides = document.querySelector('.slides');
const imagenes = document.querySelectorAll('.slides img');
const anterior = document.querySelector('.prev');
const siguiente = document.querySelector('.next');

let index = 0;

function mostrarSlide() {
  const slideWidth = imagenes[0].clientWidth;
  slides.style.transform = `translateX(${-index * slideWidth}px)`;
}

siguiente.addEventListener('click', () => {
  index = (index + 1) % imagenes.length;
  mostrarSlide();
});

anterior.addEventListener('click', () => {
  index = (index - 1 + imagenes.length) % imagenes.length;
  mostrarSlide();
});
