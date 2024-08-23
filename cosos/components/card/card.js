class CustomCard extends HTMLElement {

    static get observedAttributes() {
        return ['img', 'alt', 'heading', 'content', 'cta'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[attrName] = newValue;
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./cosos/components/card/card.css">
        <div class="product-card">

        <div class="product-card__img">
            <img src="${this.img}" alt="${this.alt}">
        </div>

        <div class="product-card__content">
            <h2 class="product-card__title">${this.heading}</h2>
            <p class="product-card__description">${this.content}</p>
            <button>${this.cta}</button>
        </div>

        </div>
        `;
    }
}

customElements.define('custom-card', CustomCard);
export default CustomCard;
