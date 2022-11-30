import { getDataLocalStorage } from './local-storage-utils';

const redirectIfNotLoggedin = () => {
  if (getDataLocalStorage() === null) {
    location.replace(`${location.origin}`);
  }
};

const redirectIfAlreadytLoggedin = () => {
  if (getDataLocalStorage() !== null) {
    if (getDataLocalStorage().token !== null) {
      location.replace('#/dashboard');
    }
  }
};

export { redirectIfNotLoggedin, redirectIfAlreadytLoggedin };
