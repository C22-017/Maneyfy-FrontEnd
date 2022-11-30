import CONFIG from './config';

const API_ENDPOINT = {
  // AUTH //
  LOGIN: `${CONFIG.BASE_URL}login`,
  REGISTER: `${CONFIG.BASE_URL}register`,
  // USER //
  GET_USER_DATA: `${CONFIG.BASE_URL}user/data`,
  UPDATE_DATA_USER: `${CONFIG.BASE_URL}user`,
  DELETE_USER: `${CONFIG.BASE_URL}user/delete`,
};

export default API_ENDPOINT;
