// const initGallery = [
//   {
//     image: "../../images/card-1.png",
//     price: "Товары от 285 руб",
//     link: "valorant.html",
//   },
//   {
//     image: "../../images/card-2.png",
//     price: "Товары от 327 руб",
//     link: "tarkov.html",
//   },
//   {
//     image: "../../images/card-3.png",
//     price: "Товары от 265 руб",
//     link: "warface.html",
//   },
//   {
//     image: "../../images/card-4.png",
//     price: "Товары от 212 руб",
//     link: "rust.html",
//   },
//   {
//     image: "../../icons/Frame 3.png",
//     price: "Товары от 424 руб",
//     link: "battle-teams.html",
//   },
//   {
//     image: "../../images/card-6.png",
//     price: "Товары от 40 руб",
//     link: "dota-2.html",
//   },
//   {
//     image: "../../images/card-7.png",
//     price: "Товары от 413 руб",
//     link: "fortnight.html",
//   },
//   {
//     image: "../../images/card-8.png",
//     price: "Товары от 255 руб",
//     link: "dayz.html",
//   },
//   {
//     image: "../../images//2/AB.png",
//     price: "Товары от 412 руб",
//     link: "arena.html",
//   },
//   {
//     image: "../../images/2/APEX.png",
//     price: "Товары от 201 руб",
//     link: "apex.html",
//   },
//   {
//     image: "../../images/2/CALIBER.png",
//     price: "Товары от 530 руб",
//     link: "caliber.html",
//   },
//   {
//     image: "../../images/2/CD-W.png",
//     price: "Товары от 211 руб",
//     link: "warzone.html",
//   },
//   {
//     image: "../../images/2/CS2.png",
//     price: "Товары от 400 руб",
//     link: "counter-strike-2.html",
//   },
//   {
//     image: "../../images/2/GTA.png",
//     price: "Товары от 400 руб",
//     link: "gta.html",
//   },
//   {
//     image: "../../images/2/PUBG.png",
//     price: "Товары от 212 руб",
//     link: "pubg.html",
//   },
//   {
//     image: "../../images/2/SPOOFER.png",
//     price: "Товары от 400 руб",
//     link: "spoofer.html",
//   },
//   {
//     image: "../../images/2/SQUAD.png",
//     price: "Товары от 400 руб",
//     link: "squad.html",
//   },
//   {
//     image: "../../images/Group 81.png",
//     price: "Товары от 53 руб",
//     link: "pubg-mobile.html",
//   },
// ];

// //инициализация карточек каталог
// function setEventListeners(htmlElement) {}
// const itemTemplate = document.getElementById("gallery").content;
// const elements = document.querySelector(".catalog__gallery");

// function createCard(item) {
//   const htmlElement = itemTemplate.cloneNode(true);
//   const cheatImage = htmlElement.querySelector(".catalog__card-img");
//   const cheatPrice = htmlElement.querySelector(".catalog__card-button");
//   const cheatLink = htmlElement.querySelector(".catalog__card-button");

//   // Проверяем наличие значения поля в объекте item перед присваиванием его элементу

//   if (item.image) {
//     cheatImage.src = item.image;
//   }
//   if (item.price) {
//     cheatPrice.textContent = item.price;
//   }
//   if (item.link) {
//     cheatLink.href = item.link;
//   }
//   setEventListeners(htmlElement);

//   return htmlElement;
// }

// initGallery.forEach(function (item) {
//   const elementCreate = createCard(item);
//   elements.append(elementCreate);
// });
const initGallery = [
  {
    image: "../../images/card-1.png",
    price: "Товары от 285 руб",
    link: "valorant.html",
  },
  {
    image: "../../images/card-2.png",
    price: "Товары от 327 руб",
    link: "tarkov.html",
  },
  {
    image: "../../images/card-3.png",
    price: "Товары от 265 руб",
    link: "warface.html",
  },
  {
    image: "../../images/card-4.png",
    price: "Товары от 212 руб",
    link: "rust.html",
  },
  {
    image: "../../icons/Frame 3.png",
    price: "Товары от 424 руб",
    link: "battle-teams.html",
  },
  {
    image: "../../images/card-6.png",
    price: "Товары от 40 руб",
    link: "dota-2.html",
  },
  {
    image: "../../images/card-7.png",
    price: "Товары от 413 руб",
    link: "fortnight.html",
  },
  {
    image: "../../images/card-8.png",
    price: "Товары от 255 руб",
    link: "dayz.html",
  },
  {
    image: "../../images//2/AB.png",
    price: "Товары от 412 руб",
    link: "arena.html",
  },
  {
    image: "../../images/2/APEX.png",
    price: "Товары от 201 руб",
    link: "apex.html",
  },
  {
    image: "../../images/2/CALIBER.png",
    price: "Товары от 530 руб",
    link: "caliber.html",
  },
  {
    image: "../../images/2/CD-W.png",
    price: "Товары от 211 руб",
    link: "warzone.html",
  },
  {
    image: "../../images/2/CS2.png",
    price: "Товары от 400 руб",
    link: "counter-strike-2.html",
  },
  {
    image: "../../images/2/GTA.png",
    price: "Товары от 400 руб",
    link: "gta.html",
  },
  {
    image: "../../images/2/PUBG.png",
    price: "Товары от 212 руб",
    link: "pubg.html",
  },
  {
    image: "../../images/2/SPOOFER.png",
    price: "Товары от 400 руб",
    link: "spoofer.html",
  },
  {
    image: "../../images/2/SQUAD.png",
    price: "Товары от 400 руб",
    link: "squad.html",
  },
  {
    image: "../../images/Group 81.png",
    price: "Товары от 53 руб",
    link: "pubg-mobile.html",
  },
];

