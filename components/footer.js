const Footer = {
  render() {
    const ano = new Date().getFullYear();
    const msgDanilo = encodeURIComponent('Olá, Danilo, tudo bem? Vim através do site Limpa Já e gostaria de saber mais informações sobre o seu serviço.');
    return `
      <footer class="footer" role="contentinfo">
        <div class="container footer__inner">
          <img src="assets/logo-limpa-ja.png" alt="Limpa Já" class="footer__logo" width="100" height="30">
          <p class="footer__copy">&copy; ${ano} Limpa Já. Todos os direitos reservados.</p>
          <p class="footer__criado">
            Criado por <a href="https://wa.me/5521993350228?text=${msgDanilo}" target="_blank" rel="noopener noreferrer">Danilo Farias</a>
          </p>
        </div>
      </footer>`;
  }
};

export default Footer;
