import CONFIG from '../../globals/config';

class SideBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="l-navbar shadow-sm" id="nav-bar">
        <nav class="nav">
          <div> 
            <a href="#/dashboard" class="nav_logo">
              <img src="${CONFIG.IMAGE_LOGO_PATH}" alt="Maneyfy" class="img-fluid image_logo">
              <span class="nav_logo-name">Maneyfy</span>
            </a>
            <div>
              <a href="#/dashboard" class="nav_link active"> 
                <i class='bx bxs-dashboard large'></i>
                <span class="nav_name">Dashboard</span>
              </a>
              <a href="#/tips" class="nav_link"> 
                <span class="iconify large" data-icon="mdi:idea"></span>
                <span class="nav_name">Tips</span>
              </a>
            </div>
          </div>
          <button href="#" class="nav_logout">
            <i class='bx bx-log-out bx-rotate-180 large'></i>
            <span class="nav_name">Keluar Akun</span>
          </button>
        </nav>
      </div>
    `;
  }
}

customElements.define('side-bar', SideBar);
