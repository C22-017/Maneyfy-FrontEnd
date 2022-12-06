import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

import './components/spinner-element';
import './components/side-bar';
import './components/top-header';
import './components/item-icon';
import './components/item-wallet-header';
import './components/item-category';

import './components/body-tambah-dompet';
import './components/body-edit-dompet';
import './components/body-delete-dompet';

import './components/body-tambah-earning';
import './components/body-edit-earning';
import './components/body-delete-earning';

import './components/body-tambah-spending';
import './components/body-edit-spending';
import './components/body-delete-spending';

import './components/item-wallet-kelola';
import './components/item-earning-kelola';
import './components/item-spending-kelola';

import './components/hero-landing';
import './components/app-bar';
import './components/features-maneyfy';
import './components/register-now';
import './components/skip-link';
import './components/form-login';
import './components/form-register';
import './components/tips-content';

import './components/header-dashboard';
import './components/kategoriList-dashboard';
import './components/chooseMonth-dashboard';
import './components/historiTransaksi-dashboard';

import './components/body-detail-transaction';
import './components/body-delete-transaction';
import './components/body-edit-transaction';
import './components/body-add-transaction';

import './components/item-history-transaction';

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
  }
}

export default App;
