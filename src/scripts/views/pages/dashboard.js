import User from '../../services/api/user';
import ProfileHeaderInitiator from '../../utils/initiators/profile-header-initiator';
import { drawerInitiator } from '../../utils/sidebar-propertise';
import { getElement } from '../../utils/element';
import { setupPageUserAlreadyLoggedin } from '../../utils/setup-page';
import { redirectIfNotLoggedin } from '../../utils/redirect-page';

const Dashboard = {
  async beforeRender() {
    redirectIfNotLoggedin();
  },

  async render() {
    return `
      <top-header></top-header>
      <side-bar></side-bar>

      <main class="container">
        <h4>Main Components</h4>
      </main>
    `;
  },

  async afterRender() {
    try {
      setupPageUserAlreadyLoggedin();

      getElement('#tips-link').classList.remove('active');
      getElement('#dashboard-link').classList.add('active');

      const dataUser = await User.getUserData();
      this._initContentDashboard(dataUser.data);

      drawerInitiator(); // Jangan diubah posisinya
    } catch (error) {
      console.log(error);
    }
  },

  _initContentDashboard(data) {
    ProfileHeaderInitiator.init({
      dataUser: data,
      element: getElement('top-header'),
    });
  },
};

export default Dashboard;
