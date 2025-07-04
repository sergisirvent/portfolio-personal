class Work extends HTMLElement {
    static get observedAttributes() {
        return ['work'];
    }

    constructor() {
        super();
        this.work = null;
    }

    head = (work) => `
        <div class="container">
            <div class="row mb-4 align-items-center">
                <div class="col-md-6" data-aos="fade-up">
                    <h2>${work?.title}</h2>
                    <p>${work?.description}</p>
                </div>
            </div>
        </div>
    `
    contribution = (texts) => `
        <h4 class="h4 mb-3">My main contribution:</h4>
        <ul class="list-unstyled list-line mb-5">
            ${texts.map(text => `<li>${text}</li>`).join('\n')}
        </ul>
    `;
    videoBtn = (links) => (links?.videoBtnLabel)
        ? `<p><a class="readmore" href="#videoYoutubeSM">${links.videoBtnLabel}</a></p>`
        : '';

    downloadBtn = (links) => links?.download
        ? `<p><a href="${links.download}" class="readmore" target="_blank" download>Download the project</a></p>`
        : '';

    playTheGameButton = (links) => links?.playTheGame
        ? `<p><a href="${links.playTheGame}" class="readmore" target="_blank">Play the game</a></p>`
        : '';

    demonstration = (links) => links?.demonstration
        ? `<p><a href="${links.demonstration}" class="readmore" target="_blank">Video tour</a></p>`
        : '';

    embedYoutubeVideo = (links) =>
  (links?.videoYoutubeEmbedLink && links?.videoSectionTitle)
    ? ` <section id="videoYoutubeSM" style="text-align: center;">
        <h2>${links.videoSectionTitle}</h2>
        <div style="
          width: 100%;
          max-width: 720px;           /* Ancho deseado */
          aspect-ratio: 3 / 2;        /* Mantiene proporción 3:2 (1080x720) */
          margin: 2rem auto;
          position: relative;
        ">
          <iframe src="${links.videoYoutubeEmbedLink}" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen
                  style="
                    width: 100%;
                    height: 100%;
                    border: 0;
                    position: absolute;
                    top: 0;
                    left: 0;
                  ">
          </iframe>
        </div>
      </section>`
    : '';

    section = ({title, paragraphs, image}, index, isLast) => `
        <div class="d-flex flex-column align-items-center w-100 mb-5 mt-3 pt-2 pb-5">
            <div class="d-flex
                        align-items-center  
                        justify-content-xxl-between 
                        px-4
                        flex-column
                        ${index % 2 === 0 ? 'flex-xxl-row' : 'flex-xxl-row-reverse'}"
                 style="max-width: 1400px;"
            >
                <div class="d-inline-flex px-4 ml-4 justify-content-center">
                    <img style="border: 2px solid white; width: 100%;" src="assets/gif/${image}" alt="GIF">
                </div>
                
                <div class="d-flex justify-content-center flex-column text-left px-4 mt-5 mt-xxl-0 parrafs">
                    <h3>${title}</h3>
                    ${paragraphs.map(p => `<p style="word-wrap: break-word;">${p}</p>`).join('')}
                </div>
            </div>
            
            ${!isLast ? `<span class="border-bottom border-white w-50 opacity-50 mt-5"></span>` : ''}
        </div>
    `

    sections = sections =>
        sections.map((section, index) => {
            const isLast = index === sections.length - 1;
            return this.section(section, index, isLast)
        }).join('');

    code = () => {
        const sections = this.work?.sections || [];
        const body = this.work?.body || {};
        const ps = body.content || [];
        const contribution = body?.contribution || [];
        const links = body.links;
        const hasSections = sections.length > 0;

        return `
        <main id="main">
            <section class="section">
                ${this.head(this.work?.head)}
                <div class="site-section pb-0">
                    <div class="container">
                        <div class="row align-items-stretch">
                            <div class="col-md-5" data-aos="fade-up">
                                <img src="assets/img/${body.image}" alt="Image" class="img-fluid">
                            </div>
                            <div class="col-md-7 ml-auto" data-aos="fade-up" data-aos-delay="100">
                                <div class="sticky-content">
                                    <h3 class="h3">${body.title}</h3>
                                    <p class="mb-4"><span class="text-muted">${body.technology}</span></p>
        
                                    <div class="mb-5">
                                        ${ps.map(it => `<p class="mb-4">${it}</p>`).join('')}
                                        
                                        <div style="display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-top: 1rem;">
                                            ${hasSections ? `<p><a class="readmore" href="#detailedWork">See more</a></p>` : ''}
                                            ${this.videoBtn(links)}
                                            ${this.downloadBtn(links)}
                                            ${this.playTheGameButton(links)}
                                        </div>
                                        ${contribution.length ? this.contribution(contribution) : ''}
                                    </div>
        
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        
            <!-- ======= Detailed work section ======= -->
            ${hasSections ? `
                <section id="detailedWork">
                    <h2>More about the project</h2>
                    ${this.sections(sections)}
                </section>
            ` : ''}

            ${this.embedYoutubeVideo(links)}
        </main>
    `
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'work') {
            try {
                this.work = JSON.parse(newValue);
            } catch (e) {
                console.error("Invalid JSON in 'work' attribute", e);
                this.work = null;
            }
            this.render();
        }
    }

    connectedCallback() {
        this.work = JSON.parse(this.getAttribute('work'));
        this.render();
    }

    render() {
        this.innerHTML = this.code();
    }
}

customElements.define('work-component', Work);