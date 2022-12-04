class ChooseMonth extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <section class="month section-bg">
      <div class="container">
        <div class="row no-gutters justify-content-center">
          <div class="col-lg-4 col-md-6 d-md-flex align-items-md-center box-main">
            <div class="box-month">
              <div class="main-months">
              <p class="choose-title mb-3 text-center"><strong>Pilih Bulan</strong></p>
              <div class ="row text-center justify-content-center">
                <div class ="col-md-6 ">
                <input class="input-month" type="month" id="start" name="start"min="2022-11" placeholder="mmyyyy">
                </div>
                <div class ="col-md-6 ">
                <button type="submit" class="btn btn-primary btn-lg button-report text-center">
                  Tampilkan
                </button>
                </div>
              </div> 
              </div>
            </div>
          </div>
        </div>  
      </div>
    </section>
  `;
  }
}

customElements.define('choose-month', ChooseMonth);
