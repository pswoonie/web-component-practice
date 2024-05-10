
class AddTodo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open"});
        this.render();
        this.button = this.shadowRoot.querySelector("button");
    }

    addNewTask = () => {
        const task = this.shadowRoot.querySelector("input").value;

        if (task !== "") {
            const myEvent = new CustomEvent('new-task', {
                bubbles: true,
                composed: true,
                detail: {
                    task: task,
                }
            });
    
            this.dispatchEvent(myEvent);
        }
    }

    connectedCallback() {
        this.button.addEventListener("click", this.addNewTask);
    }

    disconnectedCallback() {
        this.button.removeEventListener("click", this.addNewTask);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                label,
                input,
                button {
                    display: block;
                }

                input {
                    height: 30px;
                    width: 300px;
                    margin: 8px 0;
                }

                button {
                    height: 30px;
                    width: 308px;
                }
            </style>
            
            <label for="task">New Task</label>
            <input type="text" id="task" name="task" />
            <button>Add</button>
        `;
    }
}

customElements.define("add-todo", AddTodo);