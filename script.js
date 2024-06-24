// script.js

// Agregar evento de click a la imagen de Pogacar
const pogacarImage = document.querySelector('img[src="pogacar-giro.jpg"]');
pogacarImage.addEventListener('click', () => {
  alert('¡Tadej Pogacar, el rey del Giro de Italia!');
});

// Agregar efecto de hover a los títulos de sección
const sectionTitles = document.querySelectorAll('section h2');
sectionTitles.forEach((title) => {
  title.addEventListener('mouseover', () => {
    title.style.color = '#00698f';
  });
  title.addEventListener('mouseout', () => {
    title.style.color = '#222';
  });
});
