import detailTransaksi from './pop-upDetailTransaksi';

class HistoryTransaction extends HTMLElement {
  set dompetSelected(dompet) {
    this._dompetSelected = dompet;
    this._render();
  }

  _render() {
    const dompet = this._dompetSelected;

    this.innerHTML = `
      <section class="container d-flex justify-content-center section-history mb-5">
        <div class="riwayat-transaksi">
          <p class="history-title mb-1">Riwayat Transaksi</p>
          <p class="description-wallet">Berdasarkan dompet <b>${dompet.name_dompet}</b></p>
          <div class="text-center" id="list-history-transaction"></div>
        </div>
      </section>
      ${detailTransaksi}
  `;
  }
}

customElements.define('history-transaction', HistoryTransaction);
