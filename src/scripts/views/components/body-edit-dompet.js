class BodyEditDompet extends HTMLElement {
  set dataDompet(dompet) {
    this._dataDompet = dompet;
    this._render();
  }

  _render() {
    const dompet = this._dataDompet;

    this.innerHTML = `
      <div class="modal-body row gap-3 mx-0">
        <div class="col-3 border px-0 d-flex align-items-center justify-content-center">
          <button type="button" class="btn btn-transparent edit d-flex btn-icon-focus" data-bs-toggle="modal"
            data-bs-target="#iconEditDompet">
            <img class="rounded icon-user-selected-edit icon-selected" id="iconDompetUserEdit-${dompet.icDompet_id}" src="${dompet.IconDompet.url_icDompet}" alt="pilih icon dompet">
          </button>
        </div>
        <div class="col-8 border flex-fill">
          <div class="mb-3">
            <label for="inputNameDompetEdit" class="form-label">Nama Dompet</label>
            <input type="text" class="form-control" id="inputNameDompetEdit" value="${dompet.name_dompet}" required>
          </div>
        </div>
        <div class="d-grid d-md-flex justify-content-md-end pt-4">
          <button type="button" name="btnEditDompet" id="btnEditDompet-${dompet.id}" class="btn btn-primary">Simpan</button>
        </div>
      </div>
    `;
  }
}

customElements.define('body-edit-dompet', BodyEditDompet);
