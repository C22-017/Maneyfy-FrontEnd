import CONFIG from '../../globals/config';
import detailTransaksi from './pop-upDetailTransaksi';

class HistoryTransaction extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <section class="d-flex month section-bg justify-content-center mb-5">
    <div class="riwayat-transaksi box-main p-2">
      <h6>Riwayat Transaksi</h6>
      <p>Bulan November</p>

      <div class="justify-content-center container">
        <button type="button" class="btn riwayat-list" data-bs-toggle="modal" data-bs-target="#detailTransaksi">
          <ul class="list-group list-group-horizontal text-center">
            <li class="list-group-item">
              <img class="icon-list" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">
            </li>
            <li class="list-group-item flex-fill">
              <p class"headerTransaksi">Makanan & Minuman</p>
              <p class"mainTransaksi">Bayar Makan</p>
            </li>
            <li class="list-group-item">
              <p class="headerTransaksi">10 November 2022</p>
              <p class="mainTransaksi">-Rp.25.000</p>
            </li>
          </ul>
        </button>
      </div>
    </div>
  </section>
  ${detailTransaksi}
  `;
  }
}

customElements.define('history-transaction', HistoryTransaction);
