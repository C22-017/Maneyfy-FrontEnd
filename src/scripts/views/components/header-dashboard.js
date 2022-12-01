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
                <div id="custom-search-input">
                  <div class="input-group col-md-12">
                      <input type="text" class="form-control input-lg form-search searchBar" placeholder="Cari Transaksi" />
                      <span class="input-group-btn ">
                          <button class="btn btn-info" type="button">
                              <img class="icSearch" src="${CONFIG.ICON_SEARCH}" alt="">
                          </button>
                      </span>
                  </div>
              </div>
              </div>
            </div>
            <div class="col-3 d-flex justify-content-end">
              <button type="submit" class="btn btn-primary btn-lg button-add" data-bs-toggle="modal" data-bs-target="#addTransaksi">
                <img class="icAdd" src="${CONFIG.ICON_ADD_TRANSACTION}" alt="icAdd">
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
