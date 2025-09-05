// Coloque isso no seu arquivo src/js/script.js

// Carrossel 1 - Rolando para a esquerda
const swiper1 = new Swiper(".mySwiper1", {
  loop: true,
  slidesPerView: 5,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  // Adicionando breakpoints
  breakpoints: {
    // Quando a largura da tela for 768px ou maior
    768: {
      slidesPerView: 5,
      speed: 3000,
    },
    // Quando a largura da tela for 480px ou maior
    640: {
      slidesPerView: 4,
      speed: 3000,
    },
    // Quando a largura da tela for 320px ou maior (celular)
    390: {
      slidesPerView: 2.4,
      speed: 3000,
    },
  }
});

// Carrossel 2 - Rolando para a direita (invertido)
const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  slidesPerView: 5,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    reverseDirection: true,
  },
  // Adicionando breakpoints
  breakpoints: {
    // Quando a largura da tela for 768px ou maior
    768: {
      slidesPerView: 5,
      speed: 3000,
    },
    // Quando a largura da tela for 480px ou maior
    640: {
      slidesPerView: 4,
      speed: 3000,
    },
    // Quando a largura da tela for 320px ou maior (celular)
    390: {
      slidesPerView: 2.4,
      speed: 3000,
    },
  }
});

// Carrossel 3 - Rolando para a esquerda
const swiper3 = new Swiper(".mySwiper3", {
  loop: true,
  slidesPerView: 5,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  // Adicionando breakpoints
  breakpoints: {
    // Quando a largura da tela for 768px ou maior
    768: {
      slidesPerView: 5,
      speed: 3000,
    },
    // Quando a largura da tela for 480px ou maior
    640: {
      slidesPerView: 4,
      speed: 3000,
    },
    // Quando a largura da tela for 320px ou maior (celular)
    390: {
      slidesPerView: 2.4,
      speed: 3000,
    },
  }
});