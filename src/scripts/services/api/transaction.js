import API_ENDPOINT from '../../globals/api-endpoint';
import { getDataLocalStorage } from '../../utils/local-storage-utils';

class Transaction {
  static async getAllTransaction(id, dataParams) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);

    const { month, year } = dataParams;

    const urlIncludeParams = new URL(API_ENDPOINT.CREATE_AND_GET_ALL_TRANSACTION);
    urlIncludeParams.searchParams.append('month', month);
    urlIncludeParams.searchParams.append('year', year);

    const urlencoded = new URLSearchParams();
    urlencoded.append('dompet_id', id);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: urlencoded,
    };

    const response = await fetch(urlIncludeParams, requestOptions);
    return response.json();
  }

  static async createTransaction(data) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);
    // myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const {
      typeTransaction, categoryTransactionId, dompetId,
      amountTransaction, nameTransaction, dateTransaction,
    } = data;

    const urlencoded = new URLSearchParams();
    urlencoded.append('type_transaction', typeTransaction);
    urlencoded.append('categoryTransaction_id', categoryTransactionId);
    urlencoded.append('dompet_id', dompetId);
    urlencoded.append('amount_transaction', amountTransaction);
    urlencoded.append('name_transaction', nameTransaction);
    urlencoded.append('date_transaction', dateTransaction);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    };

    const response = await fetch(API_ENDPOINT.CREATE_AND_GET_ALL_TRANSACTION, requestOptions);
    return response.json();
  }

  static async getDetailTransactionById(id) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    const response = await fetch(
      API_ENDPOINT.GET_UPDATE_DELETE_TRANSACTION_BY_ID(id),
      requestOptions,
    );
    return response.json();
  }

  static async updateTransactionById(id, data) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);
    // myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const {
      typeTransaction, categoryTransactionId, dompetId,
      amountTransaction, nameTransaction, dateTransaction,
    } = data;

    const urlencoded = new URLSearchParams();
    urlencoded.append('type_transaction', typeTransaction);
    urlencoded.append('categoryTransaction_id', categoryTransactionId);
    urlencoded.append('dompet_id', dompetId);
    urlencoded.append('amount_transaction', amountTransaction);
    urlencoded.append('name_transaction', nameTransaction);
    urlencoded.append('date_transaction', dateTransaction);

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

  static async deleteTransactionById(id) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${getDataLocalStorage().token}`);

    const requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
    };

    const response = await fetch(
      API_ENDPOINT.GET_UPDATE_DELETE_TRANSACTION_BY_ID(id),
      requestOptions,
    );
    return response.json();
  }
}

export default Transaction;
