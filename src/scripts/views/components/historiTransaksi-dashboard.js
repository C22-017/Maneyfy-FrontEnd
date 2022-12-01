import CONFIG from '../../globals/config';
import detailTransaksi from './pop-upDetailTransaksi';

class HistoryTransaction extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <section class="d-flex justify-content-center section-bg mb-5">
    <div class="riwayat-transaksi">
      <h6>Riwayat Transaksi</h6>
      <p>Bulan November</p>

      <div class="text-center">
        <button type="button" class="btn riwayat-list align-item-center" data-bs-toggle="modal" data-bs-target="#detailTransaksi">
          <div class="row list-riwayat justify-content-center">
          <div class="col-3">
          <img class="img-fluid iconTransaksi" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">
          </div>
          <div class="col-4">
          <p class="headerTransaksi">Makanan & Minuman</p>
          <p class="mainTransaksi">Bayar Makan</p>
          </div>
          <div class="col-4">
          <p class="headerTransaksi">10 November 2022</p>
          <p class="mainTransaksi">-Rp.25.000</p>
          </div>
          </div>
        </button>
        <button type="button" class="btn riwayat-list align-item-center" data-bs-toggle="modal" data-bs-target="#detailTransaksi">
          <div class="row list-riwayat justify-content-center">
          <div class="col-3">
          <img class="img-fluid iconTransaksi" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">
          </div>
          <div class="col-4">
          <p class="headerTransaksi">Makanan & Minuman</p>
          <p class="mainTransaksi">Bayar Makan</p>
          </div>
          <div class="col-4">
          <p class="headerTransaksi">10 November 2022</p>
          <p class="mainTransaksi">-Rp.25.000</p>
          </div>
          </div>
        </button>
      </div>
    </div>
  </section>
  ${detailTransaksi}
  `;
  }
}

customElements.define('history-transaction', HistoryTransaction);
