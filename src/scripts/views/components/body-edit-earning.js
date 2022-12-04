class BodyEditEarning extends HTMLElement {
  set dataCategoryEarning(categoryEarning) {
    this._dataCategoryEarning = categoryEarning;
    this._render();
  }

  _render() {
    const categoryEarning = this._dataCategoryEarning;

    this.innerHTML = `
      <div class="modal-body row gap-4">
        <div class="col-3 border">
          <button type="button" class="btn btn-transparent edit d-flex" data-bs-toggle="modal"
            data-bs-target="#iconEditKategoriPemasukan">
            <img class="img-fluid rounded icon-user-selected-edit" id="iconEarningUserEdit-${categoryEarning.icEarning_id}" src="${categoryEarning.IconEarning.url_icEarning}" alt="pilih icon earning">
          </button>
        </div>
        <div class="col-8 border">
          <div class="mb-3">
            <label for="inputNameEarningEdit" class="form-label">Nama Kategori Pemasukan</label>
            <input type="text" class="form-control" id="inputNameEarningEdit" value="${categoryEarning.categoryName_earning}">
          </div>
        </div>
        <div class="d-grid d-md-flex justify-content-md-end">
          <button type="button" name="btnEditEarning" id="btnEditEarning-${categoryEarning.id}" class="btn btn-primary">Simpan</button>
        </div>
      </div>
    `;
  }
}

customElements.define('body-edit-earning', BodyEditEarning);
