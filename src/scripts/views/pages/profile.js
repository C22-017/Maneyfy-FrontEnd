import kelolaProfile from '../components/kelolaProfile';
import profile from '../components/profile';
import User from '../../services/api/user';
import Dompet from '../../services/api/dompet';
import Icon from '../../services/api/icon';
import HeaderInitiator from '../../utils/initiators/header-initiator';
import EditProfileInitiator from '../../utils/initiators/profile/edit-profile-initiator';
import KelolaDompetInitiator from '../../utils/initiators/profile/kelola-dompet-initiator';
// import KelolaEarningInitiator from '../../utils/initiators/profile/kelola-earning-initiator';
// import KelolaSpendingInitiator from '../../utils/initiators/profile/kelola-spending-initiator';
import { drawerInitiator } from '../../utils/sidebar-propertise';
import { getElement } from '../../utils/element';
import { redirectIfNotLoggedin } from '../../utils/redirect-page';
import { setupPageUserAlreadyLoggedin } from '../../utils/setup-page';
import { getDataLocalStorage, removeDataLocalStorage } from '../../utils/local-storage-utils';

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

      const user = await User.getDataUser();
      const dompets = await Dompet.getAllDompet();
      const selectedDompet = await Dompet.getDataDompetById(getDataLocalStorage().dompet_id);
      const iconDompets = await Icon.getAllIconDompet();

      drawerInitiator(); // Jangan diubah posisinya

      profile(user.data);
      kelolaProfile();

      this._initContentProfile({
        user: user.data,
        dompets: dompets.data,
        selectedDompet: selectedDompet.result,
        iconDompets: iconDompets.data
      });
    } catch (error) {
      console.log(error);
    }
  },

  _initContentProfile({ user, dompets, selectedDompet, iconDompets }) {
    HeaderInitiator.init({
      dataUser: user,
      dompetUser: dompets,
      selectedDompet,
      element: getElement('top-header'),
    });
    EditProfileInitiator.init({
      dataUser: user,
      elementupdateProfileForm: getElement('#update-profile-form'),
    });
    KelolaDompetInitiator.init({
      dataUser: user,
      dompetUser: dompets,
      selectedDompet,
      iconDompets,
    });
  },
};

export default Profile;
