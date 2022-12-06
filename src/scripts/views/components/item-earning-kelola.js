class ItemCategoryEarningKelola extends HTMLElement {
  set dataCategoryEarning(categoryEarning) {
    this._dataCategoryEarning = categoryEarning;
    this._render();
  }

  _render() {
    const categoryEarning = this._dataCategoryEarning;

    this.innerHTML = `
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item d-flex flex-fill item-container flex-row align-items-center">
          <div><img class="icon-list" src="${categoryEarning.IconEarning.url_icEarning}" alt="logo"></div>
          <div><span class="label-item">${categoryEarning.categoryName_earning}</span></div>
        </li>
        <li class="list-group-item padding-icon-kelola">
          <button type="button" name="btnIconEditEarning" class="btn btn-transparent p-2" id="editEarning-${categoryEarning.id}" data-bs-toggle="modal" data-bs-target="#editKategoriPemasukan">
            <iconify-icon icon="material-symbols:edit" class="icon-large text-primary"></iconify-icon>
          </button>
        </li>
        <li class="list-group-item padding-icon-kelola">
          <button type="button" name="btnIconDeleteEarning" class="btn btn-icon-delete p-2" id="deleteEarning-${categoryEarning.id}" data-bs-toggle="modal" data-bs-target="#hapusKategoriPemasukan">
            <iconify-icon icon="mdi:trash" class="icon-large text-danger"></iconify-icon>
          </button>
        </li>
      </ul>
    `;
  }
}

customElements.define('item-earning-kelola', ItemCategoryEarningKelola);
