import Icones from './icons.js';

const WHATSAPP = '351920529136';

const CtaFinal = {
  render() {
    return `
      <section class="cta-final" aria-labelledby="cta-titulo">
        <div class="container cta-final__inner">
          <h2 class="cta-final__titulo" id="cta-titulo">Pronto para uma limpeza impecável?</h2>
          <p class="cta-final__subtitulo">Agende agora ou fale connosco pelo WhatsApp.</p>
          <div class="cta-final__acoes">
            <a href="#agendar" class="btn btn-primario btn-lg">
              <span class="btn-icon">${Icones.calendario}</span>
              Agendar agora
            </a>
            <a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener noreferrer"
               class="btn btn-whatsapp btn-lg">
              <span class="btn-icon">${Icones.whatsapp}</span>
              WhatsApp
            </a>
          </div>
        </div>
      </section>`;
  }
};

export default CtaFinal;
