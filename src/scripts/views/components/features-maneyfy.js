import CONFIG from '../../globals/config';

class FeaturesManeyfy extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <!-- ======= Features Section ======= -->
      <section id="features" class="features">

        <div class="container" data-aos="fade-up">

          <header class="section-header">
            <h1>Kenapa Pilih Maneyfy ?</h1>
          </header>

          <!-- Feature 1 -->
          <div class="row feture-tabs" data-aos="fade-up">
            <div class="col-lg-6 content">
              <h3>Tambahkan dompet sesukamu</h3>
              <p>Kamu bisa menambahkan dompet tanpa batas untuk memisahkan setiap kebutuhanmu</p>
            </div>
            <div class="col-lg-6">
              <img src="${CONFIG.IMAGE_FEATURES_1_PATH}" class="img-fluid image-features" alt="features_1_maneyfy">
            </div>
          </div> <!-- End Feature 1 -->

          <!-- Feature 2 -->
          <div class="row feture-tabs reverse" data-aos="fade-up">
            <div class="col-lg-6">
              <img src="${CONFIG.IMAGE_FEATURES_2_PATH}" class="img-fluid" alt="features_2_maneyfy">
            </div>
            <div class="col-lg-6 content">
              <h3>Lihat laporan pencatatan dengan mudah</h3>
              <p>Riwayat pencatatan didesain agar kamu dapat mengetahui laporan pencatatan dengan mudah setiap bulannya</p>
            </div>
          </div> <!-- End Feature 2 -->

          <!-- Feature 3 -->
          <div class="row feture-tabs" data-aos="fade-up">
            <div class="col-lg-6 content">
              <h3>Kategori membantumu lebih fokus</h3>
              <p>Kamu dapat mengelompokkan pencatatan berdasarkan kategori. Selain itu kamu juga dapat menambahkan kategori baru sesuai kebutuhanmu</p>
            </div>
            <div class="col-lg-6">
              <img src="${CONFIG.IMAGE_FEATURES_3_PATH}" class="img-fluid" alt="features_3_maneyfy">
            </div>
          </div> <!-- End Feature 3 -->

          <!-- Feature 4 -->
          <div class="row feture-tabs reverse" data-aos="fade-up">
            <div class="col-lg-6">
              <img src="${CONFIG.IMAGE_FEATURES_4_PATH}" class="img-fluid" alt="features_4_maneyfy">
            </div>  
            <div class="col-lg-6 content">
              <h3>Ubah kebiasaan buruk dalam mengatur keuangan</h3>
              <p>Maneyfy dapat memberikan kamu tips dan saran, sehingga membantu kamu tetap konsisten dalam mengelola keuangan</p>
            </div>
          </div> <!-- End Feature 4 -->

        </div>

      </section><!-- End Features Section -->`;
  }
}

customElements.define('features-maneyfy', FeaturesManeyfy);
