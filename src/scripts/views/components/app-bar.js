import CONFIG from '../../globals/config';

class AppBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" class="logo d-flex align-items-center">
          <img src="${CONFIG.IMAGE_BRAND_LOGO_PATH}" alt="">
        </a>
        <nav id="navbar" class="navbar">  
          <a class="getstarted scrollto" href="#/login">Login</a>
        </nav>
      </div>`;
  }
}

customElements.define('app-bar', AppBar);
