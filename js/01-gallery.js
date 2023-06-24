import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryList = document.querySelector('.gallery'); // Отримуємо доступ до тегу ul через class="gallery"

galleryList.addEventListener('click', handlerClick)// Добавляємо прослуховувач подій на тег 

function createGallery(arr) { // Функція переберає масив galleryItems та повертає масив з тегами ul нашої галереї 
   return arr.map((item) => 
        `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`).join('');   
}

galleryList.innerHTML = createGallery(galleryItems); // Добавляємо теги в li в тег ul




function handlerClick(evt) { // Функція перевіряє область кліку на картинку та запускає бібліотеку
    evt.preventDefault(); // Скидуємо поведінку браузера за замовчуванням 
    if (evt.target.classList.value !== 'gallery__image') { // Якщо клік відбувся не на картинку пропускаємо  
        return;
    }
  const instance = basicLightbox.create( //Задаємо налаштування для перегляду картинки в її оригінальному розмірі 
    `<img src="${evt.target.dataset.source}" width="800" height="600">`,      
  );

  //Запускаємо бібліотеку basicLightbox під час запуску вішаємо прослуховувач подій на клавіатуру викликаємо функцію onEscClose
  instance.show(document.addEventListener('keydown', onEscClose)); 

// Функція просслуховує клавіатуру та перевіряє. В разі натискання клавіші escape викликає метод close бібліотеки 
  function onEscClose(evt) { 
    if (evt.key.toLocaleLowerCase() === 'escape') { // Перевіряємо чи натиснута клавіша escape
      instance.close(document.removeEventListener('keydown', onEscClose)); // Запускаємо метод close() та видаляємо прослуховувач 
  }
}
};






