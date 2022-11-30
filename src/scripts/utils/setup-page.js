import { getElement } from './element';

const setupPageUserNotLoggedin = () => {
  const bodyPd = getElement('#body-pd');
  bodyPd.classList.remove('body-pd');
  bodyPd.classList.remove('body-logged-in');
};

const setupPageUserAlreadyLoggedin = () => {
  const bodyPd = getElement('#body-pd');
  bodyPd.classList.remove('body-pd');
  bodyPd.classList.add('body-logged-in');
};

export { setupPageUserNotLoggedin, setupPageUserAlreadyLoggedin };
