import CONFIG from '../../globals/config';

class HeroLogin extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <div class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row h-100">

        <div class="col-lg-6 hero">
          <img src="${CONFIG.IMAGE_HERO_LOGIN}"
            class="img-fluid" alt="img_maneyfy_login">
        </div>
        <div class="col-lg-6 form-input">
          <form>
            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-center head">
              <img class="img-fluid logo" src="${CONFIG.IMAGE_LOGO_TITLE_BLACK_PATH}" alt="">
            </div>
  
            <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0">MASUK</p>
            </div>
            
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="email" id="form3Example3" class="form-control form-control-lg"
                placeholder="Enter a valid email address" />
              <label class="form-label" for="form3Example3">Email address</label>
            </div>
  
            <!-- Password input -->
            <div class="form-outline mb-3">
              <input type="password" for="typePassword" id="form3Example4" class="form-control form-control-lg"
                placeholder="Enter password" />
              <label class="form-label" for="form3Example4">Password</label>
            </div>
            
            <div class="text-center  mt-1 pt-2 justify-content-center">
              <button type="button" class="btn btn-primary btn-lg button-login"
                style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0">BELUM PUNYA AKUN ?</p>
                </div>
              <button type="button" class="btn btn-primary btn-lg button-register"
                style="padding-left: 2.5rem; padding-right: 2.5rem;">Register</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  </div>
    `;
  }
}
customElements.define('hero-login', HeroLogin);
