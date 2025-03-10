//функция переключения табов
const makeCodeUniversal = (
  tabItemsQuery,
  formItemsQuery,
  tabClassName = "active"
) => {
  const tabItems = Array.from(document.querySelectorAll(tabItemsQuery));
  const formItems = Array.from(document.querySelectorAll(formItemsQuery));

  const clearActiveTabs = (element) => {
    element.find((item) => item.classList.remove(tabClassName));
  };

  const setActiveTab = (element, index) => {
    element[index].classList.toggle(tabClassName);
  };

  const chekTab = (item, index) => {
    item.addEventListener("click", () => {
      clearActiveTabs(tabItems);
      clearActiveTabs(formItems);

      setActiveTab(tabItems, index);
      setActiveTab(formItems, index);
    });
  };
  tabItems.forEach(chekTab);
};

makeCodeUniversal(".cheat-enemy__centr-tab", ".cheat-enemy__centr-page");
makeCodeUniversal(".pay-mobile__tab", ".pay-mobile__tabs-pages");

//аккордеон
const pageItemBtn = document.querySelectorAll(".page-item");
const pageItemAll = document.querySelectorAll(".page-item-inner");

if (pageItemBtn) {
  pageItemBtn.forEach((item) => {
    item.addEventListener("click", (ev) => {
      ev.preventDefault();
      const pageItem = item.querySelector(".page-item-inner");
      const pageItemArrow = item.querySelector(".arrow-img");
      pageItemArrow.classList.toggle("active");
      if (pageItem.classList.contains("active")) {
        pageItem.classList.remove("active");
      } else {
        pageItemAll.forEach((elem) => {
          elem.classList.remove("active");
        });
        pageItem.classList.add("active");
      }
    });
  });
}

//выбор дней + цена
const formCheckDays = document.querySelectorAll(".form-page-check");
const formCheckDaysCheck = document.querySelectorAll(".form-check");
const formAmount = document.querySelector(".form-page-amount span");

if (formCheckDays) {
  formCheckDays.forEach((item) => {
    item.addEventListener("click", () => {
      formCheckDaysCheck.forEach((elem) => {
        elem.classList.remove("active");
      });
      const itemCheck = item.querySelector(".form-check");
      itemCheck.classList.add("active");
    });
  });
}

//делаем кнопку купить кликабельной,если согласен
function toggleElements(
  agreementCheckboxSelector,
  buttonContainerSelector,
  buttonSelector
) {
  const agreementCheckbox = document.querySelector(agreementCheckboxSelector);
  const buttonContainer = document.querySelector(buttonContainerSelector);
  const button = document.querySelector(buttonSelector);

  if (agreementCheckbox) {
    agreementCheckbox.addEventListener("click", () => {
      agreementCheckbox.classList.toggle("active");
      if (buttonContainer) buttonContainer.classList.toggle("active");
      if (button) button.classList.toggle("active");
    });
  } else {
    console.warn(
      `Элемент с селектором "${agreementCheckboxSelector}" не найден.`
    );
  }
}

toggleElements(
  ".cheat-enemy__agreement span",
  ".form-page__btn-wrapp",
  ".form-page__btn"
);

toggleElements(
  ".pay-mobile__agreement span",
  ".form-page__btn-wrapp",
  ".form-page__btn"
);

//смотреть все карточки игр
const catalogButton = document.querySelector(".catalog__button");
const catalogGalleryHidden = document.querySelector(".catalog__gallery-hidden");
const catalogButtonHidden = document.querySelector(".catalog__button-hidden");

if (catalogButton) {
  catalogButton.addEventListener("click", () => {
    catalogGalleryHidden.classList.add("active");
    catalogButton.classList.add("active");
    catalogButtonHidden.classList.add("active");
  });
}

if (catalogButtonHidden) {
  catalogButtonHidden.addEventListener("click", () => {
    catalogGalleryHidden.classList.remove("active");
    catalogButton.classList.remove("active");
    catalogButtonHidden.classList.remove("active");
    const element = document.getElementById("catalogGallery");
    element.scrollIntoView({ behavior: "smooth" });
  });
}

//проскроливание картинок
const scrollContainer = document.querySelector(".cheat-enemy__scroll");

if (scrollContainer) {
  scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollBy({
      left: event.deltaY,
      behavior: "smooth",
    });
  });
}

//кнопка скачивание файла
const btnDownload = document.getElementById("downloadBtn");

