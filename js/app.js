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

// ── Cursor branco no hero ──
(function () {
  const img = new Image();
  img.src = 'assets/cursor-spray.png';
  img.onload = () => {
    const c = document.createElement('canvas');
    c.width = img.width; c.height = img.height;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const data = ctx.getImageData(0, 0, c.width, c.height);
    for (let i = 0; i < data.data.length; i += 4) {
      if (data.data[i + 3] > 10) {           // pixel visível → torna branco
        data.data[i]     = 255;
        data.data[i + 1] = 255;
        data.data[i + 2] = 255;
      }
    }
    ctx.putImageData(data, 0, 0);
    const url = c.toDataURL('image/png');
    const hero = document.getElementById('inicio');
    if (hero) hero.style.cursor = `url("${url}") 20 20, auto`;
  };
})();

// ── Botão voltar ao topo ──
const btnTopo = document.getElementById('btn-topo');
window.addEventListener('scroll', () => {
  btnTopo.classList.toggle('btn-topo--visivel', window.scrollY > 400);
}, { passive: true });
btnTopo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── Flip cards (tap para virar — funciona em mobile e desktop) ──
const flipCards = document.querySelectorAll('.flip-card');
flipCards.forEach(card => {
  card.addEventListener('click', () => {
    const jáVirado = card.classList.contains('flip-card--virado');
    flipCards.forEach(c => c.classList.remove('flip-card--virado'));
    if (!jáVirado) card.classList.add('flip-card--virado');
  });
});

// Troca subtítulo em touch
if (window.matchMedia('(pointer: coarse)').matches) {
  const sub = document.querySelector('#como-funciona .secao-subtitulo');
  if (sub) sub.textContent = 'Toque em cada etapa para saber mais.';
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

// Botões que abrem o modal — nenhum restante


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
