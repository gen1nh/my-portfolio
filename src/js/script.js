var swiper = new Swiper(".mySwiper", {
  loop: true,
  // Defina um valor base para telas menores
  slidesPerView: 2.6, 
  spaceBetween: 12,
  
  breakpoints: {
    // A partir de 390px
    390: {
      slidesPerView: 2.6, // Mantém o que você já tinha
      spaceBetween: 12,
    },
    // A partir de 640px
    640: {
      slidesPerView: 4, // Exemplo: 4 slides visíveis
      spaceBetween: 20,
    },
    // A partir de 768px
    768: {
      slidesPerView: 5, // Exemplo: 5 slides visíveis
      spaceBetween: 40,
    },
    // A partir de 1024px
    1024: {
      slidesPerView: 6, // Exemplo: 6 slides visíveis
      spaceBetween: 50,
    },
  },
});