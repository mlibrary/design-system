import { LitElement, html } from 'lit-element';

class Chat extends LitElement {
  open = false;

  _handleClick() {
    this.open = !open;
  }

  render() {
    return html `
      <section>
        <button
          class="m-chat__button"
          aria-expanded="${String(this.open)}"
          @click="${this._handleClick}"
        >
        ${this.open ? 'Open' : 'Close'}
        </button>
      </section>
    `;
  }

  _handleClick(e) {
    console.log(this.prop);
  }
}

customElements.define('m-chat', Chat);