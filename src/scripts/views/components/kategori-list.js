class CategoryList extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
     
    `;
  }
}
customElements.define('kategori-list', CategoryList);
