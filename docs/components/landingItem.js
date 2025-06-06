class LandingItem extends HTMLElement {
    id = this.getAttribute('id');
    title = this.getAttribute('title');
    language = this.getAttribute('language');
    image = this.getAttribute('image');
    filter = this.getAttribute('filter');

    code = `
        <div class="item col-sm-6 col-md-4 col-lg-4 mb-4 ${this.filter}">
            <a href="work.html?id=${this.id}" class="item-wrap fancybox">
                <div class="work-info">
                    <h3>${this.title}</h3>
                    <span>${this.language}</span>
                </div>
                <img class="img-fluid" src="assets/img/${this.image}">
            </a>
        </div>
    `

    connectedCallback() {
        this.innerHTML = this.code;
    }
}

customElements.define('landing-item', LandingItem);