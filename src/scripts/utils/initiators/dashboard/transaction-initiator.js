import CONFIG from '../../../globals/config';
import Transaction from '../../../services/api/transaction';
import { getElement, getAllElement } from '../../element';
import { rupiahToInteger } from '../../format-currency-idr';
import { showLoading, hideLoading } from '../spinner-initiator';

const TransactionInitiator = {
  init({
    selectedDompet, categoryEarnings, categorySpendings, element,
  }) {
    this._selectedDompet = selectedDompet;
    this._categoryEarnings = categoryEarnings;
    this._categorySpendings = categorySpendings;
    this._element = element;

    this._setupAddTransaction();
    this._showTransactionSummary();
    this._setupButtonShowTransaction();
    this._showHistoryTransaction();
    this._renderCategoryTransaction();
  },

  _getValueFromInputMonthSelected() {
    const valueMonthSelected = getElement('#monthTransaction').value;

    const dataParams = {
      idDompet: this._selectedDompet.id,
      month: new Date(valueMonthSelected).getMonth() + 1,
      year: new Date(valueMonthSelected).getFullYear(),
    };

    return dataParams;
  },

  _setupAddTransaction() {
    getElement('#btnOpenAddTransaction').addEventListener('click', () => {
      const elementAddTransaction = getElement('body-add-transaction');
      elementAddTransaction.dompetSelected = this._selectedDompet;
    });

    this._addTransactionProcess();
  },

  _addTransactionProcess() {
    getElement('#btnCreateTransaction').addEventListener('click', async () => {
      const idBtnAddCategory = getElement('.add-category').id;
      const amountValue = getElement('#amountAddTransaction').value;
      const dateValue = getElement('#dateAddTransaction').value;
      const nameValue = getElement('#nameAddTransaction').value;

      let idCategory;
      let typeTransaction;

      if (!idBtnAddCategory) {
        alert('Kamu harus memilih kategori terlebih dahulu');
        return false;
      } else {
        const idIdentifier = idBtnAddCategory.split('-')[0];
        idCategory = idBtnAddCategory.split('-')[1];
        if (idIdentifier === 'categoryEarningAdd') {
          typeTransaction = 'earning';
        } else {
          typeTransaction = 'spending';
        }
      }

      if (amountValue === '') {
        alert('Nominal transaksi harus diisi');
        return false;
      }

      if (nameValue === '') {
        alert('Nama transaksi harus diisi');
        return false;
      }

      const data = {
        typeTransaction,
        categoryTransactionId: idCategory,
        dompetId: this._selectedDompet.id,
        amountTransaction: rupiahToInteger(amountValue),
        nameTransaction: nameValue,
        dateTransaction: dateValue,
      };

      showLoading();
      const responseAddTransaction = await Transaction.createTransaction(data);
      hideLoading();

      if (responseAddTransaction.status === 'success') {
        alert('Transaksi berhasil ditambahkan');
        location.reload();
      } else {
        alert(responseAddTransaction.msg);
      }
    });
  },

  async _showTransactionSummary() {
    try {
      const dataParams = this._getValueFromInputMonthSelected();

      showLoading();
      const transactionResult = await Transaction.getAllTransaction(dataParams);

      this._element.transactionByMonth = transactionResult;
      this._element.selectedDompet = this._selectedDompet;
    } catch (error) {
      console.log(error);
    }
  },

  _setupButtonShowTransaction() {
    try {
      getElement('#btnShowTransaction').addEventListener('click', () => {
        this._showTransactionSummary();
        this._showHistoryTransaction();
      });
    } catch (error) {
      console.log(error);
    }
  },

  async _showHistoryTransaction() {
    try {
      const listHistoryElement = getElement('#list-history-transaction');
      listHistoryElement.innerHTML = '';

      const dataParams = this._getValueFromInputMonthSelected();
      const transactionResult = await Transaction.getAllTransaction(dataParams);
      hideLoading();

      if (transactionResult.data.length === 0) {
        listHistoryElement.innerHTML = `
          <picture>
            <source type="image/webp" srcset="${CONFIG.IMAGE_DATA_NOT_FOUND}.webp">
            <source type="image/png" srcset="${CONFIG.IMAGE_DATA_NOT_FOUND}.png">
            <img src="${CONFIG.IMAGE_DATA_NOT_FOUND}.png" class="img-transaction-not-found" alt="Ilustrasi transaksi tidak ditemukan">
          </picture>
          <p>Tidak ada transaksi pada bulan dan tahun ini</p>
        `;
      } else {
        transactionResult.data.forEach((transaction) => {
          const itemTransaction = document.createElement('item-history-transaction');
          itemTransaction.transactions = transaction;
          listHistoryElement.appendChild(itemTransaction);
        });

        this._setupItemHistory();
      }
    } catch (error) {
      console.log(error);
    }
  },

  async _setupItemHistory() {
    try {
      const itemsHistory = getAllElement('.riwayat-list');
      itemsHistory.forEach((itemElement) => {
        itemElement.addEventListener('click', async () => {
          const idTransaction = parseInt(itemElement.id.split('-')[1], [10]);

          showLoading();
          const responseTransaction = await Transaction.getDetailTransactionById(idTransaction);

          const elementDetailTransaction = getElement('body-detail-transaction');
          elementDetailTransaction.transaction = responseTransaction.result;

          const elementEditTransaction = getElement('body-edit-transaction');
          elementEditTransaction.dompetSelected = this._selectedDompet;
          elementEditTransaction.transaction = responseTransaction.result;

          const elementDeleteTransaction = getElement('body-delete-transaction');
          elementDeleteTransaction.transaction = responseTransaction.result;
          hideLoading();

          this._setupBtnEditTransaction(responseTransaction.result, elementEditTransaction);
          this._setupUpdateTransaction(responseTransaction.result);
          this._setupBtnDeleteTransaction();
        });
      });
    } catch (error) {
      console.log(error);
    }
  },

  _setupBtnEditTransaction(transaction, elementBodyEdit) {
    getElement('#btnEditTransaction').addEventListener('click', () => {
      elementBodyEdit.transaction = transaction;
    });
  },

  _setupBtnDeleteTransaction() {
    const elementBtnDelete = getElement('.btnDeleteTransaction');
    elementBtnDelete.addEventListener('click', async () => {
      const idTransaction = parseInt(elementBtnDelete.id.split('-')[1], [10]);

      showLoading();
      const responseDelete = await Transaction.deleteTransactionById(idTransaction);
      hideLoading();

      if (responseDelete.msg === 'Transaction berhasil dihapus') {
        alert('Transaksi berhasil dihapus');
        location.reload();
      } else {
        alert(responseDelete.msg);
      }
    });
  },

  _renderCategoryTransaction() {
    const elementListEarningAdd = getElement('#list-category-earning-add');
    this._categoryEarnings.forEach((earning) => {
      const itemCategory = document.createElement('item-category');
      itemCategory.category = earning;
      itemCategory.chooseTransaction = 'Add';
      itemCategory.classList.add('col-12', 'col-md-5', 'col-lg-3');
      elementListEarningAdd.appendChild(itemCategory);
    });

    const elementListSpendingAdd = getElement('#list-category-spending-add');
    this._categorySpendings.forEach((spending) => {
      const itemCategory = document.createElement('item-category');
      itemCategory.category = spending;
      itemCategory.chooseTransaction = 'Add';
      itemCategory.classList.add('col-12', 'col-md-5', 'col-lg-3');
      elementListSpendingAdd.appendChild(itemCategory);
    });

    const elementListEarningEdit = getElement('#list-category-earning-edit');
    this._categoryEarnings.forEach((earning) => {
      const itemCategory = document.createElement('item-category');
      itemCategory.category = earning;
      itemCategory.chooseTransaction = 'Edit';
      itemCategory.classList.add('col-12', 'col-md-5', 'col-lg-3');
      elementListEarningEdit.appendChild(itemCategory);
    });

    const elementListSpendingEdit = getElement('#list-category-spending-edit');
    this._categorySpendings.forEach((spending) => {
      const itemCategory = document.createElement('item-category');
      itemCategory.category = spending;
      itemCategory.chooseTransaction = 'Edit';
      itemCategory.classList.add('col-12', 'col-md-5', 'col-lg-3');
      elementListSpendingEdit.appendChild(itemCategory);
    });

    getAllElement('.item').forEach((element) => {
      element.addEventListener('click', async () => {
        if (element === document.activeElement) {
          const identifierId = element.id.split('-')[0];
          const idCategory = parseInt(element.id.split('-')[1], 10);

          let typeTransaction;
          if (identifierId === 'categoryEarningEdit' || identifierId === 'categoryEarningAdd') {
            typeTransaction = 'earning';
          } else {
            typeTransaction = 'spending';
          }

          this._setCategory(typeTransaction, idCategory);
        }
      });
    });
  },

  _setCategory(typeTransaction, idCategory) {
    getElement('#btnChooseCategory').addEventListener('click', () => {
      if (typeTransaction === 'earning') {
        this._categoryEarnings.forEach((earning) => {
          if (earning.id === idCategory) {
            const iconSelected = getElement('#icon-category-edit-selected');
            const nameSelected = getElement('#name-category-edit-selected');

            iconSelected.src = earning.IconEarning.url_icEarning;
            nameSelected.innerHTML = earning.categoryName_earning;

            const btnEditCategory = getElement('.edit-category');
            btnEditCategory.id = `categoryEarningEdit-${idCategory}`;
          }
        });
      } else {
        this._categorySpendings.forEach((spending) => {
          if (spending.id === idCategory) {
            const iconSelected = getElement('#icon-category-edit-selected');
            const nameSelected = getElement('#name-category-edit-selected');

            iconSelected.src = spending.IconSpending.url_icSpending;
            nameSelected.innerHTML = spending.categoryName_spending;

            const btnEditCategory = getElement('.edit-category');
            btnEditCategory.id = `categorySpendingEdit-${idCategory}`;
          }
        });
      }
    });

    getElement('#btnChooseCategoryAdd').addEventListener('click', () => {
      if (typeTransaction === 'earning') {
        this._categoryEarnings.forEach((earning) => {
          if (earning.id === idCategory) {
            const iconSelected = getElement('#icon-category-add-selected');
            const nameSelected = getElement('#name-category-add-selected');

            iconSelected.src = earning.IconEarning.url_icEarning;
            nameSelected.innerHTML = earning.categoryName_earning;

            const btnAddCategory = getElement('.add-category');
            btnAddCategory.id = `categoryEarningAdd-${idCategory}`;
          }
        });
      } else {
        this._categorySpendings.forEach((spending) => {
          if (spending.id === idCategory) {
            const iconSelected = getElement('#icon-category-add-selected');
            const nameSelected = getElement('#name-category-add-selected');

            iconSelected.src = spending.IconSpending.url_icSpending;
            nameSelected.innerHTML = spending.categoryName_spending;

            const btnAddCategory = getElement('.add-category');
            btnAddCategory.id = `categorySpendingAdd-${idCategory}`;
          }
        });
      }
    });
  },

  _setupUpdateTransaction(transaction) {
    getElement('#btnUpdateTransaction').addEventListener('click', async () => {
      const amountValue = getElement('#amountEditTransaction').value;
      const dateValue = getElement('#dateEditTransaction').value;
      const nameValue = getElement('#nameEditTransaction').value;
      const idBtnEditCategory = getElement('.edit-category').id;

      let idCategory;
      let typeTransaction;

      if (amountValue === '') {
        alert('Nominal transaksi harus diisi');
        return false;
      }

      if (nameValue === '') {
        alert('Nama transaksi harus diisi');
        return false;
      }

      if (!idBtnEditCategory) {
        idCategory = transaction.categoryTransaction_id;
        typeTransaction = transaction.type_transaction;
      } else {
        const idIdentifier = idBtnEditCategory.split('-')[0];
        idCategory = idBtnEditCategory.split('-')[1];
        if (idIdentifier === 'categoryEarningEdit') {
          typeTransaction = 'earning';
        } else {
          typeTransaction = 'spending';
        }
      }

      const dataUpdated = {
        typeTransaction,
        categoryTransactionId: idCategory,
        dompetId: this._selectedDompet.id,
        amountTransaction: rupiahToInteger(amountValue),
        nameTransaction: nameValue,
        dateTransaction: dateValue,
      };

      showLoading();
      const responseUpdate = await Transaction.updateTransactionById(transaction.id, dataUpdated);
      hideLoading();

      if (responseUpdate.msg === 'Data updated successfully') {
        alert('Data Transaksi berhasil diubah');
        location.reload();
      } else {
        alert(responseUpdate.msg);
      }
    });
  },

};

export default TransactionInitiator;
