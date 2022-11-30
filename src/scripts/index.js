import 'regenerator-runtime';
import 'bootstrap';
import '../styles/main.scss';

import App from './views/app';

// import swRegister from './utils/sw-register';

const app = new App({
  content: document.querySelector('#body-pd'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  // swRegister();
});
