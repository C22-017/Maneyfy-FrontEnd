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
    </div>
    <div class="header-right">
      <div class="dropdown profile-container-ui">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
        </a>
        <ul class="dropdown-menu profile-container" aria-labelledby="dropdownProfile">
          <li><img src="https://i.imgur.com/hczKIze.jpg" alt="" class="profile__image"></li>
          <p class="review__name">Tegar Naufal Hanip</p>
          <p class="review__date">tegarnaufalh@gmail.com</p>
          <a href="#/profile" class="review__content profile_link">Lihat Profil</a>
        </ul>
      </div>
    </div>
  </header>
    `;
  }
}

customElements.define('top-header', TopHeader);
