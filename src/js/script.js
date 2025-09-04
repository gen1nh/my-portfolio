// Coloque isso no seu arquivo src/js/script.js

// Carrossel 1 - Rolando para a esquerda
const swiper1 = new Swiper(".mySwiper1", {
  loop: true,
  slidesPerView: 2.4,
  speed: 5000, // Aumente para mais lento, diminua para mais rápido
  autoplay: {
    delay: 0, // Delay ZERO para não parar
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

// Carrossel 2 - Rolando para a direita (invertido)
const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  slidesPerView: 2.4,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    reverseDirection: true, // Inverte o lado
  },
});

// Carrossel 3 - Rolando para a esquerda
const swiper3 = new Swiper(".mySwiper3", {
  loop: true,
  slidesPerView: 2.4,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});