const initGalleryMobile = [
  {
    image: "../../images/card-1.jpg",
    price: "Товары от 285 руб",
    link: "valorant.html",
  },
  {
    image: "../../images/card-2.jpg",
    price: "Товары от 327 руб",
    link: "tarkov.html",
  },
  {
    image: "../../images/card-3.jpg",
    price: "Товары от 265 руб",
    link: "warface.html",
  },
  {
    image: "../../images/Frame 3.png",
    price: "Товары от 212 руб",
    link: "rust.html",
  },
  {
    image: "../../images/card-5.jpg",
    price: "Товары от 424 руб",
    link: "battle-teams.html",
  },
  {
    image: "../../images/card-6.jpg",
    price: "Товары от 40 руб",
    link: "dota-2.html",
  },
  {
    image: "../../images/card-7.jpg",
    price: "Товары от 413 руб",
    link: "fortnight.html",
  },
  {
    image: "../../images/card-8.jpg",
    price: "Товары от 255 руб",
    link: "dayz.html",
  },
  {
    image: "../../images/card-9.jpg",
    price: "Товары от 412 руб",
    link: "arena.html",
  },
  {
    image: "../../images/card-10.jpg",
    price: "Товары от 201 руб",
    link: "apex.html",
  },
  {
    image: "../../images/card-11.jpg",
    price: "Товары от 530 руб",
    link: "caliber.html",
  },
  {
    image: "../../images/card-12.jpg",
    price: "Товары от 211 руб",
    link: "warzone.html",
  },
  {
    image: "../../images/card-13.jpg",
    price: "Товары от 400 руб",
    link: "counter-strike-2.html",
  },
  {
    image: "../../images/card-14.jpg",
    price: "Товары от 400 руб",
    link: "gta.html",
  },
  {
    image: "../../images/game_box-9.png",
    price: "Товары от 212 руб",
    link: "pubg.html",
  },
  {
    image: "../../images/card-15.jpg",
    price: "Товары от 400 руб",
    link: "spoofer.html",
  },
  {
    image: "../../images/game_box-10.png",
    price: "Товары от 400 руб",
    link: "squad.html",
  },
  {
    image: "../../images/Group 202.png",
    price: "Товары от 53 руб",
    link: "pubg-mobile.html",
  },
];

// Функция для рендеринга галереи
function renderGallery(data) {
  elements.innerHTML = "";

  data.forEach(function (item) {
    const elementCreate = createCard(item);
    elements.append(elementCreate);
  });
}

// Функция для определения, какой массив использовать в зависимости от ширины экрана
function chooseGalleryData() {
  if (window.innerWidth <= 767) {
    return initGalleryMobile;
  } else {
    return initGallery;
  }
}

// Функция для инициализации галереи
function initializeGallery() {
  const data = chooseGalleryData();
  renderGallery(data);
}

//инициализация карточек каталог
function setEventListeners(htmlElement) {}
const itemTemplate = document.getElementById("gallery").content;
const elements = document.querySelector(".catalog__gallery");

function createCard(item) {
  const htmlElement = itemTemplate.cloneNode(true);
  const cheatImage = htmlElement.querySelector(".catalog__card-img");
  const cheatPrice = htmlElement.querySelector(".catalog__card-button");
  const cheatLink = htmlElement.querySelector(".catalog__card-button");

  // Проверяем наличие значения поля в объекте item перед присваиванием его элементу

  if (item.image) {
    cheatImage.src = item.image;
  }
  if (item.price) {
    cheatPrice.textContent = item.price;
  }
  if (item.link) {
    cheatLink.href = item.link;
  }
  setEventListeners(htmlElement);

  return htmlElement;
}

// Инициализируем галерею при загрузке страницы
initializeGallery();

// Добавляем слушатель события resize, чтобы перерендерить галерею при изменении размера окна
window.addEventListener("resize", initializeGallery);
