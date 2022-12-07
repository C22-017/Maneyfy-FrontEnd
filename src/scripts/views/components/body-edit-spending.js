class BodyEditSpending extends HTMLElement {
  set dataCategorySpending(categorySpending) {
    this._dataCategorySpending = categorySpending;
    this._render();
  }

  _render() {
    const categorySpending = this._dataCategorySpending;

    this.innerHTML = `
      <div class="modal-body row gap-3 mx-0">
        <div class="col-3 border px-0 d-flex align-items-center justify-content-center">
          <button type="button" class="btn btn-transparent edit d-flex btn-icon-focus" data-bs-toggle="modal"
            data-bs-target="#iconEditKategoriPengeluaran">
            <img class="rounded icon-user-selected-edit icon-selected" id="iconSpendingUserEdit-${categorySpending.icSpending_id}" src="${categorySpending.IconSpending.url_icSpending}" alt="pilih icon spending">
          </button>
        </div>
        <div class="col-8 border flex-fill">
          <div class="mb-3">
            <label for="inputNameSpendingEdit" class="form-label">Nama Kategori Pengeluaran</label>
            <input type="text" class="form-control" id="inputNameSpendingEdit" value="${categorySpending.categoryName_spending}" required>
          </div>
        </div>
        <div class="d-grid d-md-flex justify-content-md-end pt-4">
          <button type="button" name="btnEditSpending" id="btnEditSpending-${categorySpending.id}" class="btn btn-primary btn-primary-color px-4">Simpan</button>
        </div>
      </div>
    `;
  }
}

customElements.define('body-edit-spending', BodyEditSpending);
