const refs = {
  gallery: document.querySelector('.gallery'),
};

const biggestArrayAsIFucked = [
  {
    img: '../img/pw.png',
    title: 'Легенды Меча трахнули фулку',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo, rerum nulla eligendi dignissimos laborum asperiores labore porro reiciendis voluptas aliquid. Molestiae blanditiis delectus pariatur ab ipsa doloremque soluta repellat?',
  },
  {
    img: '../img/pw1.png',
    title: 'Легенда на Мече трахнули двух масок',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo, rerum nulla eligendi dignissimos laborum asperiores labore porro reiciendis voluptas aliquid. Molestiae blanditiis delectus pariatur ab ipsa doloremque soluta repellat?',
  },
  {
    img: '../img/pw2.png',
    title: 'Фантастик против Фантастика',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo, rerum nulla eligendi dignissimos laborum asperiores labore porro reiciendis voluptas aliquid. Molestiae blanditiis delectus pariatur ab ipsa doloremque soluta repellat?',
  },
  {
    img: '../img/pw3.png',
    title: 'Керик не взлетел',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo, rerum nulla eligendi dignissimos laborum asperiores labore porro reiciendis voluptas aliquid. Molestiae blanditiis delectus pariatur ab ipsa doloremque soluta repellat?',
  },
];

function gallery(array) {
  return array
    .map(
      ({ img, title, text }) => `<li class="gallery__item">
      <p class="gallery__title">${title}</p>
    <img src=${img} alt=${text} class="gallery__image"/>
    <p class="gallery__text">${text}</p>
  </li>`
    )
    .join('');
}
refs.gallery.insertAdjacentHTML(
  'beforeend',
  gallery(biggestArrayAsIFucked)
);
