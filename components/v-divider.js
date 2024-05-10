
class VDivider extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open"});
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                div {
                    height: 100%;
                    width: 1px;
                    margin: 0 16px;
                    content: '';
                    background: black;
                }
            </style>

            <div></div>
        `;
    }
}

customElements.define("v-divider", VDivider);