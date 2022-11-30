class ChooseMonth extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <section class="month section-bg">
      <div class="container">
        <div class="row no-gutters justify-content-center">

          <div class="col-lg-4 col-md-6 d-md-flex align-items-md-stretch box-main">
            <div class="box-month">
              <p class="choose-title mb-3"><strong>Pilih Bulan</strong></p>
              <input class="input-month" type="month" id="start" name="start"min="2022-11" value="">
              
              <span class="purecounter">
              <button type="submit" class="btn btn-primary btn-lg button-report">
              Tampilkan
              </button
              span>

            </div>
          </div>

        </div>  
      </div>
    </section>
  `;
  }
}

customElements.define('choose-month', ChooseMonth);
