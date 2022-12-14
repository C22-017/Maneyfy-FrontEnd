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
                  <picture>
                    <source type="image/webp" srcset="${CONFIG.IMAGE_BRAND_LOGO_PATH}.webp">
                    <source type="image/png" srcset="${CONFIG.IMAGE_BRAND_LOGO_PATH}.png">
                    <img src="${CONFIG.IMAGE_BRAND_LOGO_PATH}.png" class="img-fluid logo-login-register" alt="Logo maneyfy">
                  </picture>
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
                  <div class="input-group form-control-login-register">
                    <input type="password" for="typePassword" id="password" name="password" class="form-control form-control-lg" placeholder="Password" minlength="8" required/>
                    <div class="input-group-append">
                      <span class="input-group-text togglePassword" id="toggleShowPwRegis" tabindex="0">
                        <i class='bx bxs-show' id="icon-show-password-regis"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="form-outline mb-4">
                  <div class="input-group form-control-login-register">
                    <input type="password" for="typePassword" id="confirmPassword" name="confirmPassword" class="form-control form-control-lg" placeholder="Konfirmasi Password" minlength="8" required/>
                    <div class="input-group-append">
                      <span class="input-group-text togglePassword" id="toggleShowConfirmPw" tabindex="0">
                        <i class='bx bxs-show' id="icon-show-confirm-password"></i>
                      </span>
                    </div>
                  </div>
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
              <picture>
                <source type="image/webp" srcset="${CONFIG.IMAGE_HERO_REGISTER_PATH}.webp">
                <source type="image/png" srcset="${CONFIG.IMAGE_HERO_REGISTER_PATH}.png">
                <img src="${CONFIG.IMAGE_HERO_REGISTER_PATH}.png" class="img-fluid" alt="Ilustrasi daftar akun untuk dapat menggunakan maneyfy">
              </picture>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('form-register', FormRegister);
