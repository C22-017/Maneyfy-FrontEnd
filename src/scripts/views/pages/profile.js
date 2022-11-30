import kelolaProfile from '../components/kelolaProfile';
import profile from '../components/profile';
import User from '../../services/api/user';
import ProfileHeaderInitiator from '../../utils/initiators/profile-header-initiator';
import { drawerInitiator } from '../../utils/sidebar-propertise';
import { getElement } from '../../utils/element';
import { redirectIfNotLoggedin } from '../../utils/redirect-page';
import { setupPageUserAlreadyLoggedin } from '../../utils/setup-page';

const Profile = {
  async beforeRender() {
    redirectIfNotLoggedin();
  },

  async render() {
    return `
        <top-header></top-header>
        <side-bar></side-bar>
  
        <main class="container">
            <h1 class="titlePage mb-5 pt-3">Profil Saya</h1>

            <section class="profil mb-5 row shadow-sm">
            </section>

            <section class="kelola row shadow-sm">
            </section>
        </main>
    `;
  },

  async afterRender() {
    try {
      setupPageUserAlreadyLoggedin();

      getElement('#dashboard-link').classList.remove('active');
      getElement('#tips-link').classList.remove('active');

      const dataUser = await User.getUserData();
      this._initContentProfile(dataUser.data);

      drawerInitiator(); // Jangan diubah posisinya

      profile(dataUser.data);
      kelolaProfile();
    } catch (error) {
      console.log(error);
    }
  },

  _initContentProfile(data) {
    ProfileHeaderInitiator.init({
      dataUser: data,
      element: getElement('top-header'),
    });
  },
};

export default Profile;
