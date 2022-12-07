class ItemWalletKelola extends HTMLElement {
  set dataDompet(dompet) {
    this._dataDompet = dompet;
    this._render();
  }

  _render() {
    const dompet = this._dataDompet;

    this.innerHTML = `
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item d-flex flex-fill item-container flex-row align-items-center">
          <div><img class="icon-list" src="${dompet.IconDompet.url_icDompet}" alt="logo"></div>
          <div><span class="label-item">${dompet.name_dompet}</span></div>
        </li>
        <li class="list-group-item padding-icon-kelola">
          <button type="button" name="btnIconEditDompet" class="btn btn-transparent p-2 btn-icon-focus" id="editDompet-${dompet.id}" data-bs-toggle="modal" data-bs-target="#editDompet">
            <iconify-icon icon="material-symbols:edit" class="icon-large color-primary"></iconify-icon>
          </button>
        </li>
        <li class="list-group-item padding-icon-kelola">
          <button type="button" name="btnIconDeleteDompet" class="btn p-2 btn-icon-delete btn-icon-focus" id="deleteDompet-${dompet.id}" data-bs-toggle="modal" data-bs-target="#hapusDompet">
            <iconify-icon icon="mdi:trash" class="icon-large color-danger"></iconify-icon>
          </button>
        </li>
      </ul>
    `;
  }
}

customElements.define('item-wallet-kelola', ItemWalletKelola);
