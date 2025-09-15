const menuToggleIcon = document.getElementById('menu-toggle-icon');
const menuSair = document.getElementById('menu-sair');

let isOpen = false;

menuToggleIcon.addEventListener('click', () => {
  menuSair.classList.toggle('hidden');

  isOpen = !isOpen;

  if (isOpen) {
    menuToggleIcon.src = "/src/assets/close1.svg"; // X
  } else {
    menuToggleIcon.src = "/src/assets/menu.svg"; // hambúrguer
  }
});
