
class HDivider extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open"});
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                div {
                    height: 1px;
                    width: 100%;
                    content: '';
                    background: black;
                }
            </style>

            <div></div>
        `;
    }
}

customElements.define("h-divider", HDivider);