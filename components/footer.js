const Footer = {
  render() {
    const ano = new Date().getFullYear();
    return `
      <footer class="footer" role="contentinfo">
        <div class="container footer__inner">
          <p class="footer__copy">&copy; ${ano} Limpa Já. Todos os direitos reservados.</p>
          <p class="footer__powered">Powered by <a href="/" class="footer__marca">Orkestri</a></p>
        </div>
      </footer>`;
  }
};

export default Footer;
