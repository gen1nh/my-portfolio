import { Footer } from "/src/components/footer.js";

document.querySelector(".main-wrapper").insertAdjacentHTML("beforeend", Footer());

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

window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  const content = document.getElementById("content");

  // inicia fade-out
  loading.classList.add("fade-out");

  // depois de 700ms, remove da tela
  setTimeout(() => {
    loading.classList.add("hidden");
    content.classList.remove("hidden");
  }, 700);
});
