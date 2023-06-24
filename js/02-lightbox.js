import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery') // Отримуємо доступ до тегу ul через class="gallery"



function createGallery(arr) { // Функція переберає масив galleryItems та повертає масив з тегами 
   return arr.map((item) => 
        `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`).join('');   
}

galleryList.innerHTML = createGallery(galleryItems); // Добавляємо теги в li в тег ul

new SimpleLightbox('.gallery a', { // Запускаємо підключенну бібліотеку SimpleLightbox 
    captionsData: 'alt', // Налаштовуємо шлях для отримання підпису для картинки
    captionsDelay: 250, // Встановлюємо час затримки для появи підпису  250 мс
});