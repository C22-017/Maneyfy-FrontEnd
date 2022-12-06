import { transactionFormated } from '../../utils/data-transaction-formated';

class ItemHistoryTransaction extends HTMLElement {
  set transactions(transactions) {
    this._transactions = transactions;
    this._render();
  }

  _render() {
    const transaction = this._transactions;
    const {
      name, date, urlIcon, category,
      amount, colorTextAmountClass,
    } = transactionFormated(transaction);

    this.innerHTML = `
      <button type="button" id="transaction-${transaction.id}" class="btn riwayat-list align-item-center py-3 px-1" data-bs-toggle="modal"
        data-bs-target="#detailTransaksi">
        <div class="d-flex flex-row list-riwayat justify-content-center">
          <div class="d-flex flex-row flex-fill gap-3">
            <img class="iconTransaksi" src="${urlIcon}" alt="icon ${category}">
            <div class="d-flex flex-column justify-content-center">
              <p class="headerTransaksi text-start">${category}</p>
              <p class="mainTransaksi text-start">${name}</p>
            </div>
          </div>
          <div class="d-flex flex-column justify-content-center flex-fill">
            <p class="headerTransaksi text-end">${date}</p>
            <p class="mainTransaksi text-end ${colorTextAmountClass}">${amount}</p>
          </div>
        </div>
      </button>
    `;
  }
}

customElements.define('item-history-transaction', ItemHistoryTransaction);
