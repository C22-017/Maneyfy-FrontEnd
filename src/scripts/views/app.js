// import DrawerInitiator from '../utils/initiators/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

import './components/app-bar';
import './components/side-bar';
import './components/top-header';
import './components/skip-link-element';

// import './components/hero-element';
// import './components/item-restaurant';
// import './components/detail-restaurant-info';
// import './components/item-menu-drink';
// import './components/item-menu-food';
// import './components/item-review-resto';
// import './components/search-restaurant';
// import './components/favorite-button';

class App {
  // constructor({
  //   button, itemDrawers, drawer, content,
  // }) {
  //   this._button = button;
  //   this._itemDrawers = itemDrawers;
  //   this._drawer = drawer;
  //   this._content = content;

  //   // this._initialAppShell();
  // }
  constructor({
    content,
  }) {
    // this._button = button;
    // this._itemDrawers = itemDrawers;
    // this._drawer = drawer;
    this._content = content;

    // this._initialAppShell();
  }

  // _initialAppShell() {
  //   DrawerInitiator.init({
  //     button: this._button,
  //     itemDrawers: this._itemDrawers,
  //     drawer: this._drawer,
  //     content: this._content,
  //   });
  // }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML += await page.render();
    this._content.innerHTML += `
      <script src="https://code.iconify.design/3/3.0.0/iconify.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
    `;
    // await page.afterRender();

    // const skipLinkElem = document.querySelector('.skip-link');
    // skipLinkElem.addEventListener('click', (event) => {
    //   event.preventDefault();
    //   document.querySelector('#mainContent').focus();
    // });

    const showNavbar = (toggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);
      const bodypd = document.getElementById(bodyId);
      const headerpd = document.getElementById(headerId);
      // const navName = document.querySelectorAll(navNameAll);

      // Validate that all variables exist
      if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
          // show navbar
          nav.classList.toggle('show');
          // change icon
          toggle.classList.toggle('bx-x');
          // add padding to body
          bodypd.classList.toggle('body-pd');
          // add padding to header
          headerpd.classList.toggle('body-pd');
          // navName.forEach((navItem) => {
          //   navItem.classList.toggle('show-nav-name');
          // });
        });
      }
    };

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

    /*= ==== LINK ACTIVE ===== */
    const linkColor = document.querySelectorAll('.nav_link');

    function colorLink() {
      if (linkColor) {
        linkColor.forEach((l) => l.classList.remove('active'));
        this.classList.add('active');
      }
    }
    linkColor.forEach((l) => l.addEventListener('click', colorLink));
  }
}

export default App;
