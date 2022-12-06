class SpinnerElement extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="lds-ring" id="loading"><div></div><div></div><div></div><div></div></div>
    `;
  }
}

customElements.define('spinner-element', SpinnerElement);
