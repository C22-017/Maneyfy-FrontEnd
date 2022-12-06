import { getElement } from './element';

const setupToggleShowPasswordRegister = (formRegister) => {
  const inputPassword = formRegister.elements.namedItem('password');
  const inputConfirmPassword = formRegister.elements.namedItem('confirmPassword');

  const elementIconPassword = getElement('#icon-show-password-regis');
  const elementIconConfirmPassword = getElement('#icon-show-confirm-password');

  getElement('#toggleShowPwRegis').addEventListener('click', () => {
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
      elementIconPassword.classList.remove('bxs-show');
      elementIconPassword.classList.add('bxs-hide');
    } else {
      inputPassword.type = 'password';
      elementIconPassword.classList.remove('bxs-hide');
      elementIconPassword.classList.add('bxs-show');
    }
  });

  getElement('#toggleShowConfirmPw').addEventListener('click', () => {
    if (inputConfirmPassword.type === 'password') {
      inputConfirmPassword.type = 'text';
      elementIconConfirmPassword.classList.remove('bxs-show');
      elementIconConfirmPassword.classList.add('bxs-hide');
    } else {
      inputConfirmPassword.type = 'password';
      elementIconConfirmPassword.classList.remove('bxs-hide');
      elementIconConfirmPassword.classList.add('bxs-show');
    }
  });
}

const setupToggleShowPasswordLogin = (formLogin) => {
  const inputPassword = formLogin.elements.namedItem('password');
  const elementIcon = getElement('#icon-show-password');

  getElement('#toggleShowPwLogin').addEventListener('click', () => {
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
      elementIcon.classList.remove('bxs-show');
      elementIcon.classList.add('bxs-hide');
    } else {
      inputPassword.type = 'password';
      elementIcon.classList.remove('bxs-hide');
      elementIcon.classList.add('bxs-show');
    }
  });
}

export { setupToggleShowPasswordRegister, setupToggleShowPasswordLogin };