import CONFIG from '../../globals/config';
import addTransaksi from './pop-upAddTransaksi';

class HeaderDashboard extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <section class=" header-main">
        <div class="container ">
          <div class="row">
            <div class="col-9">
              <div class="col-4 forWidth">
              </div>
            </div>
            <div class="col-3 d-flex justify-content-end">
              <button type="button" class="btn btn-primary btn-lg button-add float" data-bs-toggle="modal" data-bs-target="#addTransaksi" id="btnOpenAddTransaction">
                <picture>
                  <source type="image/webp" srcset="${CONFIG.ICON_ADD_TRANSACTION}.webp">
                  <source type="image/png" srcset="${CONFIG.ICON_ADD_TRANSACTION}.png">
                  <img src="${CONFIG.ICON_ADD_TRANSACTION}.png" class="icAdd" alt="Icon tambah transaksi">
                </picture>
                <p class="tambah">Tambah Transaksi</p>
              </button>
            </div>
          </div>
        </div>
      </section>
      ${addTransaksi}
    `;
  }
}

customElements.define('head-dashboard', HeaderDashboard);
