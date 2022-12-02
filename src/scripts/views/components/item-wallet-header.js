class ItemWalletHeader extends HTMLElement {
  set dataDompet(dompet) {
    this._dataDompet = dompet;
    this._render();
  }

  _render() {
    const dompet = this._dataDompet;

    this.innerHTML = `
      <label class="container custom-control-input">
        <input type="radio" class="radio-wallet" name="radio-dompet" id="dompet-${dompet.id}" value="${dompet.name_dompet}">
        <label for="dompet-${dompet.id}">${dompet.name_dompet}</label>
      </label>
    `;
  }
}

customElements.define('item-wallet-header', ItemWalletHeader);
