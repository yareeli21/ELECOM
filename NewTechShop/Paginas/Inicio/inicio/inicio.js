// Selección de elementos
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const gallery = document.querySelector('.fotos');
const images = document.querySelectorAll('.fotos img');

const currentImage = document.getElementById('current-image');
const totalImages = document.getElementById('total-images');
totalImages.textContent = images.length;

let index = 0;
const imageWidth = 600; // Actualizado a 600px

// Mover a la derecha
rightArrow.addEventListener('click', () => {
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0; // Reiniciar al principio
    }
    updateGallery();
});

// Mover a la izquierda
leftArrow.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = images.length - 1; // Ir al final
    }
    updateGallery();
});

// Actualizar la posición de las imágenes
function updateGallery() {
    const offset = -index * imageWidth; // Desplazar según el índice
    gallery.style.transform = `translateX(${offset}px)`;
    currentImage.textContent = index + 1; // Actualizar el número de imagen
}
