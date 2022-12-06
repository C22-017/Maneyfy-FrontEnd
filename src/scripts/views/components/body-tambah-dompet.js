class BodyTambahDompet extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="modal-body row gap-3 mx-0">
        <div class="col-3 border px-0 d-flex align-items-center justify-content-center">
          <button type="button" class="btn btn-transparent edit d-flex btn-icon-focus" data-bs-toggle="modal"
            data-bs-target="#iconTambahDompet">
            <img class="rounded icon-user-selected-tambah icon-selected" alt="pilih icon dompet">
          </button>
        </div>
        <div class="col-8 border flex-fill">
          <div class="mb-3">
            <label for="inputNameDompetTambah" class="form-label">Nama Dompet</label>
            <input type="text" class="form-control" id="inputNameDompetTambah" required>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('body-tambah-dompet', BodyTambahDompet);
