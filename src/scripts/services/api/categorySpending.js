import API_ENDPOINT from '../../globals/api-endpoint';
import { getDataLocalStorage } from '../../utils/local-storage-utils';

class CategorySpending {
  static async getAllCategorySpending() {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    const response = await fetch(API_ENDPOINT.CREATE_AND_GET_ALL_CATEGORY_SPENDING, requestOptions);
    return response.json();
  }

  static async createCategorySpending(data) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);
    // myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const { icSpendingId, categoryNameSpending } = data;

    const urlencoded = new URLSearchParams();
    urlencoded.append('icSpending_id', icSpendingId);
    urlencoded.append('categoryName_Spending', categoryNameSpending);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    };

    const response = await fetch(API_ENDPOINT.CREATE_AND_GET_ALL_CATEGORY_SPENDING, requestOptions);
    return response.json();
  }

  static async getCategorySpendingById(id) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    const response = await fetch(
      API_ENDPOINT.GET_UPDATE_DELETE_CATEGORY_SPENDING_BY_ID(id),
      requestOptions,
    );
    return response.json();
  }

  static async updateCategorySpendingById(id, data) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);
    // myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const { icSpendingId, categoryNameSpending } = data;

    const urlencoded = new URLSearchParams();
    urlencoded.append('icSpending_id', icSpendingId);
    urlencoded.append('categoryName_Spending', categoryNameSpending);

    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: urlencoded,
    };

    const response = await fetch(
      API_ENDPOINT.GET_UPDATE_DELETE_CATEGORY_SPENDING_BY_ID(id),
      requestOptions,
    );
    return response.json();
  }

  static async deleteCategorySpendingById(id) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);

    const requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
    };

    const response = await fetch(
      API_ENDPOINT.GET_UPDATE_DELETE_CATEGORY_SPENDING_BY_ID(id),
      requestOptions,
    );
    return response.json();
  }
}

export default CategorySpending;
