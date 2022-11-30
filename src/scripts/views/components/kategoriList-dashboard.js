// import CONFIG from '../../globals/config';

class CategoryListDashboard extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <section class="counts section-bg mt-5">
        <div class="container">
  
          <div class="row no-gutters">
  
            <div class="col-lg-4 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box-pemasukan">
                <p class="category-title"><strong>Pemasukan</strong></p>
                <img class="category-icon" src="..//public/icons/income.png" alt="">
                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter">+Rp. 123.000.000</span>
              </div>
            </div>
  
            <div class="col-lg-4 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box-saldo">
                <p class="category-title"><strong>Saldo Dompet</strong></p>
                <img class="category-icon" src="..//public/icons/wallet.png" alt="">
                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter">Rp. 150.000</span>
              </div>
            </div>
  
            <div class="col-lg-4 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box-pengeluaran">
                <p class="category-title"><strong>Pengeluaran</strong></p>
                <img class="category-icon" src="..//public/icons/spend.png" alt="">
                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter">-Rp. 123.000.000</span>
              </div>
            </div>

          </div>
  
        </div>
      </section>
  `;
  }
}

customElements.define('list-category', CategoryListDashboard);
