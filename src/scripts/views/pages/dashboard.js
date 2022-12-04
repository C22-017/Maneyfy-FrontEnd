import User from '../../services/api/user';
import Dompet from '../../services/api/dompet';
import HeaderInitiator from '../../utils/initiators/header-initiator';
import { drawerInitiator } from '../../utils/sidebar-propertise';
import { getElement } from '../../utils/element';
import { setupPageUserAlreadyLoggedin } from '../../utils/setup-page';
import { redirectIfNotLoggedin } from '../../utils/redirect-page';
import { getDataLocalStorage } from '../../utils/local-storage-utils';

const Dashboard = {
  async beforeRender() {
    redirectIfNotLoggedin();
  },

  async render() {
    return `
      <top-header></top-header>
      <side-bar></side-bar>

      <main>
        <head-dashboard></head-dashboard>
        <list-category></list-category>
        <choose-month></choose-month>
        <history-transaction></history-transaction>
      </main>
    `;
  },

  async afterRender() {
    try {
      setupPageUserAlreadyLoggedin();

      getElement('#tips-link').classList.remove('active');
      getElement('#dashboard-link').classList.add('active');

      const user = await User.getDataUser();
      const dompets = await Dompet.getAllDompet();
      const selectedDompet = await Dompet.getDataDompetById(getDataLocalStorage().dompet_id);

      this._initContentDashboard(user.data, dompets.data, selectedDompet.result);

      drawerInitiator(); // Jangan diubah posisinya
    } catch (error) {
      console.log(error);
    }
  },

  _initContentDashboard(user, dompets, selectedDompet) {
    HeaderInitiator.init({
      dataUser: user,
      dompetUser: dompets,
      selectedDompet,
      element: getElement('top-header'),
    });
  },
};

export default Dashboard;
