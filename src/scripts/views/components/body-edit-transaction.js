import { rupiahFormat } from '../../utils/format-currency-idr';

class BodyEditTransaction extends HTMLElement {
  set dompetSelected(dompet) {
    this._dompetSelected = dompet;
  }

  set transaction(transaction) {
    this._transaction = transaction;
    this._render();
  }

  _render() {
    const dompet = this._dompetSelected;
    const transaction = this._transaction;
    const amount = rupiahFormat(dompet.amount);

    this.innerHTML = `
      <div class="row">
        <div class="form-transaksi col-12 col-lg-3 pt-1">
          <span>Dompet</span>
          <div class="d-flex flex-fill flex-row align-items-center justify-content-center gap-2">
            <div><img class="icon-add-edit-transaction" src="${dompet.IconDompet.url_icDompet}" alt="logo"></div>
            <span class="label-dompet">${dompet.name_dompet} (${amount})</span>
          </div>
        </div>
        <div class="form-transaksi col-12 col-lg-3 align-self-center dompet-pick">
          <button type="button" class="btn edit d-flex pilih-kategori edit-category align-items-center justify-content-center gap-2" data-bs-toggle="modal"
            data-bs-target="#editKategori">
            <img class="icon-add-edit-transaction" src="${this._urlIconSelector(transaction)}" alt="logo" id="icon-category-edit-selected">
            <span class="label-dompet" id="name-category-edit-selected">${this._nameCategorySelector(transaction)}</span>
          </button>
        </div>
        <div class="form-transaksi col-12 col-lg-3">
          <div class="mt-2">
            <label for="amountEditTransaction" class="form-label">Nominal Transaksi</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">Rp</span>
              </div>
              <input type="number" class="form-control" id="amountEditTransaction" value="${transaction.amount_transaction}" placeholder="Rp 100.000" min="500" max="1000000000">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="form-transaksi col-12 col-lg-3">
          <div class="mt-2 input-append date">
            <label for="dateEditTransaction" class="form-label">Tanggal Transaksi</label>
            <input type="date" class="form-control" id="dateEditTransaction" value="${transaction.date_transaction.split('T')[0]}">
          </div>
        </div>
        <div class="large-form col-12 col-lg-6">
          <div class="mt-2">
            <label for="nameEditTransaction" class="form-label">Nama Transaksi</label>
            <input type="text" class="form-control" id="nameEditTransaction" value="${transaction.name_transaction}">
          </div>
        </div>
      </div>
    `;
  }

  _nameCategorySelector(transaction) {
    if (transaction.CategoryEarning) {
      return transaction.CategoryEarning.categoryName_earning;
    } else {
      return transaction.CategorySpending.categoryName_spending;
    }
  }

  _urlIconSelector(transaction) {
    if (transaction.CategoryEarning) {
      return transaction.CategoryEarning.IconEarning.url_icEarning;
    } else {
      return transaction.CategorySpending.IconSpending.url_icSpending;
    }
  }
}

customElements.define('body-edit-transaction', BodyEditTransaction);
