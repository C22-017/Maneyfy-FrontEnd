import CONFIG from '../../globals/config';
import { removeDataLocalStorage } from '../../utils/local-storage-utils';

class TopHeader extends HTMLElement {
  set dataUser(data) {
    this._dataUser = data;
  }

  set selectedDompet(dompet) {
    this._selectedDompet = dompet;
    this._render();
  }

  _render() {
    const dataUser = this._dataUser;
    const dompet = this._selectedDompet;

    this.innerHTML = `
      <header class="header shadow-sm" id="header">
        <div class="header-left">
          <button id="header-toggle">
            <i class='bx bx-menu large' id="icon-toggle"></i>
          </button>
        </div>
        <div class="header-right">
          <div class="dropdown profile-container-ui">
            <button class="dropdown-toggle" type="button" id="dropdownProfile" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="${dataUser.profile_picture}" alt="" class="profile-picture">
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownProfile">
              <img src="${dataUser.profile_picture}" alt="" class="profile__image">
              <p class="profile__name">${dataUser.name}</p>
              <p class="profile__email">${dataUser.email}</p>
              <a href="#/profile" class="profile__link">Lihat Profil</a>
              <div class="logout-content">
                <button data-bs-toggle="modal" data-bs-target="#keluarAkun" class="logout__link">
                  <i class='bx bx-log-out bx-rotate-180 large'></i>
                  <span class="logout_name">Keluar Akun</span>
                </button>
              </div>
            </div>
          </div>
          <div class="dropdown wallet-container">
            <button class="dropdown-toggle" type="button" id="dropdownWallet" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="${CONFIG.ICON_WALLET_USER}" alt="" class="icon-header"><span class="dompet-list">${dompet.name_dompet}</span>
            </button>
            <div class="dropdown-menu" id="dompetListHeader" aria-labelledby="dropdownWallet"></div>
          </div>
        </div>
      </header>

      <div class="modal fade" id="keluarAkun" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">Keluar Akun?</h4>
              <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body modal-confirm">
              <span>Kamu akan diarahkan ke halaman Login untuk masuk kembali ke akunmu</span>
              <div class="justify-content-between row p-3">
                <button type="button" class="btn btn-primary col-4" data-bs-dismiss="modal" aria-label="Close">Batal</button>
                <button type="button" id="btnLogout" class="btn btn-danger col-4">Keluar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const btnLogout = document.querySelector('#btnLogout');
    btnLogout.addEventListener('click', () => {
      removeDataLocalStorage();
      location.replace('#/login');
      location.reload();
    });
  }
}

customElements.define('top-header', TopHeader);
