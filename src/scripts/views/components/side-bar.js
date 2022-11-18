// import CONFIG from '../../globals/config';

class SideBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <div class="l-navbar" id="nav-bar">
            <nav class="nav">
                <div> <a href="#" class="nav_logo"> <i class='bx bx-layer nav_logo-icon'></i> <span
                            class="nav_logo-name">BBBootstrap</span> </a>
                    <div class="nav_list">
                        <a href="#" class="nav_link active"> <i class='bx bx-grid-alt nav_icon'></i>
                            <span class="nav_name">
                                Dashboard
                            </span>
                        </a>
                        <a href="#" class="nav_link"> <i class='bx bx-user nav_icon'></i>
                            <span class="nav_name">
                                Users
                            </span>
                        </a>
                    </div>
                </div>
                <a href="#" class="nav_link">
                    <i class='bx bx-log-out bx-rotate-180 large'></i>
                    <span class="nav_name">
                        Keluar Akun
                    </span>
                </a>
            </nav>
        </div>
    `;
  }
}

customElements.define('side-bar', SideBar);
