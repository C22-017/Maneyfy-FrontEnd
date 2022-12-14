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
              <a href="#/dashboard" class="nav_link" id="dashboard-link"> 
                <i class='bx bxs-dashboard large'></i>
                <span class="nav_name">Dashboard</span>
              </a>
              <a href="#/tips" class="nav_link" id="tips-link"> 
                <span class="iconify large" data-icon="mdi:idea"></span>
                <span class="nav_name">Tips</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    `;
  }
}

customElements.define('side-bar', SideBar);
