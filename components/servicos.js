const WHATSAPP = '351920529136';

const servicos = [
  {
    icone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M3 15h18M7 5v14M17 5v14"/></svg>`,
    nome: 'Limpeza de Tapetes',
    desc: 'Remoção profunda de sujidade, ácaros e manchas.',
    img: 'https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=800',
    detalhes: [
      'Remoção de ácaros, fungos e bactérias',
      'Eliminação de manchas difíceis',
      'Secagem rápida com equipamento profissional',
      'Resultado visível desde a primeira limpeza',
      'Adequado para todos os tipos de tapete',
    ],
  },
  {
    icone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10V7a2 2 0 012-2h14a2 2 0 012 2v3"/><path d="M1 14a2 2 0 002 2h1v2h2v-2h12v2h2v-2h1a2 2 0 002-2v-2a2 2 0 00-2-2H3a2 2 0 00-2 2v2z"/></svg>`,
    nome: 'Limpeza de Sofás',
    desc: 'Higienização completa de todos os tipos de tecido.',
    img: 'https://images.pexels.com/photos/6195924/pexels-photo-6195924.jpeg?auto=compress&cs=tinysrgb&w=800',
    detalhes: [
      'Higienização profunda de tecidos e couro',
      'Remoção de manchas, gordura e odores',
      'Tratamento anti-ácaros e antibacteriano',
      'Preservação da cor e textura original',
      'Compatível com todos os tipos de sofá',
    ],
  },
  {
    icone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M2 12h20M6 7v10M18 7v10"/></svg>`,
    nome: 'Limpeza de Colchões',
    desc: 'Eliminação de ácaros e bactérias para um sono saudável.',
    img: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=800',
    detalhes: [
      'Eliminação de ácaros e microrganismos',
      'Remoção de manchas e odores',
      'Higienização com vapor a alta temperatura',
      'Melhora a qualidade do sono',
      'Recomendado a cada 6 meses',
    ],
  },
  {
    icone: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>`,
    nome: 'Impermeabilização',
    desc: 'Proteção duradoura contra líquidos e manchas.',
    img: 'https://images.pexels.com/photos/4107130/pexels-photo-4107130.jpeg?auto=compress&cs=tinysrgb&w=800',
    detalhes: [
      'Proteção contra líquidos e manchas',
      'Tratamento de longa duração',
      'Aplicável em sofás, tapetes e colchões',
      'Não altera a textura nem a cor do tecido',
      'Ideal após limpeza profissional',
    ],
  },
];

const checkIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12.75l6 6 9-13.5"/></svg>`;
const fecharIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18L18 6M6 6l12 12"/></svg>`;

const Servicos = {
  render() {
    const cards = servicos.map((s, i) => `
      <article class="servico-card" tabindex="0" role="button"
        aria-label="Ver detalhes de ${s.nome}" data-index="${i}">
        <div class="servico-card__icone">${s.icone}</div>
        <h3 class="servico-card__nome">${s.nome}</h3>
        <p class="servico-card__desc">${s.desc}</p>
        <span class="servico-card__cta">
          Ver detalhes
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
        </span>
      </article>`).join('');

    // Modal de detalhe do serviço
    const modal = `
      <div id="modal-servico-overlay" class="modal-servico-overlay" role="dialog" aria-modal="true" aria-hidden="true">
        <div class="modal-servico" id="modal-servico">
          <button class="modal-servico__fechar" id="modal-servico-fechar" aria-label="Fechar">${fecharIcon}</button>
          <img class="modal-servico__img" id="modal-servico-img" src="" alt="" loading="lazy">
          <div class="modal-servico__corpo">
            <h3 class="modal-servico__nome" id="modal-servico-nome"></h3>
            <ul class="modal-servico__lista" id="modal-servico-lista"></ul>
            <a class="btn btn-wa btn-lg modal-servico__cta" id="modal-servico-wa" href="#" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Agendar via WhatsApp
            </a>
          </div>
        </div>
      </div>`;

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
      </section>
      ${modal}`;
  },

  bind() {
    const overlay  = document.getElementById('modal-servico-overlay');
    const fechar   = document.getElementById('modal-servico-fechar');
    const img      = document.getElementById('modal-servico-img');
    const nome     = document.getElementById('modal-servico-nome');
    const lista    = document.getElementById('modal-servico-lista');
    const waBtn    = document.getElementById('modal-servico-wa');

    const abrir = (i) => {
      const s = servicos[i];
      img.src = s.img; img.alt = s.nome;
      nome.textContent = s.nome;
      lista.innerHTML = s.detalhes.map(d => `<li class="modal-servico__item">${checkIcon} ${d}</li>`).join('');
      const msg = encodeURIComponent(`Olá, vim através do vosso site e gostaria de saber mais informações sobre o serviço de ${s.nome}.`);
      waBtn.href = `https://wa.me/${WHATSAPP}?text=${msg}`;
      overlay.classList.add('modal-servico-overlay--aberto');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const fecharModal = () => {
      overlay.classList.remove('modal-servico-overlay--aberto');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    document.querySelectorAll('.servico-card').forEach(card => {
      card.addEventListener('click', () => abrir(Number(card.dataset.index)));
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(Number(card.dataset.index)); } });
    });

    fechar.addEventListener('click', fecharModal);
    overlay.addEventListener('click', e => { if (e.target === overlay) fecharModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharModal(); });
  }
};

export default Servicos;
