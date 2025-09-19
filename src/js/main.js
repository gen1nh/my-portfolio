const swiper = new Swiper(".mySwiper1", {
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
  autoplay: { delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true, reverseDirection: true },
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