import CONFIG from './config';

const API_ENDPOINT = {
  // AUTH //
  LOGIN: `${CONFIG.BASE_URL}login`,
  REGISTER: `${CONFIG.BASE_URL}register`,

  // USER //
  GET_DATA_USER: `${CONFIG.BASE_URL}user/data`,
  UPDATE_DATA_USER: `${CONFIG.BASE_URL}user`,
  DELETE_USER: `${CONFIG.BASE_URL}user/delete`,

  // DOMPET //
  CREATE_AND_GET_ALL_DOMPET: `${CONFIG.BASE_URL}dompet`,
  GET_UPDATE_DELETE_DATA_DOMPET_BY_ID: (id) => `${CONFIG.BASE_URL}dompet/${id}`,
  GET_ALL_TRANSACTION_BY_ID_DOMPET: (id) => `${CONFIG.BASE_URL}dompet/${id}/transaction`,

  // TRANSACTION //
  CREATE_AND_GET_ALL_TRANSACTION: `${CONFIG.BASE_URL}transaction`,
  GET_UPDATE_DELETE_TRANSACTION_BY_ID: (id) => `${CONFIG.BASE_URL}transaction/${id}`,

  // CATEGORY EARNING //
  CREATE_AND_GET_ALL_CATEGORY_EARNING: `${CONFIG.BASE_URL}categoryEarning`,
  GET_UPDATE_DELETE_CATEGORY_EARNING_BY_ID: (id) => `${CONFIG.BASE_URL}categoryEarning/${id}`,

  // CATEGORY SPENDING //
  CREATE_AND_GET_ALL_CATEGORY_SPENDING: `${CONFIG.BASE_URL}categorySpending`,
  GET_UPDATE_DELETE_CATEGORY_SPENDING_BY_ID: (id) => `${CONFIG.BASE_URL}categorySpending/${id}`,

  // ICON //
  GET_ALL_ICON_DOMPET: `${CONFIG.BASE_URL}iconDompet`,
  GET_ALL_ICON_EARNING: `${CONFIG.BASE_URL}iconEarning`,
  GET_ALL_ICON_SPENDING: `${CONFIG.BASE_URL}iconSpending`,
};

export default API_ENDPOINT;
