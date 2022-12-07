class BodyEditEarning extends HTMLElement {
  set dataCategoryEarning(categoryEarning) {
    this._dataCategoryEarning = categoryEarning;
    this._render();
  }

  _render() {
    const categoryEarning = this._dataCategoryEarning;

    this.innerHTML = `
      <div class="modal-body row gap-3 mx-0">
        <div class="col-3 border px-0 d-flex align-items-center justify-content-center">
          <button type="button" class="btn btn-transparent edit d-flex btn-icon-focus" data-bs-toggle="modal"
            data-bs-target="#iconEditKategoriPemasukan">
            <img class="rounded icon-user-selected-edit icon-selected" id="iconEarningUserEdit-${categoryEarning.icEarning_id}" src="${categoryEarning.IconEarning.url_icEarning}" alt="pilih icon earning">
          </button>
        </div>
        <div class="col-8 border flex-fill">
          <div class="mb-3">
            <label for="inputNameEarningEdit" class="form-label">Nama Kategori Pendapatan</label>
            <input type="text" class="form-control" id="inputNameEarningEdit" value="${categoryEarning.categoryName_earning}">
          </div>
        </div>
        <div class="d-grid d-md-flex justify-content-md-end pt-4">
          <button type="button" name="btnEditEarning" id="btnEditEarning-${categoryEarning.id}" class="btn btn-primary btn-primary-color px-4">Simpan</button>
        </div>
      </div>
    `;
  }
}

customElements.define('body-edit-earning', BodyEditEarning);
