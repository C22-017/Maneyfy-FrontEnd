import CONFIG from '../globals/config';

const getDataLocalStorage = () => {
  const data = localStorage.getItem(CONFIG.STORAGE_KEY);
  return JSON.parse(data);
};

const saveDataToLocalStorage = (dompetId, token) => {
  const object = {
    dompet_id: dompetId,
    token,
  };
  const parsed = JSON.stringify(object);
  localStorage.setItem(CONFIG.STORAGE_KEY, parsed);
};

export {
  getDataLocalStorage,
  saveDataToLocalStorage,
};
