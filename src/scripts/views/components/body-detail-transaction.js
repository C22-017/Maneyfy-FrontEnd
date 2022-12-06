import { transactionFormated } from '../../utils/data-transaction-formated';

class BodyDetailTransaction extends HTMLElement {
  set transaction(transaction) {
    this._transaction = transaction;
    this._render();
  }

  _render() {
    const transaction = this._transaction;
    const {
      name, date, urlIcon, category,
      amount, colorTextAmountClass,
    } = transactionFormated(transaction);

    this.innerHTML = `
      <div class="col-12 row detail-list pb-3">
        <div class="col-5 align-self-center text-center">
          <img class="img-fluid kategori-icon" src="${urlIcon}" alt="logo">
        </div>
        <div class="col-6 align-self-center detail-desc">
          <p class="nama-transaksi">${name}</p>
          <p class="nama-kategori">${category}</p>
          <p class="tanggal">${date}</p>
        </div>
      </div>
      <div class="col-12 text-end">
        <span class="nominal ${colorTextAmountClass}">${amount}</span>
      </div>
    `;
  }
}

customElements.define('body-detail-transaction', BodyDetailTransaction);
