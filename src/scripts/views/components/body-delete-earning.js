class BodyDeleteEarning extends HTMLElement {
  set dataCategoryEarning(categoryEarning) {
    this._dataCategoryEarning = categoryEarning;
    this._render();
  }

  _render() {
    const categoryEarning = this._dataCategoryEarning;

    this.innerHTML = `
      <div class="modal-body modal-confirm">
        <span>Semua transaksi yang termasuk pada kategori ini juga akan dihapus</span>
        <div class="justify-content-between row p-3">
          <button type="button" class="btn btn-primary col-4" data-bs-toggle="modal"
            data-bs-target="#kelolaKategoriPemasukan">Batal</button>
          <button type="button" name="btnDeleteEarning" id="btnDeleteEarning-${categoryEarning.id}" class="btn btn-danger col-4">Hapus</button>
        </div>
      </div>
    `;
  }
}

customElements.define('body-delete-earning', BodyDeleteEarning);
