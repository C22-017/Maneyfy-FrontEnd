class ItemCategorySpendingKelola extends HTMLElement {
  set dataCategorySpending(categorySpending) {
    this._dataCategorySpending = categorySpending;
    this._render();
  }

  _render() {
    const categorySpending = this._dataCategorySpending;

    this.innerHTML = `
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item d-flex flex-fill item-container flex-row align-items-center">
          <div><img class="icon-list" src="${categorySpending.IconSpending.url_icSpending}" alt="logo"></div>
          <div><span class="label-item">${categorySpending.categoryName_spending}</span></div>
        </li>
        <li class="list-group-item padding-icon-kelola">
          <button type="button" name="btnIconEditSpending" class="btn btn-transparent p-2" id="editSpending-${categorySpending.id}" data-bs-toggle="modal" data-bs-target="#editKategoriPengeluaran">
            <iconify-icon icon="material-symbols:edit" class="icon-large text-primary"></iconify-icon>
          </button>
        </li>
        <li class="list-group-item padding-icon-kelola">
          <button type="button" name="btnIconDeleteSpending" class="btn btn-icon-delete p-2" id="deleteSpending-${categorySpending.id}" data-bs-toggle="modal" data-bs-target="#hapusKategoriPengeluaran">
            <iconify-icon icon="mdi:trash" class="icon-large text-danger"></iconify-icon>
          </button>
        </li>
      </ul>
    `;
  }
}

customElements.define('item-spending-kelola', ItemCategorySpendingKelola);
