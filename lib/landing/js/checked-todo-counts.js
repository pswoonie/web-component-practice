
class CheckedTodoCounts extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.todoList = document.querySelectorAll('todo-item');
        this.count = 0;
        this.render();
    }

    eventHandler = (event) => {
        const { count } = event.detail;

        console.log(count);

        switch(count) {
            case 1: {
                this.count += 1;
                break;
            }
            case 0: {
                this.count -= 1;
                break;
            }
            default: {
                break;
            }
        }

        // console.log(this.count);

        this.render();
    }
    
    connectedCallback() {
        this.todoList.forEach((elem) => {
            elem.addEventListener('checkbox-event', this.eventHandler);
        });
    }

    disconnectedCallback() {
        this.todoList.forEach((elem) => {
            elem.removeEventListener('checkbox-event', this.eventHandler);
        });
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                h3 {
                    margin-left: 16px;
                }
            </style>

            <h3>Completed: ${this.count}</h3>
        `;
    }
}

customElements.define("checked-todo-counts", CheckedTodoCounts);