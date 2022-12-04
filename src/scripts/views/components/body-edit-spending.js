class BodyEditSpending extends HTMLElement {
  set dataCategorySpending(categorySpending) {
    this._dataCategorySpending = categorySpending;
    this._render();
  }

  _render() {
    const categorySpending = this._dataCategorySpending;

    this.innerHTML = `
      <div class="modal-body row gap-4">
        <div class="col-3 border">
          <button type="button" class="btn btn-transparent edit d-flex" data-bs-toggle="modal"
            data-bs-target="#iconEditKategoriPengeluaran">
            <img class="img-fluid rounded icon-user-selected-edit" id="iconSpendingUserEdit-${categorySpending.icSpending_id}" src="${categorySpending.IconSpending.url_icSpending}" alt="pilih icon spending">
          </button>
        </div>
        <div class="col-8 border">
          <div class="mb-3">
            <label for="inputNameSpendingEdit" class="form-label">Nama Kategori Pengeluaran</label>
            <input type="text" class="form-control" id="inputNameSpendingEdit" value="${categorySpending.categoryName_spending}" required>
          </div>
        </div>
        <div class="d-grid d-md-flex justify-content-md-end">
        <button type="button" name="btnEditSpending" id="btnEditSpending-${categorySpending.id}" class="btn btn-primary">Simpan</button>
        </div>
      </div>
    `;
  }
}

customElements.define('body-edit-spending', BodyEditSpending);
