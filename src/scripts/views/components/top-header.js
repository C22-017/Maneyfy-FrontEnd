import CONFIG from '../../globals/config';

class TopHeader extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <header class="header shadow-sm" id="header">
        <div class="header-left">
          <button id="header-toggle">
            <i class='bx bx-menu large' id="icon-toggle"></i>
          </button>
          <h4>Halaman Utama</h4>
        </div>
        <div class="header-right">
          <div class="dropdown profile-container-ui">
            <button class="dropdown-toggle" type="button" id="dropdownProfile" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="https://i.imgur.com/hczKIze.jpg" alt="" class="profile-picture">
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownProfile">
              <img src="https://i.imgur.com/hczKIze.jpg" alt="" class="profile__image">
              <p class="profile__name">Tegar Naufal Hanip</p>
              <p class="profile__email">tegarhanip@gmail.com</p>
              <a href="#/profile" class="profile__link">Lihat Profil</a>
            </div>
          </div>
          <div class="dropdown wallet-container">
            <button class="dropdown-toggle" type="button" id="dropdownWallet" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="${CONFIG.ICON_WALLET}" alt="" class="icon-header">
              Dompet 1
            </button>
            <wallet-list class="dropdown-menu" aria-labelledby="dropdownWallet"></wallet-list>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('top-header', TopHeader);
