class BodyTambahSpending extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="modal-body row gap-4 p-3">
        <div class="col-3 border">
          <button type="button" class="btn btn-transparent edit d-flex" data-bs-toggle="modal"
            data-bs-target="#iconTambahKategoriPengeluaran">
            <img class="img-fluid rounded icon-user-selected-tambah" alt="pilih icon spending">
          </button>
        </div>
        <div class="col-8 border">
          <div class="mb-3">
            <label for="inputNameSpendingTambah" class="form-label">Nama Kategori Pengeluaran</label>
            <input type="text" class="form-control" id="inputNameSpendingTambah">
          </div>
        </div>
        <div class="d-grid d-md-flex justify-content-md-end">
          <button type="button" id="btnTambahSpending" class="btn btn-primary">Tambah</button>
        </div>
      </div>
    `;
  }
}

customElements.define('body-tambah-spending', BodyTambahSpending);
