import CONFIG from '../../globals/config';

class RegisterNow extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="daftar d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Nikmati kemudahan dalam<br>melakukan pencatatan<br>keuangan bersama<br>Maneyfy</h1>
              <div data-aos="fade-up" data-aos-delay="600">
                <div class="text-center text-lg-start">
                  <a href="#/register" class="btn-get-register scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Daftar </span>
                    <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 daftar-img" data-aos="zoom-out" data-aos-delay="200">
              <img src="${CONFIG.IMAGE_REGISTER_NOW_PATH}" class="img-fluid" alt="growth with maneyfy">
            </div>
          </div>
        </div>
      </div>`;
  }
}

customElements.define('register-now', RegisterNow);
