import Icones from './icons.js';

const servicos = [
  {
    icone: Icones.tapete,
    nome: 'Limpeza de Tapetes',
    desc: 'Remoção profunda de sujidade, ácaros e manchas. Secagem rápida e resultado impecável.',
  },
  {
    icone: Icones.sofa,
    nome: 'Limpeza de Sofás',
    desc: 'Higienização completa de todos os tipos de tecido. Seu sofá como novo.',
  },
  {
    icone: Icones.colchao,
    nome: 'Limpeza de Colchões',
    desc: 'Eliminação de ácaros, bactérias e manchas para um sono mais saudável.',
  },
  {
    icone: Icones.impermeabilizacao,
    nome: 'Impermeabilização',
    desc: 'Proteção duradoura contra líquidos e manchas em tecidos e superfícies.',
  },
];

const Servicos = {
  render() {
    const cards = servicos.map(s => `
      <article class="servico-card">
        <div class="servico-card__icone">${s.icone}</div>
        <div class="servico-card__corpo">
          <h3 class="servico-card__nome">${s.nome}</h3>
          <p class="servico-card__desc">${s.desc}</p>
        </div>
      </article>`).join('');

    return `
      <section class="servicos" id="servicos" aria-labelledby="servicos-titulo">
        <div class="container">
          <div class="secao-header">
            <h2 class="secao-titulo" id="servicos-titulo">Nossos Serviços</h2>
            <p class="secao-subtitulo">Soluções completas de limpeza para a sua casa</p>
          </div>
          <div class="servicos-grid">${cards}</div>
        </div>
      </section>`;
  }
};

export default Servicos;
