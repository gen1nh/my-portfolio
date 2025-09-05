const menuToggleIcon = document.getElementById('menu-toggle-icon');
const menuSair = document.getElementById('menu-sair');

let isOpen = false;

menuToggleIcon.addEventListener('click', () => {

  menuSair.classList.toggle('hidden');


  isOpen = !isOpen;

  if (isOpen) {
    menuToggleIcon.src = "src/assets/close.svg"; // X
  } else {
    menuToggleIcon.src = "src/assets/link.svg"; // hambúrguer
  }
});