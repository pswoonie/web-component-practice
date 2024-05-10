
class LoginButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    height: 30px;
                    width: 50px;
                }
            </style>

            <button>Login</button>
        `;
    }
}

customElements.define("login-button", LoginButton);