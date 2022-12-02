class ItemWalletKelola extends HTMLElement {
  set dataDompet(dompet) {
    this._dataDompet = dompet;
    this._render();
  }

  _render() {
    const dompet = this._dataDompet;

    this.innerHTML = `
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item flex-fill item-container">
          <img class="icon-list" src="${dompet.IconDompet.url_icDompet}" alt="logo">
          <span class="label-item">${dompet.name_dompet}</span>
        </li>
        <li class="list-group-item">
          <button type="button" name="btnIconEditDompet" class="btn btn-transparent p-2" id="editDompet-${dompet.id}" name="btnE" data-bs-toggle="modal" data-bs-target="#editDompet">
            <iconify-icon icon="material-symbols:edit" class="icon-large text-primary"></iconify-icon>
          </button>
        </li>
        <li class="list-group-item">
          <button type="button" name="btnIconDeleteDompet" class="btn p-2 btn-icon-delete" id="deleteDompet-${dompet.id}" data-bs-toggle="modal" data-bs-target="#hapusDompet">
            <iconify-icon icon="mdi:trash" class="icon-large text-danger"></iconify-icon>
          </button>
        </li>
      </ul>
    `;
  }
}

customElements.define('item-wallet-kelola', ItemWalletKelola);
