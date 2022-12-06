import { removeDataLocalStorage } from '../../local-storage-utils';
import User from '../../../services/api/user';
import { showLoading, hideLoading } from '../spinner-initiator';

const EditProfileInitiator = {
  init({
    dataUser, elementupdateProfileForm,
  }) {
    this._user = dataUser;
    this._elementupdate = elementupdateProfileForm;

    this._updateProfileProcess();
    this._deleteProfileProcess();
  },

  _updateProfileProcess() {
    try {
      this._elementupdate.addEventListener('submit', async (e) => {
        e.preventDefault();
        const inputName = this._elementupdate.elements.namedItem('name').value;
        const inputEmail = this._elementupdate.elements.namedItem('email').value;
        const inputFile = this._elementupdate.elements.namedItem('file').files[0];

        if (inputName.length < 3) {
          alert('Nama setidaknya harus 3 karakter');
          return false;
        }

        const { profile_picture } = this._user;
        const file = (!inputFile) ? profile_picture : inputFile;

        showLoading();
        const responseUpdateUser = await User.updateDataUser(inputName, inputEmail, file);
        hideLoading();

        if (responseUpdateUser.msg === 'Data updated successfully') {
          alert('Profil akun berhasil diperbaharui');
          location.reload();
        } else {
          alert(responseUpdateUser.msg);
        }
      });
    } catch (error) {
      console.log(error);
    }
  },

  _deleteProfileProcess() {
    try {
      document.querySelector('#btnDeleteUser').addEventListener('click', async () => {
        showLoading();
        const responseDelete = await User.deleteUser();
        hideLoading();

        if (responseDelete.msg === 'User berhasil dihapus') {
          alert('Anda telah menghapus akun. Silahkan daftar kembali.');
          removeDataLocalStorage();
          location.href = '#/login';
          location.reload();
        } else {
          alert(responseDelete.msg);
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default EditProfileInitiator;
