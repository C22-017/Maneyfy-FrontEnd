import CONFIG from '../../globals/config';

class TopHeader extends HTMLElement {
  set dataUser(data) {
    this._dataUser = data;
    this._render();
  }

  _render() {
    const dataUser = this._dataUser;

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
            </div>
          </div>
          <div class="dropdown wallet-container">
            <button class="dropdown-toggle" type="button" id="dropdownWallet" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="${CONFIG.ICON_WALLET}" alt="" class="icon-header"><span class="dompet-list"> Dompet 1</span>
            </button>
            <wallet-list class="dropdown-menu" aria-labelledby="dropdownWallet"></wallet-list>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('top-header', TopHeader);
