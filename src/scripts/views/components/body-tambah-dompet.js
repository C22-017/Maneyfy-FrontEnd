class BodyTambahDompet extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="modal-body row gap-4 p-3">
        <div class="wallet col-3 border">
          <button type="button" class="btn btn-transparent edit d-flex" data-bs-toggle="modal"
            data-bs-target="#iconTambahDompet">
            <img class="img-fluid rounded icon-user-selected-tambah" alt="logo">
          </button>
        </div>
        <div class="col-8 border">
          <div class="mb-3">
            <label for="inputNameDompetTambah" class="form-label">Nama Dompet</label>
            <input type="text" class="form-control" id="inputNameDompetTambah" required>
          </div>
        </div>
        <div class="d-grid d-md-flex justify-content-md-end">
          <button type="button" id="btnTambahDompet" class="btn btn-primary">Tambah</button>
        </div>
      </div>
    `;
  }
}

customElements.define('body-tambah-dompet', BodyTambahDompet);
