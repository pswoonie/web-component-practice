
class TodoItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open"});
        this.render();
        this.checkbox = this.shadowRoot.querySelector("input");
    }
    
    connectedCallback() {
        console.log("Custom element added to page.");
    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    static get observedAttributes() {
        return ["checked"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "checked") {
            this.updateChecked(newValue);
        }
    }

    updateChecked(value) {
        this.checkbox.checked = value != null && value !== "false";
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                label {
                    color: red;
                    display: block;
                }

                .description {
                    font-size: 0.65rem;
                    font-weight: lighter;
                    color: #777;
                }
            </style>

            <label>
                <input type="checkbox" />
                <slot></slot>
                <span class="description">
                    <slot name="description"></slot>
                </span>
            </label>
        `;
    }
}

customElements.define("todo-item", TodoItem);