import * as components from './components/indexPadre.js';

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); 
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./cosos/indexAbuelo.css">
        <section class="container">

        <custom-card
        img="https://sm.ign.com/ign_es/feature/a/a-history-/a-history-of-every-nintendo-direct-in-the-switch-era-and-bey_vdba.jpg" 
        alt="loremp ipsum"
        heading="loremp ipsum dolor sit amet"
        content="loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et nunc ultricies lacinia. Donec nec nisl nec nisl ultricies lacinia. Donec nec nisl nec nisl ultricies lacinia." 
        cta="loremp ipsum">
        </custom-card>
        
        <custom-card
        img="https://brandemia.org/contenido/subidas/2022/11/logo-de-nintendo-1-1200x670.png" 
       alt="loremp ipsum"
        heading="loremp ipsum dolor sit amet"
        content="loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et nunc ultricies lacinia. Donec nec nisl nec nisl ultricies lacinia. Donec nec nisl nec nisl ultricies lacinia." 
        cta="loremp ipsum">
        </custom-card>
        
        <custom-card
        img="https://www.elcomercio.com/wp-content/uploads/2024/05/nintendo-switch-1024x683.jpg" 
       alt="loremp ipsum"
        heading="loremp ipsum dolor sit amet"
        content="loremp ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et nunc ultricies lacinia. Donec nec nisl nec nisl ultricies lacinia. Donec nec nisl nec nisl ultricies lacinia." 
        cta="loremp ipsum">
        </custom-card>

        </section>`;
    }
}

customElements.define('app-container', AppContainer);
export default AppContainer;
