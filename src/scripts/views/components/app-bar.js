class AppBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <div class="brand_logo">
          <a href="index.html">
            <picture>
              <source type="image/webp" srcset="${CONFIG.IMAGE_BRAND_LOGO_PATH}.webp">
              <source type="image/png" srcset="${CONFIG.IMAGE_BRAND_LOGO_PATH}.png">
              <img src="${CONFIG.IMAGE_BRAND_LOGO_PATH}.png" alt="Find Foods">
            </picture>
          </a>
        </div>
      
        <div class="hamburger">
          <button id="btnMenu" aria-label="menu open"><span class="material-icons">menu</a></button>
        </div>
      
        <nav id="drawer" class="nav">
          <ul class="nav_list">
            <li class="nav_item"><a href="#/home"><span class="material-icons" aria-hidden="true">home</span> Home</a></li>
            <li class="nav_item"><a href="#/favorite"><span class="material-icons" aria-hidden="true">favorite</span> Favorite</a></li>
            <li class="nav_item"><a href="https://github.com/TegarNH" target="_blank" rel="noopener"><span class="material-icons" aria-hidden="true">person</span> About Us</a></li>
          </ul>
        </nav>`;
  }
}

customElements.define('app-bar', AppBar);
