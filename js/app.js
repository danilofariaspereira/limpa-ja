/**
 * App — Landing Limpa Já
 * Monta todos os componentes e inicializa comportamentos
 */
import Navbar       from '../components/navbar.js';
import Hero         from '../components/hero.js';
import Servicos     from '../components/servicos.js';
import ComoFunciona from '../components/como-funciona.js';
import Agendamento  from '../components/agendamento.js';
import CtaFinal     from '../components/cta-final.js';
import Footer       from '../components/footer.js';

const app = document.getElementById('app');

app.innerHTML = [
  Navbar.render(),
  Hero.render(),
  Servicos.render(),
  ComoFunciona.render(),
  Agendamento.render(),
  CtaFinal.render(),
  Footer.render(),
].join('');

// Inicializar comportamentos interativos
Navbar.bind();
Agendamento.bind();
