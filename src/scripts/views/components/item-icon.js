class ItemIcon extends HTMLElement {
  set dataIcon(icon) {
    this._dataicon = icon;
    this._render();
  }

  _render() {
    const icon = this._dataicon;

    this.innerHTML = `
      <div class="col-2 icon-select" id="iconDompet-${icon.id}" tabindex="0">
        <img class="icon-image" src="${icon.url_icDompet}" alt="logo">
      </div>
    `;
  }
}

customElements.define('item-icon', ItemIcon);
