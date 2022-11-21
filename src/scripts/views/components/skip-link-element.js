class SkipLinkElement extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <a href="#mainContent" class="skip-link">Menuju ke konten <span class="material-icons" aria-hidden="true">skip_next</span></a>
    `;
  }
}

customElements.define('skip-link-element', SkipLinkElement);
