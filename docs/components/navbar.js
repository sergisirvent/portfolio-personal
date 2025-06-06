class Navbar extends HTMLElement {

    isActivePage = (page) => this.getAttribute('page') === page ? 'active' : '';

    code = `
          <nav class="navbar navbar-light custom-navbar container">
            <div class="d-flex justify-content-between align-items-center w-100">
              <a class="navbar-brand" href="index.html">Sergi Sirvent.</a>
              <!-- Burger -->
              <a href="#" class="burger d-flex d-md-none" data-bs-toggle="collapse" data-bs-target="#main-navbar">
                <span></span>
              </a>
              
              <!-- Desktop nav -->
              <div id="desktop-navigation" class="d-none d-md-flex gap-5">
                <a class="fs-5 text-black ${this.isActivePage('home')}    " href="index.html"  >Home</a>
                <a class="fs-5 text-black ${this.isActivePage('about me')}" href="about.html"  >About Me</a>
                <a class="fs-5 text-black ${this.isActivePage('contact')} " href="contact.html">Contact</a>
            </div>
          </nav>
          
          <div class="collapse navbar-collapse custom-navmenu d-md-none" id="main-navbar">
            <div class="container py-2 py-md-5">
              <div class="row align-items-start">
                <div class="col-md-2">
                  <ul class="custom-menu">
                    <li class="${this.isActivePage('home')}"><a href="index.html">Home</a></li>
                    <li class="${this.isActivePage('about me')}"><a href="about.html">About Me</a></li>
                    <li class="${this.isActivePage('contact')}"><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    `

    connectedCallback() {
        this.innerHTML = this.code;
    }
}

customElements.define('navbar-component', Navbar);