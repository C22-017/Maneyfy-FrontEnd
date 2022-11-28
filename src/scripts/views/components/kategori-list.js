class CategoryList extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div></div>
    `;
  }
}
customElements.define('kategori-list', CategoryList);
