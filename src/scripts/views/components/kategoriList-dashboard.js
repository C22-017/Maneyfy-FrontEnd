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
              <div class="count-box-pemasukan text-center">
                <p class="category-title text-center"><strong>Pemasukan</strong></p>
                <img class="category-icon" src="..//public/icons/income.png" alt="icIncome">
                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter text-center">+Rp. 123.000</span>
              </div>
            </div>
  
            <div class="col-lg-4 col-md-6 d-md-flex align-items-md-stretch">
              <div class="count-box-saldo text-center">
                <p class="category-title text-center"><strong>Saldo Dompet</strong></p>
                <img class="category-icon" src="..//public/icons/wallet.png" alt="icWallet">
                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter text-center">Rp. 150.000</span>
              </div>
            </div>
  
            <div class="col-lg-4 col-md-12 d-md-flex align-items-md-stretch ">
              <div class="count-box-pengeluaran text-center justify-content-center">
                <p class="category-title text-center"><strong>Pengeluaran</strong></p>
                <div class="justify-content-center text-center">
                  <img class="category-icon img-fluid" src="..//public/icons/spend.png" alt="icSpend">
                </div>
                
                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter text-center">-Rp. 123.000</span>
              </div>
            </div>

          </div>
  
        </div>
      </section>
  `;
  }
}

customElements.define('list-category', CategoryListDashboard);
