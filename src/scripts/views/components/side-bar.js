import CONFIG from '../../globals/config';

class SideBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <nav class="nav">
        <div>
          <a href="#/dashboard" class="nav_logo">
            <img src="${CONFIG.IMAGE_LOGO_PATH}" alt="Maneyfy" class="image_logo">
            <span class="nav_logo-name">Maneyfy</span>
          </a>
          <a href="#/profile" class="profile-container">
            <div>
              <div class="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt=""> </div>
              <div>
                <p>Tegar Naufal Hanip</p>
                <p>tegarnaufalh@gmail.com</p>
              </div>
            </div>
            <p>Lihat Profil</p>
          </a>
          <select name="wallet" id="wallet">
            <option value="dompet1">
              <i class='bx bxs-wallet'></i>
              <span class="nav_name">Dompet 1</span>
            </option>
            <option value="dompet2">
              <i class='bx bxs-wallet'></i>
              <span class="nav_name">Dompet 2</span>
            </option>
          </select>
          <div class="nav_list">
            <a href="#" class="nav_link active">
              <i class='bx bxs-dashboard large'></i>
              <span class="nav_name">Dashboard</span>
            </a>
            <a href="#" class="nav_link">
              <span class="iconify large" data-icon="mdi:idea"></span>
              <span class="nav_name">Tips</span>
            </a>
          </div>
        </div>
        <a href="#" class="nav_logout">
          <i class='bx bx-log-out bx-rotate-180 large'></i>
          <span class="nav_name">Keluar Akun</span>
        </a>
      </nav>
    `;
  }
}

customElements.define('side-bar', SideBar);
