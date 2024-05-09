const template = document.createElement("template");
template.innerHTML = `
    <style>
        label {
            color: red;
            display: block;
        }
    </style>

    <label>
        <input type="checkbox" />
        <slot></slot>
    </label>
`;

class TodoItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open"});
        this.shadowRoot.append(template.content.cloneNode(true));
        this.checkbox = this.shadowRoot.querySelector("input");
        // this.render();
    }

    isChecked = () => {
        // console.log(this.checkbox.checked);

        const myEvent = new CustomEvent('checkbox-event', {
            bubbles: true,
            composed: true,
            detail: {
                count: this.checkbox.checked ? 1 : 0,
            }
        });

        this.dispatchEvent(myEvent);
        // console.log(myEvent.detail);
    }

    connectedCallback() {
        this.checkbox.addEventListener('change', this.isChecked);
        // this.shadowRoot.querySelector("input").onchange = (event) => {
        //     console.log(event.target);
        // };
    }

    disconnectedCallback() {
        this.checkbox.removeEventListener('change', this.isChecked);
    }

    // static get observedAttributes() {
    //     return ["checked"];
    // }

    // attributeChangedCallback(name, oldValue, newValue) {
    //     console.log(`name: ${name} | oldValue: ${oldValue} | newValue: ${newValue}`);
    // }

    // render() {
    //     this.shadowRoot.innerHTML = `
    //         <style>
    //             label {
    //                 color: red;
    //                 display: block;
    //             }
    //         </style>
            
    //         <label>
    //             <input type="checkbox" />
    //             <slot></slot>
    //         </label>
    //     `;
    // }
}

customElements.define("todo-item", TodoItem);

// setTimeout(function(){
//     document.querySelector("todo-item").remove();
// }, 5000);