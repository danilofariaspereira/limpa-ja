import Icones from './icons.js';

const passos = [
  { icone: Icones.calendario, titulo: 'Escolha o serviço', desc: 'Selecione o serviço que precisa e preencha o formulário.' },
  { icone: Icones.relogio,    titulo: 'Confirmamos contigo', desc: 'Entramos em contacto para confirmar data e hora.' },
  { icone: Icones.check,      titulo: 'Pronto!', desc: 'A nossa equipa vai até si e faz o trabalho com excelência.' },
];

const ComoFunciona = {
  render() {
    const html = passos.map((p, i) => `
      <div class="como-passo">
        <div class="como-passo__numero">${i + 1}</div>
        <div class="como-passo__icone">${p.icone}</div>
        <h3 class="como-passo__titulo">${p.titulo}</h3>
        <p class="como-passo__desc">${p.desc}</p>
      </div>`).join('');

    return `
      <section class="como-funciona" id="como-funciona" aria-labelledby="como-titulo">
        <div class="container">
          <div class="secao-header">
            <h2 class="secao-titulo" id="como-titulo">Como funciona</h2>
            <p class="secao-subtitulo">Simples, rápido e sem complicação</p>
          </div>
          <div class="como-grid">${html}</div>
        </div>
      </section>`;
  }
};

export default ComoFunciona;
