import CONFIG from '../../globals/config';
import { removeDataLocalStorage } from '../../utils/local-storage-utils';

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
          <button class="nav_logout" data-bs-toggle="modal" data-bs-target="#keluarAkun">
            <i class='bx bx-log-out bx-rotate-180 large'></i>
            <span class="nav_name">Keluar Akun</span>
          </button>
        </nav>
      </div>
      
      <div class="modal fade" id="keluarAkun" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">Keluar Akun?</h4>
              <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body modal-confirm">
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

customElements.define('side-bar', SideBar);
