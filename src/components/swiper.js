// Inicialização do Swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    speed: 600,
    coverflowEffect: {
        rotate: 50,
        stretch: 1,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
});

// --- CORRIGE O COVERFLOW SE O CONTAINER ESTIVER ESCONDIDO ---
const content = document.getElementById('content');
if (content.classList.contains('hidden')) {
    // espera o fade-in ou transição acabar
    content.addEventListener('transitionend', () => {
        swiper.update(); // recalcula o coverflow
    });
} else {
    swiper.update(); // se já estiver visível
}

// --- NAVEGAÇÃO CUSTOMIZADA ---
const navIcons = document.querySelectorAll('#custom-nav .nav-box');

// Atualiza opacidade dos ícones
function updateNavIcons(activeIndex) {
    navIcons.forEach((icon, index) => {
        icon.classList.toggle('opacity-50', index !== activeIndex);
    });
}

// Bloqueio para evitar cliques enquanto o Swiper está animando
let isAnimating = false;

// Evento de clique
navIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        if (isAnimating) return; // ignora cliques durante animação

        const index = parseInt(icon.getAttribute('data-index'));
        isAnimating = true;

        // Muda de slide usando slideToLoop
        swiper.slideToLoop(index);

        // Libera após a animação
        setTimeout(() => {
            isAnimating = false;
        }, swiper.params.speed); // mesmo tempo da transição
    });
});

// Atualiza ícones quando o slide muda
swiper.on('slideChange', function () {
    updateNavIcons(swiper.realIndex);
});

// Estado inicial
updateNavIcons(swiper.realIndex);
