class WalletList extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div>
        <label class="container">Dompet 1
          <input type="radio" checked="checked" name="radio">
          <span class="checkmark"></span>
        </label>
        <label class="container">Dompet 2
          <input type="radio" name="radio">
          <span class="checkmark"></span>
        </label>
      </div>
    `;
  }
}

customElements.define('wallet-list', WalletList);
