class Footer extends HTMLElement {
    code = `
      <footer class="footer" role="contentinfo">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <p class="mb-1">Personal portfolio.</p>
              <div class="credits">
                Sergi Sirvent
              </div>
            </div>
            <div class="col-sm-6 social text-md-end">
              <a href="contact.html">
                <span class="bi bi-envelope-fill"></span>
              </a>
              <a  href="https://www.linkedin.com/in/sergi-sirvent-sempere-a3b633229/" target="_blank">
                <span class="bi bi-linkedin"></span>
              </a>
              <a href="https://github.com/sergisirvent" target="_blank">
                <span class="bi bi-github"></span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    `

    connectedCallback() {
        this.innerHTML = this.code;
    }
}

customElements.define('footer-component', Footer);