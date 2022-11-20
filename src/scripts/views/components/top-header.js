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
        <a class="dropdown-toggle" href="#" role="button" id="dropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src="https://i.imgur.com/hczKIze.jpg" alt="" class="profile-picture">
        </a>
        <div class="dropdown-menu profile-container" aria-labelledby="dropdownProfile">
          <img src="https://i.imgur.com/hczKIze.jpg" alt="" class="profile__image">
          <p class="review__name">Tegar Naufal Hanip</p>
          <p class="review__date">tegarnaufalh@gmail.com</p>
          <a href="#/profile" class="review__content profile_link">Lihat Profil</a>
        </div>
      </div>
      <div class="wallet-container">
        <a href="#">
          <img src="${CONFIG.ICON_WALLET}" alt="" class="icon-header">
          Dompet
          <span class="iconify" data-icon="material-symbols:arrow-back-ios-new-rounded" data-rotate="270deg"></span>
        </a>
      </div>
    </div>
  </header>
    `;
  }
}

customElements.define('top-header', TopHeader);
