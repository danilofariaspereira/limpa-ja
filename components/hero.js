import Icones from './icons.js';

const Hero = {
  render() {
    return `
      <section class="hero" id="inicio" aria-labelledby="hero-titulo">
        <div class="hero__bg" aria-hidden="true"></div>
        <div class="container hero__content">
          <img src="assets/logo-limpa-ja.png" alt="Limpa Já" class="hero__logo" width="180" height="60">
          <h1 class="hero__titulo" id="hero-titulo">
            Limpeza profissional<br><span>que transforma</span>
          </h1>
          <p class="hero__subtitulo">
            Tapetes, sofás, colchões e impermeabilização com qualidade garantida. Agende online em segundos.
          </p>
          <div class="hero__acoes">
            <a href="#agendar" class="btn btn-primario btn-lg">
              <span class="btn-icon">${Icones.calendario}</span>
              Agendar agora
            </a>
            <a href="#servicos" class="btn btn-outline btn-lg">
              Ver serviços
              <span class="btn-icon">${Icones.seta}</span>
            </a>
          </div>
        </div>
      </section>`;
  }
};

export default Hero;
