class BodyDeleteTransaction extends HTMLElement {
  set transaction(transaction) {
    this._transaction = transaction;
    this._render();
  }

  _render() {
    const transaction = this._transaction;

    this.innerHTML = `
      <div class="modal-body modal-confirm">
        <span>Tindakan ini tidak dapat dikembalikan</span>
        <div class="justify-content-between row p-3">
          <button type="button" class="btn btn-primary col-4" data-bs-toggle="modal" data-bs-target="#detailTransaksi">Batal</button>
          <button type="button" id="btnDeleteTransaction-${transaction.id}" class="btn btn-danger col-4 btnDeleteTransaction">Hapus</button>
        </div>
      </div>
    `;
  }
}

customElements.define('body-delete-transaction', BodyDeleteTransaction);
