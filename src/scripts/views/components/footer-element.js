class FooterElement extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <p>&copy; 2022. Maneyfy. All Rights Reserved</p>
    `;
  }
}

customElements.define('footer-element', FooterElement);
