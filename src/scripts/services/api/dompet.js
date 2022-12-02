import API_ENDPOINT from '../../globals/api-endpoint';
import { getDataLocalStorage } from '../../utils/local-storage-utils';

class Dompet {
  static async getAllDompet() {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    const response = await fetch(API_ENDPOINT.CREATE_AND_GET_ALL_DOMPET, requestOptions);
    return response.json();
  }

  static async createDompet(icDompetId, nameDompet) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);
    // myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const urlencoded = new URLSearchParams();
    urlencoded.append('icDompet_id', icDompetId);
    urlencoded.append('name_dompet', nameDompet);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    };

    const response = await fetch(API_ENDPOINT.CREATE_AND_GET_ALL_DOMPET, requestOptions);
    return response.json();
  }

  static async getDataDompetById(id) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    const response = await fetch(
      API_ENDPOINT.GET_UPDATE_DELETE_DATA_DOMPET_BY_ID(id),
      requestOptions,
    );
    return response.json();
  }

  static async updateDompetById(id, icDompetId, nameDompet) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);
    // myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const urlencoded = new URLSearchParams();
    urlencoded.append('icDompet_id', icDompetId);
    urlencoded.append('name_dompet', nameDompet);

    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: urlencoded,
    };

    const response = await fetch(
      API_ENDPOINT.GET_UPDATE_DELETE_DATA_DOMPET_BY_ID(id),
      requestOptions,
    );
    return response.json();
  }

  static async deleteDompet(id) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);

    const requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
    };

    const response = await fetch(
      API_ENDPOINT.GET_UPDATE_DELETE_DATA_DOMPET_BY_ID(id),
      requestOptions,
    );
    return response.json();
  }
}

export default Dompet;
