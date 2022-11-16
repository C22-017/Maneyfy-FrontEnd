// import DrawerInitiator from '../utils/initiators/drawer-initiator';
// import UrlParser from '../routes/url-parser';
// import routes from '../routes/routes';

import './components/hero-element';
// import './components/item-restaurant';
// import './components/detail-restaurant-info';
// import './components/item-menu-drink';
// import './components/item-menu-food';
// import './components/item-review-resto';
// import './components/search-restaurant';
// import './components/favorite-button';

// class App {
//   constructor({
//     button, itemDrawers, drawer, content,
//   }) {
//     this._button = button;
//     this._itemDrawers = itemDrawers;
//     this._drawer = drawer;
//     this._content = content;

//     this._initialAppShell();
//   }

//   _initialAppShell() {
//     DrawerInitiator.init({
//       button: this._button,
//       itemDrawers: this._itemDrawers,
//       drawer: this._drawer,
//       content: this._content,
//     });
//   }

//   async renderPage() {
//     const url = UrlParser.parseActiveUrlWithCombiner();
//     const page = routes[url];
//     this._content.innerHTML = await page.render();
//     await page.afterRender();

//     const skipLinkElem = document.querySelector('.skip-link');
//     skipLinkElem.addEventListener('click', (event) => {
//       event.preventDefault();
//       document.querySelector('#mainContent').focus();
//     });
//   }
// }

// export default App;
