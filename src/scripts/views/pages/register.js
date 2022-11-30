import Auth from '../../services/api/auth';
import { getElement } from '../../utils/element';
import { redirectIfAlreadytLoggedin } from '../../utils/redirect-page';
import { setupPageUserNotLoggedin } from '../../utils/setup-page';

const Register = {
  async beforeRender() {
    redirectIfAlreadytLoggedin();
  },

  async render() {
    return `
      <form-register></form-register>
  `;
  },

  async afterRender() {
    try {
      setupPageUserNotLoggedin();

      const formRegister = getElement('#register-form');

      formRegister.addEventListener('submit', async (e) => {
        e.preventDefault();
        const inputName = formRegister.elements.namedItem('name').value;
        const inputEmail = formRegister.elements.namedItem('email').value;
        const inputPassword = formRegister.elements.namedItem('password').value;
        const inputConfirmPassword = formRegister.elements.namedItem('confirmPassword').value;

        if (inputName.length < 3) {
          alert('Nama setidaknya harus 3 karakter');
          return false;
        }

        if (inputPassword.length < 8) {
          alert('Password setidaknya harus 8 karakter');
          return false;
        }

        if (inputPassword !== inputConfirmPassword) {
          alert('Password yang dimasukkan tidak sama');
          return false;
        }

        const responseRegister = await Auth.register(inputName, inputEmail, inputPassword);
        if (responseRegister.msg === 'User created successfully') {
          alert('Register akun berhasil. Silahkan login');

          formRegister.elements.namedItem('name').value = '';
          formRegister.elements.namedItem('email').value = '';
          formRegister.elements.namedItem('password').value = '';
          formRegister.elements.namedItem('confirmPassword').value = '';

          location.href = '#/login';
        } else {
          alert(responseRegister.msg);
        }
      });
    } catch (error) {
      console.log(error);
    }
  },

};
export default Register;
