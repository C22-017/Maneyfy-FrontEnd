import User from '../../services/api/user';
import Dompet from '../../services/api/dompet';
import HeaderInitiator from '../../utils/initiators/header-initiator';
import { drawerInitiator } from '../../utils/sidebar-propertise';
import { getElement } from '../../utils/element';
import { redirectIfNotLoggedin } from '../../utils/redirect-page';
import { setupPageUserAlreadyLoggedin } from '../../utils/setup-page';
import { getDataLocalStorage } from '../../utils/local-storage-utils';

const Tips = {
  async beforeRender() {
    redirectIfNotLoggedin();
  },

  async render() {
    return `
        <top-header></top-header>
        <side-bar></side-bar>
  
        <main class="container">
          <tips-content></tips-content>
        </main>
    `;
  },

  async afterRender() {
    try {
      setupPageUserAlreadyLoggedin();

      getElement('#dashboard-link').classList.remove('active');
      getElement('#tips-link').classList.add('active');

      const user = await User.getDataUser();
      const dompets = await Dompet.getAllDompet();
      const selectedDompet = await Dompet.getDataDompetById(getDataLocalStorage().dompet_id);

      this._initContentTips(user.data, dompets.data, selectedDompet.result);

      drawerInitiator(); // Jangan diubah posisinya
    } catch (error) {
      console.log(error);
    }
  },

  _initContentTips(user, dompets, selectedDompet) {
    HeaderInitiator.init({
      dataUser: user,
      dompetUser: dompets,
      selectedDompet,
      element: getElement('top-header'),
    });
  },
};

export default Tips;
