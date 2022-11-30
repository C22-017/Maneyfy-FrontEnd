import CONFIG from '../../globals/config';

class FormRegister extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row h-100">
            <div class="col-lg-6 form-input">
              <form id="register-form" action="">
                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-center head">
                  <img class="img-fluid logo-login-register" src="${CONFIG.IMAGE_BRAND_LOGO_PATH}" alt="">
                </div>
      
                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0">DAFTAR</p>
                </div>
                
                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input type="text" id="name" name="name" class="form-control form-control-lg form-control-login-register" placeholder="Name" required/>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="email" name="email" class="form-control form-control-lg form-control-login-register" placeholder="Email" required/>
                </div>
      
                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input type="password" for="typePassword" id="password" name="password" class="form-control form-control-lg form-control-login-register" placeholder="Password" required/>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" for="typePassword" id="confirmPassword" name="confirmPassword" class="form-control form-control-lg form-control-login-register" placeholder="Konfirmasi Password" required/>
                </div>
                
                <div class="text-center mt-1 pt-2 justify-content-center">
                  <button type="submit" id="btnRegister" class="btn btn-primary btn-lg button-filled">Register</button>
                </div>              
              </form>

              <div class="text-center mt-1 pt-2 justify-content-center">
                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0">SUDAH PUNYA AKUN ?</p>
                </div>
                <a href="#/login" class="btn btn-primary btn-lg button-outline">Login</a>
              </div>
            </div>
            <div class="col-lg-6 hero-login-register">
              <img src="${CONFIG.IMAGE_HERO_REGISTER_PATH}" class="img-fluid" alt="img_maneyfy_register">
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('form-register', FormRegister);
