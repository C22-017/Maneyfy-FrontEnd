import CONFIG from '../../globals/config';

class TopHeader extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <header class="header shadow-sm" id="header">
        <div class="header-left">
          <a href="#">
            <i class='bx bx-menu large' id="header-toggle"></i>
          </a>
          <h4>Halaman Utama</h4>
        </div>
        <div class="header-right">
          <div class="dropdown profile-container-ui">
            <a class="dropdown-toggle" href="#" role="button" id="dropdownProfile" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="https://i.imgur.com/hczKIze.jpg" alt="" class="profile-picture">
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownProfile">
              <img src="https://i.imgur.com/hczKIze.jpg" alt="" class="profile__image">
              <p class="review__name">Tegar Naufal Hanip</p>
              <p class="review__date">tegarhanip@gmail.com</p>
              <a href="#/profile" class="review__content profile_link">Lihat Profil</a>
            </div>
          </div>
          <div class="dropdown wallet-container">
            <a class="dropdown-toggle" href="#" role="button" id="dropdownWallet" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="${CONFIG.ICON_WALLET}" alt="" class="icon-header">
              Dompet 1
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownWallet">
              <label class="container">Dompet 1
                <input type="radio" checked="checked" name="radio">
                <span class="checkmark"></span>
              </label>
              <label class="container">Dompet 2
                <input type="radio" name="radio">
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('top-header', TopHeader);
