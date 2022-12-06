import kelolaProfile from '../components/kelolaProfile';
import profile from '../components/profile';
import User from '../../services/api/user';
import Dompet from '../../services/api/dompet';
import CategoryEarning from '../../services/api/categoryEarning';
import CategorySpending from '../../services/api/categorySpending';
import Icon from '../../services/api/icon';
import HeaderInitiator from '../../utils/initiators/header-initiator';
import EditProfileInitiator from '../../utils/initiators/profile/edit-profile-initiator';
import KelolaDompetInitiator from '../../utils/initiators/profile/kelola-dompet-initiator';
import KelolaEarningInitiator from '../../utils/initiators/profile/kelola-earning-initiator';
import KelolaSpendingInitiator from '../../utils/initiators/profile/kelola-spending-initiator';
import { drawerInitiator } from '../../utils/sidebar-propertise';
import { getElement } from '../../utils/element';
import { redirectIfNotLoggedin } from '../../utils/redirect-page';
import { setupPageUserAlreadyLoggedin } from '../../utils/setup-page';
import { getDataLocalStorage } from '../../utils/local-storage-utils';
import { showLoading, hideLoading } from '../../utils/initiators/spinner-initiator';


const Profile = {
  async beforeRender() {
    redirectIfNotLoggedin();
  },

  async render() {
    return `
        <top-header></top-header>
        <side-bar></side-bar>
  
        <main class="container px-0">
            <h1 class="titlePage mb-4 pt-3">Profil Saya</h1>

            <section class="profil mb-4 d-flex w-100 justify-content-center shadow-sm">
            </section>

            <section class="kelola row shadow-sm mx-0">
            </section>
        </main>

        <spinner-element></spinner-element>
    `;
  },

  async afterRender() {
    try {
      setupPageUserAlreadyLoggedin();

      getElement('#dashboard-link').classList.remove('active');
      getElement('#tips-link').classList.remove('active');

      showLoading();
      const user = await User.getDataUser();
      const dompets = await Dompet.getAllDompet();
      const selectedDompet = await Dompet.getDataDompetById(getDataLocalStorage().dompet_id);
      const iconDompets = await Icon.getAllIconDompet();

      const categoryEarnings = await CategoryEarning.getAllCategoryEarning();
      const iconEarnings = await Icon.getAllIconEarning();

      const categorySpendings = await CategorySpending.getAllCategorySpending();
      const iconSpendings = await Icon.getAllIconSpending();


      // Jangan diubah posisinya //
      profile(user.data);
      kelolaProfile();

      this._initContentProfile({
        user: user.data,
        dompets: dompets.data,
        selectedDompet: selectedDompet.result,
        iconDompets: iconDompets.data,
        categoryEarnings: categoryEarnings.data,
        iconEarnings: iconEarnings.data,
        categorySpendings: categorySpendings.data,
        iconSpendings: iconSpendings.data,
      });

      drawerInitiator();
      hideLoading();
      // Jangan diubah posisinya //
    } catch (error) {
      console.log(error);
    }
  },

  _initContentProfile({
    user, dompets, selectedDompet, iconDompets,
    categoryEarnings, iconEarnings, categorySpendings, iconSpendings,
  }) {
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
    KelolaEarningInitiator.init({
      dataUser: user,
      categoryEarnings,
      iconEarnings,
    });
    KelolaSpendingInitiator.init({
      dataUser: user,
      categorySpendings,
      iconSpendings,
    });
  },
};

export default Profile;
