/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import '../styles/main.scss';

import App from './views/app';
// import swRegister from './utils/sw-register';
const bootstrap = require('bootstrap');

const app = new App({
  // button: document.querySelector('#btnMenu'),
  // itemDrawers: document.querySelectorAll('.nav_item'),
  // drawer: document.querySelector('.nav_list'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  // swRegister();
});
