
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
                    margin-right: 16px;
                }

                button a {
                    text-decoration: none;
                }
            </style>

            <button>
                <a href="../../lib/login/login.html">Login</a>
            </button>
        `;
    }
}

customElements.define("login-button", LoginButton);