import CONFIG from '../../globals/config';
import { rupiahFormat } from '../../utils/format-currency-idr';

class CategoryListDashboard extends HTMLElement {
  set transactionByMonth(data) {
    this._transactionByMonth = data;
  }

  set selectedDompet(data) {
    this._selectedDompet = data;
    this._render();
  }

  _render() {
    const transactionByMonth = this._transactionByMonth;
    const selectedDompet = this._selectedDompet;

    this.innerHTML = `
    <section class="counts section-bg mt-5">
        <div class="container">
          <div class="row no-gutters">
            <div class="col-lg-4 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box-pemasukan text-center">
                <p class="category-title text-center"><strong>Pendapatan</strong></p>
                <picture>
                  <source type="image/webp" srcset="${CONFIG.ICON_INCOME}.webp">
                  <source type="image/png" srcset="${CONFIG.ICON_INCOME}.png">
                  <img src="${CONFIG.ICON_INCOME}.png" class="category-icon" alt="Icon Pendapatan">
                </picture>
                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter text-center">+${rupiahFormat(transactionByMonth.totalEarning)}</span>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box-saldo text-center">
                <p class="category-title text-center"><strong>Saldo Dompet</strong></p>
                <picture>
                  <source type="image/webp" srcset="${CONFIG.ICON_WALLET}.webp">
                  <source type="image/png" srcset="${CONFIG.ICON_WALLET}.png">
                  <img src="${CONFIG.ICON_WALLET}.png" class="category-icon" alt="Icon Dompet">
                </picture>
                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter text-center">${rupiahFormat(selectedDompet.amount)}</span>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 d-md-flex align-items-md-stretch">
              <div class="count-box-pengeluaran text-center justify-content-center">
                <p class="category-title text-center"><strong>Pengeluaran</strong></p>
                <div class="justify-content-center text-center">
                  <picture>
                    <source type="image/webp" srcset="${CONFIG.ICON_SPEND}.webp">
                    <source type="image/png" srcset="${CONFIG.ICON_SPEND}.png">
                    <img src="${CONFIG.ICON_SPEND}.png" class="category-icon img-fluid" alt="Icon Pengeluaran">
                  </picture>
                </div>
                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter text-center">-${rupiahFormat(transactionByMonth.totalSpending)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('list-category', CategoryListDashboard);
