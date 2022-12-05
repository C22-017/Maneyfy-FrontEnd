import CONFIG from '../../globals/config';
import { rupiahFormat } from '../../utils/format-currency-idr';
import { getDateFormated } from '../../utils/format-date';

class BodyAddTransaction extends HTMLElement {
  set dompetSelected(dompet) {
    this._dompetSelected = dompet;
    this._render();
  }

  _render() {
    const dompet = this._dompetSelected;
    const amount = rupiahFormat(dompet.amount);

    this.innerHTML = `
      <div class="row">
        <div class="form-transaksi col-12 col-lg-3 pt-1">
          <span>Dompet</span>
          <div class="d-flex flex-fill flex-row align-items-center justify-content-center gap-2">
            <div><img class="icon-add-edit-transaction" src="${dompet.IconDompet.url_icDompet}" alt="logo"></div>
            <span class="label-dompet">${dompet.name_dompet} (${amount})</span>
          </div>
        </div>
        <div class="form-transaksi col-12 col-lg-3 align-self-center dompet-pick">
          <button type="button" class="btn edit d-flex pilih-kategori add-category align-items-center justify-content-center gap-2" data-bs-toggle="modal"
            data-bs-target="#addKategori">
            <img class="icon-add-edit-transaction" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo" id="icon-category-add-selected">
            <span class="label-dompet" id="name-category-add-selected">Pilih Kategori</span>
          </button>
        </div>
        <div class="form-transaksi col-12 col-lg-3">
          <div class="mt-2">
            <label for="amountAddTransaction" class="form-label">Nominal Transaksi</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">Rp</span>
              </div>
              <input type="number" class="form-control" id="amountAddTransaction" placeholder="100.000" min="500" max="1000000000">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="form-transaksi col-12 col-lg-3">
          <div class="mt-2 input-append date">
            <label for="dateAddTransaction" class="form-label">Tanggal Transaksi</label>
            <input type="date" class="form-control" id="dateAddTransaction" value="${getDateFormated()}">
          </div>
        </div>
        <div class="large-form col-12 col-lg-6">
          <div class="mt-2">
            <label for="nameAddTransaction" class="form-label">Nama Transaksi</label>
            <input type="text" class="form-control" id="nameAddTransaction">
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('body-add-transaction', BodyAddTransaction);
