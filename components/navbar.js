import Icones from './icons.js';

const Navbar = {
  render() {
    return `
      <header class="navbar" role="banner">
        <div class="container navbar__inner">
          <a href="#inicio" class="navbar__brand" aria-label="Limpa Já">
            <img src="assets/logo-limpa-ja.png" alt="Limpa Já" class="navbar__logo" width="140" height="38">
          </a>
          <nav class="navbar__nav" aria-label="Navegação principal">
            <a href="#servicos" class="navbar__link">Serviços</a>
            <a href="#como-funciona" class="navbar__link">Como funciona</a>
            <a href="#agendar" class="btn btn-primario btn-md">Agendar</a>
          </nav>
          <button class="navbar__toggle" id="menu-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="menu-mobile">
            ${Icones.menu}
          </button>
        </div>
        <div class="navbar__mobile" id="menu-mobile" aria-hidden="true">
          <a href="#servicos" class="navbar__mobile-link">Serviços</a>
          <a href="#como-funciona" class="navbar__mobile-link">Como funciona</a>
          <a href="#agendar" class="btn btn-primario btn-md navbar__mobile-cta">Agendar</a>
        </div>
      </header>`;
  },

  bind() {
    const toggle = document.getElementById('menu-toggle');
    const menu   = document.getElementById('menu-mobile');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      const aberto = menu.classList.toggle('navbar__mobile--aberto');
      toggle.setAttribute('aria-expanded', String(aberto));
      menu.setAttribute('aria-hidden', String(!aberto));
      toggle.innerHTML = aberto ? Icones.fechar : Icones.menu;
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('navbar__mobile--aberto');
        toggle.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        toggle.innerHTML = Icones.menu;
      });
    });
  }
};

export default Navbar;
