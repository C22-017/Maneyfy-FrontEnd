import CONFIG from '../../globals/config';

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
              <div class="col-4">
                <div id="custom-search-input">
                  <div class="input-group col-md-12">
                      <input type="text" class="form-control input-lg form-search" placeholder="Cari Transaksi" />
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
              <button type="submit" class="btn btn-primary btn-lg button-login">
                <img class="icAdd" src="${CONFIG.ICON_ADD_TRANSACTION}" alt="">
                Tambah Transaksi
              </button>
            </div>
          </div>
        </div>
      </section>
   `;
  }
}

customElements.define('head-dashboard', HeaderDashboard);