if (btnDownload) {
  btnDownload.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = " http://yadi.sk/d/Z5910Rq-EUgpOg"; // Укажите путь к файлу
    link.download = "filename.ext"; // Укажите имя файла, которое будет предложено для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

//ховер эффект при наведении на кнопки в блоке promo
const promoButton = document.querySelector(".promo__button");
const promoPurchase = document.querySelector(".promo__purchase");

if (promoButton) {
  promoButton.addEventListener("mouseover", function () {
    promoPurchase.classList.add("active");
  });

  promoButton.addEventListener("mouseout", function () {
    promoPurchase.classList.remove("active");
  });
}

if (promoPurchase) {
  promoPurchase.addEventListener("mouseover", function () {
    promoButton.classList.add("active");
  });

  promoPurchase.addEventListener("mouseout", function () {
    promoButton.classList.remove("active");
  });
}

//статус / посмотреть еще
const statusGride = document.querySelector(".cheat-status__gride-more");
const hiddenGrid = document.querySelector(".hidden-grid");

if (statusGride) {
  statusGride.addEventListener("click", () => {
    hiddenGrid.classList.toggle("active");
    const element = document.getElementById("statusGride");
    element.scrollIntoView({ behavior: "smooth" });
  });
}
//мобильное меню
const burger = document.querySelector(".header__burger");
const page = document.querySelector(".page ");
const menuMobile = document.querySelector(".menu-mobile");
const menuMobileItem = document.querySelector(".menu-mobile-item");
const menuMobileList = document.querySelector(".menu-mobile-list");
const menuMobileAssortment = document.querySelector(".menu-mobile-assortment");
const headerLogo = document.querySelector(".header__logo");

if (burger) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menuMobile.classList.toggle("active");
    page.classList.toggle("active");
  });
}

if (menuMobileItem) {
  menuMobileItem.addEventListener("click", () => {
    menuMobileList.classList.add("active");
    menuMobileAssortment.classList.remove("active");
    headerLogo.classList.add("active");
  });
}

if (headerLogo)
  headerLogo.addEventListener("click", () => {
    menuMobileList.classList.remove("active");
    menuMobileAssortment.classList.add("active");
    headerLogo.classList.remove("active");
  });

//наведение на кнопку товары по 400
const catalogCards = document.querySelectorAll(".catalog__card");

if (catalogCards) {
  catalogCards.forEach((item) => {
    const originalTexts = Array.from(
      item.querySelectorAll(".catalog__card-button")
    ).map((elem) => elem.textContent);

    item.addEventListener("mouseover", () => {
      const cardButtons = item.querySelectorAll(".catalog__card-button");
      cardButtons.forEach((elem) => {
        elem.textContent = "Подробнее";
      });
    });

    item.addEventListener("mouseout", () => {
      const cardButtons = item.querySelectorAll(".catalog__card-button");
      cardButtons.forEach((elem, index) => {
        elem.textContent = originalTexts[index];
      });
    });
  });
}

//выбор дней и появление цены в оплате
const checkDays = document.querySelectorAll(".pay-button");
const amountBody = document.querySelectorAll(".form-page-amount span");

if (checkDays) {
  checkDays.forEach((item) => {
    item.addEventListener("click", () => {
      console.log(item, amountBody);
      const dataPrise = item.getAttribute("data-prise");
      amountBody.forEach((elem) => {
        elem.textContent = dataPrise + " " + "₽";
      });
    });
  });
}

//статус читов выпадающий список
const cheatStatusDropBtn = document.querySelector(".cheat-status__drop-btn");
const cheatStatusDropPage = document.querySelector(".cheat-status__drop-page");

if (cheatStatusDropBtn) {
  cheatStatusDropBtn.addEventListener("click", () => {
    cheatStatusDropPage.classList.toggle("active");
  });
}
//открытие попапа
const popupImage = document.querySelector(".popup-image");
const cheatImageMini = document.querySelectorAll(
  ".cheat-enemy__left-image-mini"
);
const popupImagePic = document.querySelector(".popup-image__pic");
const popupImageClose = document.querySelector(".popup-image__close");

if (cheatImageMini) {
  cheatImageMini.forEach((item) => {
    item.addEventListener("click", () => {
      popupImage.classList.add("active");
      popupImagePic.src = item.src;
    });
  });
}

if (popupImageClose) {
  popupImageClose.addEventListener("click", () => {
    popupImage.classList.remove("active");
  });
}
//кнопка скачивание файла
const btnDownload1 = document.getElementById("downloadBtn1");

