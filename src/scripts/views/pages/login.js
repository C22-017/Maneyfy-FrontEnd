import Auth from '../../services/api/auth';
import { getElement } from '../../utils/element';
import { saveDataToLocalStorage } from '../../utils/local-storage-utils';
import { redirectIfAlreadytLoggedin } from '../../utils/redirect-page';
import { setupPageUserNotLoggedin } from '../../utils/setup-page';
import { setupToggleShowPasswordLogin } from '../../utils/show-password';
import { showLoading, hideLoading } from '../../utils/initiators/spinner-initiator';

const Login = {
  async beforeRender() {
    redirectIfAlreadytLoggedin();
  },

  async render() {
    return `
      <form-login></form-login>
      <spinner-element></spinner-element>
  `;
  },

  async afterRender() {
    try {
      setupPageUserNotLoggedin();

      const formLogin = getElement('#login-form');
      setupToggleShowPasswordLogin(formLogin);

      formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        const inputEmail = formLogin.elements.namedItem('email').value;
        const inputPassword = formLogin.elements.namedItem('password').value;

        if (inputPassword.length < 8) {
          alert('Password yang dimasukkan harus 8 karakter');
          return false;
        }

        showLoading();
        const responseLogin = await Auth.login(inputEmail, inputPassword);
        hideLoading();

        if (responseLogin.msg === 'Login Success') {
          saveDataToLocalStorage(responseLogin.dataDompet[0].id, responseLogin.token);

          formLogin.elements.namedItem('email').value = '';
          formLogin.elements.namedItem('password').value = '';

          location.href = '#/dashboard';
        } else if (responseLogin.msg === 'Email not registered') {
          alert('Email belum terdaftar. Silahkan register terlebih dahulu');
          location.href = '#/register';
        } else if (responseLogin.msg === 'Wrong email or password') {
          alert('Password yang dimasukkan salah');
          return false;
        } else {
          alert(responseLogin.msg);
        }
      });
    } catch (error) {
      console.log(error);
    }
  },

};
export default Login;
