import API_ENDPOINT from '../../globals/api-endpoint';
import { getDataLocalStorage } from '../../utils/local-storage-utils';

class User {
  static async getDataUser() {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    const response = await fetch(API_ENDPOINT.GET_DATA_USER, requestOptions);
    return response.json();
  }

  static async updateDataUser(name, email, file) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('profile_picture', file);

    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: formData,
    };

    const response = await fetch(API_ENDPOINT.UPDATE_DATA_USER, requestOptions);
    return response.json();
  }

  static async deleteUser() {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);

    const requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
    };

    const response = await fetch(API_ENDPOINT.DELETE_USER, requestOptions);
    return response.json();
  }
}

export default User;
