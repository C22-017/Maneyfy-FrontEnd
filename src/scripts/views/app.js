import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

import './components/side-bar';
import './components/top-header';
import './components/item-wallet-header';
import './components/item-wallet-kelola';
import './components/item-icon';
import './components/body-tambah-dompet';
import './components/body-edit-dompet';
import './components/body-delete-dompet';
import './components/hero-landing';
import './components/app-bar';
import './components/features-maneyfy';
import './components/register-now';
import './components/skip-link';
import './components/form-login';
import './components/form-register';
import './components/tips-content';

class App {
  constructor({
    content,
  }) {
    this._content = content;
    // this._initialAppShell();
  }

  //   _initialAppShell() {
  //     DrawerInitiator.init({
  //       button: this._button,
  //       itemDrawers: this._itemDrawers,
  //       drawer: this._drawer,
  //       content: this._content,
  //     });
  //   }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    await page.beforeRender();
    this._content.innerHTML = await page.render();
    await page.afterRender();

    // const bodyPd = document.getElementById('body-pd');
    // bodyPd.classList.remove('body-pd');
  }
}

export default App;
