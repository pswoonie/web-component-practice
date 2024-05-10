// const template = document.createElement("template");
// template.innerHTML = `
//     <style>
//         label {
//             color: red;
//             display: block;
//         }
//     </style>

//     <label>
//         <input type="checkbox" />
//         <slot></slot>
//     </label>
// `;

class TodoItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open"});
        // this.shadowRoot.append(template.content.cloneNode(true));
        this.render();
        this.checkbox = this.shadowRoot.querySelector("input");
        this.deleteButton = this.shadowRoot.querySelector("button");
    }

    isChecked = () => {
        const myEvent = new CustomEvent('checkbox-event', {
            bubbles: true,
            composed: true,
            detail: {
                count: this.checkbox.checked ? 1 : 0,
            }
        });

        this.dispatchEvent(myEvent);
    }

    isDelete = () => {
        const myEvent = new CustomEvent('delete-event', {
            bubbles: true,
            composed: true,
            detail: {
                id: this.id,
            }
        });

        this.dispatchEvent(myEvent);

        this.remove();
    }

    connectedCallback() {
        this.checkbox.addEventListener('change', this.isChecked);
        // this.shadowRoot.querySelector("input").onchange = (event) => {
        //     console.log(event.target);
        // };
        this.deleteButton.addEventListener('click', this.isDelete);
    }

    disconnectedCallback() {
        this.checkbox.removeEventListener('change', this.isChecked);
        this.deleteButton.removeEventListener('click', this.isDelete);
    }

    // static get observedAttributes() {
    //     return ["checked"];
    // }

    // attributeChangedCallback(name, oldValue, newValue) {
    //     console.log(`name: ${name} | oldValue: ${oldValue} | newValue: ${newValue}`);
    // }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
            <style>
                div {
                    display: flex;
                    flex-direction: row;
                }

                label {
                    height: 30px;
                    width: 270px;
                    margin: 8px 0;
                    display: block;
                    color: red;
                    border: 1px solid black;
                }

                input {
                    height: 20px;
                    width: 20px;
                }

                slot {
                    font-size: 25px;
                }

                button {
                    height: 35px;
                    width: 35px;
                    margin-left: 8px;
                    align-self: center;
                }

                button i {
                    color: blue;
                }
            </style>
            
            <div>
                <label>
                    <input type="checkbox" />
                    <slot></slot>
                </label>

                <button>
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
    }
}

customElements.define("todo-item", TodoItem);

// setTimeout(function(){
//     document.querySelector("todo-item").remove();
// }, 5000);