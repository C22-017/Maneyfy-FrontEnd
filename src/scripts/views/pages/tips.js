import User from '../../services/api/user';
import ProfileHeaderInitiator from '../../utils/initiators/profile-header-initiator';
import { drawerInitiator } from '../../utils/sidebar-propertise';
import { getElement } from '../../utils/element';
import { redirectIfNotLoggedin } from '../../utils/redirect-page';
import { setupPageUserAlreadyLoggedin } from '../../utils/setup-page';

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

      const dataUser = await User.getUserData();
      this._initContentTips(dataUser.data);

      drawerInitiator(); // Jangan diubah posisinya
    } catch (error) {
      console.log(error);
    }
  },

  _initContentTips(data) {
    ProfileHeaderInitiator.init({
      dataUser: data,
      element: getElement('top-header'),
    });
  },
};

export default Tips;
