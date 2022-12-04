class ItemIcon extends HTMLElement {
  set dataIcon(icon) {
    this._dataicon = icon;
    this._render();
  }

  _render() {
    const icon = this._dataicon;

    this.innerHTML = `
      <div class="col-2 icon-select" id="icon-${icon.id}" tabindex="0">
        <img class="icon-image" src="${this._urlIconSelector(icon)}" alt="logo">
      </div>
    `;
  }

  _urlIconSelector(icon) {
    if (icon.url_icDompet) {
      return icon.url_icDompet;
    } else if (icon.url_icEarning) {
      return icon.url_icEarning;
    } else {
      return icon.url_icSpending
    }
  }
}

customElements.define('item-icon', ItemIcon);
