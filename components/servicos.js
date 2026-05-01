const WHATSAPP = '351920529136';

const servicos = [
  {
    icone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M3 15h18M7 5v14M17 5v14"/></svg>`,
    nome: 'Limpeza de Tapetes',
    desc: 'Remoção profunda de sujidade, ácaros e manchas. Secagem rápida e resultado impecável.',
  },
  {
    icone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10V7a2 2 0 012-2h14a2 2 0 012 2v3"/><path d="M1 14a2 2 0 002 2h1v2h2v-2h12v2h2v-2h1a2 2 0 002-2v-2a2 2 0 00-2-2H3a2 2 0 00-2 2v2z"/></svg>`,
    nome: 'Limpeza de Sofás',
    desc: 'Higienização completa de todos os tipos de tecido. O seu sofá como novo.',
  },
  {
    icone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M2 12h20M6 7v10M18 7v10"/></svg>`,
    nome: 'Limpeza de Colchões',
    desc: 'Eliminação de ácaros, bactérias e manchas para um sono mais saudável.',
  },
  {
    icone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>`,
    nome: 'Impermeabilização',
    desc: 'Proteção duradoura contra líquidos e manchas em tecidos e superfícies.',
  },
];

const Servicos = {
  render() {
    const cards = servicos.map(s => {
      const msg = encodeURIComponent(`Olá, vim através do vosso site e gostaria de saber mais informações sobre o serviço de ${s.nome}.`);
      return `
        <article class="servico-card" tabindex="0" role="button" aria-label="Saber mais sobre ${s.nome}"
          data-wa="https://wa.me/${WHATSAPP}?text=${msg}">
          <div class="servico-card__icone">${s.icone}</div>
          <h3 class="servico-card__nome">${s.nome}</h3>
          <p class="servico-card__desc">${s.desc}</p>
          <span class="servico-card__cta">
            Saber mais
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
          </span>
        </article>`;
    }).join('');

    return `
      <section class="servicos" id="servicos" aria-labelledby="servicos-titulo">
        <div class="container">
          <div class="secao-header">
            <span class="secao-tag">O que fazemos</span>
            <h2 class="secao-titulo" id="servicos-titulo">Serviços de limpeza profissional</h2>
            <p class="secao-subtitulo">Soluções completas para manter a sua casa limpa, saudável e com aspeto renovado.</p>
          </div>
          <div class="servicos-grid">${cards}</div>
        </div>
      </section>`;
  },

  bind() {
    document.querySelectorAll('.servico-card').forEach(card => {
      const abrir = () => window.open(card.dataset.wa, '_blank', 'noopener,noreferrer');
      card.addEventListener('click', abrir);
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(); } });
    });
  }
};

export default Servicos;
