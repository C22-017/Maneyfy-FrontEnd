class BodyDeleteDompet extends HTMLElement {
  set dataDompet(dompet) {
    this._dataDompet = dompet;
    this._render();
  }

  _render() {
    const dompet = this._dataDompet;

    this.innerHTML = `
      <div class="modal-body modal-confirm">
        <div class="justify-content-between row p-3">
          <button type="button" class="btn btn-primary col-4" data-bs-toggle="modal"
            data-bs-target="#kelolaDompet">Batal</button>
          <button type="button" name="btnDeleteDompet" id="btnDeleteDompet-${dompet.id}" class="btn btn-danger col-4">Hapus</button>
        </div>
      </div>
    `;
  }
}

customElements.define('body-delete-dompet', BodyDeleteDompet);
