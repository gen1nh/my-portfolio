// src/js/main.js
import { Footer } from "/src/components/footer.js";
import { Menu, initMenu } from "/src/components/menu.js";

// Inserindo menu na main-wrapper (ou no topo do body)
document.querySelector(".main-wrapper").insertAdjacentHTML("afterbegin", Menu());

// Inicializando funcionalidade do toggle
initMenu();

// Inserindo footer no final
document.querySelector(".main-wrapper").insertAdjacentHTML("beforeend", Footer());

//Swipers
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.esm.browser.min.js";

const swiper1 = new Swiper(".mySwiper1", {
  loop: true,
  slidesPerView: 5,
  speed: 5000,
  autoplay: { delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true },
  breakpoints: {
    768: { slidesPerView: 5, speed: 3000 },
    640: { slidesPerView: 4, speed: 3000 },
    390: { slidesPerView: 2.4, speed: 3000 },
  }
});

const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  slidesPerView: 5,
  speed: 5000,
  autoplay: { delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true },
  breakpoints: {
    768: { slidesPerView: 5, speed: 3000 },
    640: { slidesPerView: 4, speed: 3000 },
    390: { slidesPerView: 2.4, speed: 3000 },
  }
});

const swiper3 = new Swiper(".mySwiper3", {
  loop: true,
  slidesPerView: 5,
  speed: 5000,
  autoplay: { delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true },
  breakpoints: {
    768: { slidesPerView: 5, speed: 3000 },
    640: { slidesPerView: 4, speed: 3000 },
    390: { slidesPerView: 2.4, speed: 3000 },
  }
});