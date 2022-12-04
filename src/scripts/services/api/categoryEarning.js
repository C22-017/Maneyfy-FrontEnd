import API_ENDPOINT from '../../globals/api-endpoint';
import { getDataLocalStorage } from '../../utils/local-storage-utils';

class CategoryEarning {
  static async getAllCategoryEarning() {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    const response = await fetch(API_ENDPOINT.CREATE_AND_GET_ALL_CATEGORY_EARNING, requestOptions);
    return response.json();
  }

  static async createCategoryEarning(data) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);

    const { icEarningId, categoryNameEarning } = data;

    const urlencoded = new URLSearchParams();
    urlencoded.append('icEarning_id', icEarningId);
    urlencoded.append('categoryName_earning', categoryNameEarning);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    };

    const response = await fetch(API_ENDPOINT.CREATE_AND_GET_ALL_CATEGORY_EARNING, requestOptions);
    return response.json();
  }

  static async getCategoryEarningById(id) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    const response = await fetch(
      API_ENDPOINT.GET_UPDATE_DELETE_CATEGORY_EARNING_BY_ID(id),
      requestOptions,
    );
    return response.json();
  }

  static async updateCategoryEarningById(id, data) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);

    const { icEarningId, categoryNameEarning } = data;

    const urlencoded = new URLSearchParams();
    urlencoded.append('icEarning_id', icEarningId);
    urlencoded.append('categoryName_earning', categoryNameEarning);

    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: urlencoded,
    };

    const response = await fetch(
      API_ENDPOINT.GET_UPDATE_DELETE_CATEGORY_EARNING_BY_ID(id),
      requestOptions,
    );
    return response.json();
  }

  static async deleteCategoryEarningById(id, typeTransaction) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);

    const urlencoded = new URLSearchParams();
    urlencoded.append('typeTransaction', typeTransaction);

    const requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: urlencoded,
    };

    const response = await fetch(
      API_ENDPOINT.GET_UPDATE_DELETE_CATEGORY_EARNING_BY_ID(id),
      requestOptions,
    );
    return response.json();
  }
}

export default CategoryEarning;
