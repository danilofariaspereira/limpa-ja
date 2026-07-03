const Navbar = {
  render() {
    return `
      <header class="navbar" id="navbar" role="banner">
        <div class="navbar__inner">
          <a href="#inicio" aria-label="Limpa Já">
            <img src="assets/logo-limpa-ja.png" alt="Limpa Já" class="navbar__logo" width="120" height="36">
          </a>
          <nav class="navbar__nav" aria-label="Navegação principal">
            <a href="#servicos" class="navbar__link">Serviços</a>
            <a href="#como-funciona" class="navbar__link">Como funciona</a>
            <a href="#contacto" class="navbar__link">Contacto</a>
            <a href="https://wa.me/351920529136?text=Olá%2C%20vim%20através%20do%20vosso%20site%20e%20gostaria%20de%20agendar%20um%20serviço." target="_blank" rel="noopener noreferrer" class="btn btn-primario btn-md" id="navbar-cta">Agendar</a>
          </nav>
          <button class="navbar__toggle" id="menu-toggle" aria-label="Abrir menu" aria-expanded="false">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
          </button>
        </div>
        <div class="navbar__mobile" id="menu-mobile" aria-hidden="true">
          <a href="#servicos" class="navbar__mobile-link">Serviços</a>
          <a href="#como-funciona" class="navbar__mobile-link">Como funciona</a>
          <a href="#contacto" class="navbar__mobile-link">Contacto</a>
          <a href="https://wa.me/351920529136?text=Olá%2C%20vim%20através%20do%20vosso%20site%20e%20gostaria%20de%20agendar%20um%20serviço." target="_blank" rel="noopener noreferrer" class="btn btn-primario btn-md navbar__mobile-cta" id="navbar-cta-mobile">Agendar</a>
        </div>
      </header>`;
  },

  bind() {
    // Scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('navbar--scrolled', window.scrollY > 40);
    }, { passive: true });

    // Mobile toggle
    const toggle = document.getElementById('menu-toggle');
    const menu   = document.getElementById('menu-mobile');
    const iconMenu   = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>`;
    const iconFechar = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 18L18 6M6 6l12 12"/></svg>`;

    toggle.addEventListener('click', () => {
      const aberto = menu.classList.toggle('navbar__mobile--aberto');
      toggle.setAttribute('aria-expanded', String(aberto));
      menu.setAttribute('aria-hidden', String(!aberto));
      toggle.innerHTML = aberto ? iconFechar : iconMenu;
    });

    menu.querySelectorAll('a').forEach(l => l.addEventListener('click', () => {
      menu.classList.remove('navbar__mobile--aberto');
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      toggle.innerHTML = iconMenu;
    }));
  }
};

export default Navbar;
