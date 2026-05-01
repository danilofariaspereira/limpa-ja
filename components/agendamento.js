import Icones from './icons.js';

const WHATSAPP = '351920529136';
const API_URL  = 'https://orkestri-api.up.railway.app';
const TENANT_ID = 'limpa-ja'; // será substituído pelo UUID real após cadastro no banco

const Agendamento = {
  render() {
    return `
      <section class="agendamento" id="agendar" aria-labelledby="agendar-titulo">
        <div class="container agendamento__inner">

          <div class="agendamento__info">
            <h2 class="agendamento__titulo" id="agendar-titulo">Agende o seu serviço</h2>
            <p class="agendamento__desc">
              Preencha o formulário e entraremos em contacto para confirmar a data e hora mais conveniente para si.
            </p>
            <div class="agendamento__contato">
              <span class="agendamento__contato-item">
                ${Icones.telefone} +351 920 529 136
              </span>
            </div>
            <a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener noreferrer"
               class="btn btn-whatsapp btn-md" style="margin-top:0.5rem; width:fit-content;">
              <span class="btn-icon">${Icones.whatsapp}</span>
              Falar pelo WhatsApp
            </a>
          </div>

          <div>
            <form class="form" id="form-agendamento" novalidate>
              <div class="form__grupo">
                <label class="form__label" for="nome">Nome completo</label>
                <input class="form__input" type="text" id="nome" name="nome"
                       placeholder="O seu nome" autocomplete="name" required>
                <span class="form__erro" id="erro-nome">Por favor, insira o seu nome.</span>
              </div>

              <div class="form__grupo">
                <label class="form__label" for="telefone">Telefone / WhatsApp</label>
                <input class="form__input" type="tel" id="telefone" name="telefone"
                       placeholder="+351 900 000 000" autocomplete="tel" required>
                <span class="form__erro" id="erro-telefone">Por favor, insira um telefone válido.</span>
              </div>

              <div class="form__grupo">
                <label class="form__label" for="servico">Serviço pretendido</label>
                <select class="form__select" id="servico" name="servico" required>
                  <option value="">Selecione um serviço</option>
                  <option value="limpeza-tapetes">Limpeza de Tapetes</option>
                  <option value="limpeza-sofas">Limpeza de Sofás</option>
                  <option value="limpeza-colchoes">Limpeza de Colchões</option>
                  <option value="impermeabilizacao">Impermeabilização</option>
                </select>
                <span class="form__erro" id="erro-servico">Por favor, selecione um serviço.</span>
              </div>

              <div class="form__grupo">
                <label class="form__label" for="mensagem">Observações (opcional)</label>
                <textarea class="form__textarea" id="mensagem" name="mensagem"
                          placeholder="Descreva detalhes do serviço, localização, etc."></textarea>
              </div>

              <div class="form__feedback" id="form-feedback" role="alert"></div>

              <button type="submit" class="btn btn-primario btn-lg form__submit" id="btn-submit">
                <span class="btn-icon">${Icones.calendario}</span>
                <span id="btn-submit-texto">Enviar pedido</span>
              </button>
            </form>
          </div>

        </div>
      </section>`;
  },

  bind() {
    const form    = document.getElementById('form-agendamento');
    const btn     = document.getElementById('btn-submit');
    const btnText = document.getElementById('btn-submit-texto');
    const feedback = document.getElementById('form-feedback');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!this._validar(form)) return;

      btn.disabled = true;
      btnText.textContent = 'A enviar...';
      feedback.className = 'form__feedback';
      feedback.textContent = '';

      const dados = {
        tenant_id: TENANT_ID,
        nome:      form.nome.value.trim(),
        telefone:  form.telefone.value.trim(),
        servico:   form.servico.value,
        mensagem:  form.mensagem.value.trim(),
      };

      try {
        const res = await fetch(`${API_URL}/agendamentos`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dados),
        });

        if (!res.ok) throw new Error();

        feedback.textContent = 'Pedido enviado! Entraremos em contacto em breve.';
        feedback.className = 'form__feedback form__feedback--sucesso';
        form.reset();
      } catch {
        feedback.textContent = 'Ocorreu um erro. Por favor, tente pelo WhatsApp.';
        feedback.className = 'form__feedback form__feedback--erro';
      } finally {
        btn.disabled = false;
        btnText.textContent = 'Enviar pedido';
      }
    });
  },

  _validar(form) {
    let valido = true;

    const campos = [
      { id: 'nome',     erro: 'erro-nome',     check: v => v.trim().length >= 2 },
      { id: 'telefone', erro: 'erro-telefone',  check: v => v.trim().length >= 8 },
      { id: 'servico',  erro: 'erro-servico',   check: v => v !== '' },
    ];

    campos.forEach(({ id, erro, check }) => {
      const input = document.getElementById(id);
      const erroEl = document.getElementById(erro);
      if (!check(input.value)) {
        erroEl.classList.add('form__erro--visivel');
        valido = false;
      } else {
        erroEl.classList.remove('form__erro--visivel');
      }
    });

    return valido;
  }
};

export default Agendamento;
