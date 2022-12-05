import User from '../../services/api/user';
import Dompet from '../../services/api/dompet';
import HeaderInitiator from '../../utils/initiators/header-initiator';
import TransactionInitiator from '../../utils/initiators/dashboard/transaction-initiator';
import CategoryEarning from '../../services/api/categoryEarning';
import CategorySpending from '../../services/api/categorySpending';
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

      const categoryEarnings = await CategoryEarning.getAllCategoryEarning();
      const categorySpendings = await CategorySpending.getAllCategorySpending();

      getElement('history-transaction').dompetSelected = selectedDompet.result;

      this._initContentDashboard({
        user: user.data,
        dompets: dompets.data,
        selectedDompet: selectedDompet.result,
        categoryEarnings: categoryEarnings.data,
        categorySpendings: categorySpendings.data,
      });

      drawerInitiator();
    } catch (error) {
      console.log(error);
    }
  },

  _initContentDashboard({
    user, dompets, selectedDompet,
    categoryEarnings, categorySpendings,
  }) {
    HeaderInitiator.init({
      dataUser: user,
      dompetUser: dompets,
      selectedDompet,
      element: getElement('top-header'),
    });
    TransactionInitiator.init({
      selectedDompet,
      categoryEarnings,
      categorySpendings,
      element: getElement('list-category'),
    });
  },
};

export default Dashboard;
