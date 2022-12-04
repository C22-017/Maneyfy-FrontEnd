class BodyDeleteSpending extends HTMLElement {
  set dataCategorySpending(categorySpending) {
    this._dataCategorySpending = categorySpending;
    this._render();
  }

  _render() {
    const categorySpending = this._dataCategorySpending;

    this.innerHTML = `
      <div class="modal-body modal-confirm">
        <span>Semua transaksi yang termasuk pada kategori ini juga akan dihapus</span>
        <div class="justify-content-between row p-3">
          <button type="button" class="btn btn-primary col-4" data-bs-toggle="modal"
            data-bs-target="#kelolaKategoriPengeluaran">Batal</button>
          <button type="button" name="btnDeleteSpending" id="btnDeleteSpending-${categorySpending.id}" class="btn btn-danger col-4">Hapus</button>
        </div>
      </div>
    `;
  }
}

customElements.define('body-delete-spending', BodyDeleteSpending);
