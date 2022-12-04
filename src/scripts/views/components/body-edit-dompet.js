class BodyEditDompet extends HTMLElement {
  set dataDompet(dompet) {
    this._dataDompet = dompet;
    this._render();
  }

  _render() {
    const dompet = this._dataDompet;

    this.innerHTML = `
      <div class="modal-body row gap-4">
        <div class="col-3 border">
          <button type="button" class="btn btn-transparent edit d-flex" data-bs-toggle="modal"
            data-bs-target="#iconEditDompet">
            <img class="img-fluid rounded icon-user-selected-edit" id="iconDompetUserEdit-${dompet.icDompet_id}" src="${dompet.IconDompet.url_icDompet}" alt="pilih icon dompet">
          </button>
        </div>
        <div class="col-8 border">
          <div class="mb-3">
            <label for="inputNameDompetEdit" class="form-label">Nama Dompet</label>
            <input type="text" class="form-control" id="inputNameDompetEdit" value="${dompet.name_dompet}" required>
          </div>
        </div>
        <div class="d-grid d-md-flex justify-content-md-end">
          <button type="button" name="btnEditDompet" id="btnEditDompet-${dompet.id}" class="btn btn-primary">Simpan</button>
        </div>
      </div>
    `;
  }
}

customElements.define('body-edit-dompet', BodyEditDompet);
