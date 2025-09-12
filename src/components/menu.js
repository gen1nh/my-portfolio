// src/components/menu.js
export function Menu() {
  return `
    <div class="flex flex-row justify-end md:hidden">
      <img id="menu-toggle-icon" class="w-[56px] cursor-pointer" src="/src/assets/link.svg" alt="menu-hamburguer" />
    </div>

    <div id="menu-sair" class="hidden md:block md:py-[24px]">
      <div class="self-center">
        <ul class="flex flex-col items-center gap-2 md:flex-row md:justify-end text-center">
          <li class="btn-links"><a href="/index.html">Home</a></li>
          <li class="btn-links"><a href="/src/html/projects.html">Projects</a></li>
          <li class="btn-links"><a href="/src/html/about-me.html">About-me</a></li>
          <img class="w-[24px]" src="/src/assets/menu/dark.svg" alt="Dark mode icon">
        </ul>
      </div>
    </div>
  `;
}

// Função para ativar o toggle do menu
export function initMenu() {
  const menuToggleIcon = document.getElementById('menu-toggle-icon');
  const menuSair = document.getElementById('menu-sair');

  if (!menuToggleIcon || !menuSair) return; // segurança

  let isOpen = false;

  menuToggleIcon.addEventListener('click', () => {
    menuSair.classList.toggle('hidden');

    isOpen = !isOpen;

    menuToggleIcon.src = isOpen
      ? "/src/assets/close.svg"  // X
      : "/src/assets/link.svg";  // hambúrguer
  });
}
