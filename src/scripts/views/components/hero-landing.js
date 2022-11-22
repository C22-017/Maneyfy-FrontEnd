import CONFIG from '../../globals/config';

class HeroLanding extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <!-- ======= Hero Section ======= -->
      <section id="hero" class="hero d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Kelola keuanganmu<br>Dalam satu tempat</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">Merekap, Melacak, Mengontrol, hingga mengubah kebiasaan dalam mengelola keuangan dengan Maneyfy</h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div class="text-center text-lg-start">
                  <a href="#features" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Pelajari</span>
                    <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
              <img src="${CONFIG.IMAGE_HERO_LANDING_PATH}" class="img-fluid" alt="">
            </div>
          </div>
        </div>
      </section><!-- End Hero -->`;
  }
}

customElements.define('hero-landing', HeroLanding);
