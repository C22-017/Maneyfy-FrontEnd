import API_ENDPOINT from '../../globals/api-endpoint';
import { getDataLocalStorage } from '../../utils/local-storage-utils';

class User {
  static async getUserData() {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    const response = await fetch(API_ENDPOINT.GET_USER_DATA, requestOptions);
    return response.json();
  }

  // static async getDompetData(name, email, password) {
  //   const myHeaders = new Headers();
  //   myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  //   const urlencoded = new URLSearchParams();
  //   urlencoded.append('name', name);
  //   urlencoded.append('email', email);
  //   urlencoded.append('password', password);

  //   const requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: urlencoded,
  //   };

  //   const response = await fetch(API_ENDPOINT.REGISTER, requestOptions);
  //   return response.json();
  // }
}

export default User;
