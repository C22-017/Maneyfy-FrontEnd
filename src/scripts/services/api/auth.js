import API_ENDPOINT from '../../globals/api-endpoint';

class Auth {
  static async login(email, password) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const urlencoded = new URLSearchParams();
    urlencoded.append('email', email);
    urlencoded.append('password', password);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    };

    const response = await fetch(API_ENDPOINT.LOGIN, requestOptions);
    return response.json();
  }

  static async register(name, email, password) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const urlencoded = new URLSearchParams();
    urlencoded.append('name', name);
    urlencoded.append('email', email);
    urlencoded.append('password', password);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    };

    const response = await fetch(API_ENDPOINT.REGISTER, requestOptions);
    return response.json();
  }
}

export default Auth;