if (btnDownload1) {
  btnDownload1.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = " https://directx.vixappy.com/?yclid=4211516051321782271"; // Укажите путь к файлу
    link.download = "filename.ext"; // Укажите имя файла, которое будет предложено для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
//кнопка скачивание файла
const btnDownload2 = document.getElementById("downloadBtn2");

if (btnDownload2) {
  btnDownload2.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href =
      " https://support.microsoft.com/ru-ru/topic/автономный-установщик-microsoft-net-framework-4-7-1-для-windows-2a7d0d5e-92f2-b12d-aed4-4f5d14c8ef0c"; // Укажите путь к файлу
    link.download = "filename.ext"; // Укажите имя файла, которое будет предложено для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
//кнопка скачивание файла
const btnDownload3 = document.getElementById("downloadBtn3");

if (btnDownload3) {
  btnDownload3.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = " https://www.nvidia.com/ru-ru/"; // Укажите путь к файлу
    link.download = "filename.ext"; // Укажите имя файла, которое будет предложено для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
//кнопка скачивание файла
const btnDownload4 = document.getElementById("downloadBtn4");

if (btnDownload4) {
  btnDownload4.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = " https://www.amd.com/en/support/download/drivers.html"; // Укажите путь к файлу
    link.download = "filename.ext"; // Укажите имя файла, которое будет предложено для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
//кнопка скачивание файла
const btnDownload5 = document.getElementById("downloadBtn5");

if (btnDownload5) {
  btnDownload5.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = " https://driverpack.org/driver-search/"; // Укажите путь к файлу
    link.download = "filename.ext"; // Укажите имя файла, которое будет предложено для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
//кнопка скачивание файла
const btnDownload6 = document.getElementById("downloadBtn6");

if (btnDownload6) {
  btnDownload6.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href =
      " https://support.microsoft.com/ru-ru/windows/отключение-антивирусной-защиты-в-защитнике-windows-на-панели-безопасность-windows-99e6004f-c54c-8509-773c-a4d776b77960"; // Укажите путь к файлу
    link.download = "filename.ext"; // Укажите имя файла, которое будет предложено для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
//кнопка скачивание файла
const btnDownload7 = document.getElementById("downloadBtn7");

if (btnDownload7) {
  btnDownload7.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href =
      "https://support.microsoft.com/ru-ru/windows/защита-с-помощью-панели-безопасность-windows-2ae0363d-0ada-c064-8b56-6a39afb6a963"; // Укажите путь к файлу
    link.download = "filename.ext"; // Укажите имя файла, которое будет предложено для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
//кнопка скачивание файла
const btnDownload8 = document.getElementById("downloadBtn8");

if (btnDownload8) {
  btnDownload8.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "https://remontka.pro/uac-disable-windows-10/"; // Укажите путь к файлу
    link.download = "filename.ext"; // Укажите имя файла, которое будет предложено для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
//кнопка скачивание файла
const btnDownload9 = document.getElementById("downloadBtn9");

if (btnDownload9) {
  btnDownload9.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href =
      "https://gamesqa.ru/kompyutery/secure-boot-kak-otklyuchit-zashhitu-ili-nastroit-pravilno-v-uefi-12565/"; // Укажите путь к файлу
    link.download = "filename.ext"; // Укажите имя файла, которое будет предложено для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
//кнопка скачивание файла
const btnDownload10 = document.getElementById("downloadBtn10");

if (btnDownload10) {
  btnDownload10.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href =
      "https://translated.turbopages.org/proxy_u/en-ru.ru.be0fe3b3-6739d11a-258715f2-74722d776562/https/www.easeus.com/partition-master/enable-disable-uefi-mode.html"; // Укажите путь к файлу
    link.download = "filename.ext"; // Укажите имя файла, которое будет предложено для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
//кнопка скачивание файла
const btnDownload11 = document.getElementById("downloadBtn11");

if (btnDownload11) {
  btnDownload11.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href =
      "https://support.microsoft.com/ru-ru/windows/включение-и-отключение-брандмауэра-microsoft-defender-ec0844f7-aebd-0583-67fe-601ecf5d774f"; // Укажите путь к файлу
    link.download = "filename.ext"; // Укажите имя файла, которое будет предложено для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
//кнопка скачивание файла
const btnDownload12 = document.getElementById("downloadBtn12");

if (btnDownload12) {
  btnDownload12.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "https://winrar.browsers-bazze.ru/?yclid=14919934222226161663"; // Укажите путь к файлу
    link.download = "filename.ext"; // Укажите имя файла, которое будет предложено для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
//кнопка скачивание файла
const btnDownload13 = document.getElementById("downloadBtn13");

if (btnDownload13) {
  btnDownload13.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "https://app.prntscr.com/ru/"; // Укажите путь к файлу
    link.download = "filename.ext"; // Укажите имя файла, которое будет предложено для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
//кнопка скачивание файла
const btnDownload14 = document.getElementById("downloadBtn14");

if (btnDownload14) {
  btnDownload14.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "https://www.teamviewer.com/ru-cis/download/windows/"; // Укажите путь к файлу
    link.download = "filename.ext"; // Укажите имя файла, которое будет предложено для скачивания
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

//логика тыканья
const mainImg = document.querySelector(".pay-mobile__img-main img");
const miniImgs = document.querySelectorAll(".pay-mobile__img-mini");

if (miniImgs) {
  miniImgs.forEach((item) => {
    item.addEventListener("click", () => {
      mainImg.src = item.src;
    });
  });
}
