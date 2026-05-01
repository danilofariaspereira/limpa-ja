import Navbar       from '../components/navbar.js';
import Hero         from '../components/hero.js';
import Servicos     from '../components/servicos.js';
import ComoFunciona from '../components/como-funciona.js';
import CtaFinal     from '../components/cta-final.js';
import Footer       from '../components/footer.js';

const API_URL   = 'https://orkestri-api.up.railway.app';
const TENANT_ID = 'limpa-ja';

// Monta o HTML
document.getElementById('app').innerHTML = [
  Navbar.render(),
  Hero.render(),
  Servicos.render(),
  ComoFunciona.render(),
  CtaFinal.render(),
  Footer.render(),
].join('');

// Inicializa comportamentos
Navbar.bind();
Hero.bindCanvas();
Servicos.bind();

// ── Cursor personalizado ──
const cursorEl = document.getElementById('cursor');
if (cursorEl && window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', e => {
    cursorEl.style.left = e.clientX + 'px';
    cursorEl.style.top  = e.clientY + 'px';
  }, { passive: true });
  document.addEventListener('mouseleave', () => { cursorEl.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursorEl.style.opacity = '1'; });
} else if (cursorEl) {
  cursorEl.style.display = 'none';
}

// ── Modal ──
const overlay  = document.getElementById('modal-overlay');
const fecharBtn = document.getElementById('modal-fechar');

function abrirModal() {
  overlay.classList.add('modal-overlay--aberto');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.getElementById('nome').focus();
}

function fecharModal() {
  overlay.classList.remove('modal-overlay--aberto');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Botões que abrem o modal
['hero-cta', 'navbar-cta', 'navbar-cta-mobile', 'cta-final-btn'].forEach(id => {
  document.getElementById(id)?.addEventListener('click', abrirModal);
});

fecharBtn.addEventListener('click', fecharModal);
overlay.addEventListener('click', e => { if (e.target === overlay) fecharModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharModal(); });

// ── Formulário ──
const form     = document.getElementById('form-agendamento');
const btnSubmit = document.getElementById('btn-submit');
const btnTexto  = document.getElementById('btn-submit-texto');
const feedback  = document.getElementById('form-feedback');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!validar()) return;

  btnSubmit.disabled = true;
  btnTexto.textContent = 'A enviar...';
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
    feedback.className = 'form__feedback form__feedback--ok';
    form.reset();
  } catch {
    feedback.textContent = 'Ocorreu um erro. Por favor, tente pelo WhatsApp.';
    feedback.className = 'form__feedback form__feedback--err';
  } finally {
    btnSubmit.disabled = false;
    btnTexto.textContent = 'Enviar pedido';
  }
});

function validar() {
  let ok = true;
  [
    { id: 'nome',     erro: 'erro-nome',     fn: v => v.trim().length >= 2 },
    { id: 'telefone', erro: 'erro-telefone', fn: v => v.trim().length >= 8 },
    { id: 'servico',  erro: 'erro-servico',  fn: v => v !== '' },
  ].forEach(({ id, erro, fn }) => {
    const el = document.getElementById(id);
    const er = document.getElementById(erro);
    if (!fn(el.value)) { er.classList.add('form__erro--vis'); ok = false; }
    else er.classList.remove('form__erro--vis');
  });
  return ok;
}
