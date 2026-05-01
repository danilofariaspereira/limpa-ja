const passos = [
  { num: '01', titulo: 'Escolha o serviço', desc: 'Selecione o serviço que precisa e clique em agendar. Simples e rápido.' },
  { num: '02', titulo: 'Confirmamos consigo', desc: 'Entramos em contacto para confirmar a data e hora mais conveniente.' },
  { num: '03', titulo: 'Trabalho impecável', desc: 'A nossa equipa vai até si e entrega um resultado que vai surpreender.' },
];

const ComoFunciona = {
  render() {
    const cards = passos.map(p => `
      <div class="flip-card" tabindex="0" aria-label="${p.titulo}: ${p.desc}">
        <div class="flip-card__inner">
          <div class="flip-card__frente">
            <div class="flip-card__num">${p.num}</div>
            <h3 class="flip-card__titulo-f">${p.titulo}</h3>
          </div>
          <div class="flip-card__verso">
            <h3 class="flip-card__titulo-v">${p.titulo}</h3>
            <p class="flip-card__desc">${p.desc}</p>
          </div>
        </div>
      </div>`).join('');

    return `
      <section class="como-funciona" id="como-funciona" aria-labelledby="como-titulo">
        <div class="container">
          <div class="secao-header">
            <span class="secao-tag">Como funciona</span>
            <h2 class="secao-titulo" id="como-titulo">Simples, rápido e sem complicação</h2>
            <p class="secao-subtitulo">Passe o rato sobre cada etapa para saber mais.</p>
          </div>
          <div class="como-grid">${cards}</div>
        </div>
      </section>`;
  }
};

export default ComoFunciona;
