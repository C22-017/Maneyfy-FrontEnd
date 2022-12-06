class TipsContent extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <h1 class="titlePage mb-3 pt-3">Tips Mengelola Keuangan</h1>

      <div class="image">
        <img src="..//public/images/fitur/Events-pana.png" class="img" alt="">
      </div>
      
      <div class="accordion mb-3" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              <b>1. Membedakan Keuangan Bisnis dengan Keuangan Pribadi</b>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
              <p>Cara pertama ini sangat penting agar kebutuhan keuangan bisnis tidak terganggu oleh kebutuhan
                pribadi,
                yaitu dengan membedakan keuangan bisnis dan keuangan pribadi. Hal ini dilakukan agar Anda
                mengetahui
                kondisi keuangan usaha sebenarnya tanpa mesti mengkhawatirkan keuangan pribadi. Hal ini juga
                merupakan
                bagian dari prinsip akuntansi, yaitu prinsip entitas ekonomi dimana terdapat pemisahan
                pencatatan keuangan
                pribadi dengan keuangan bisnis.</p>
            </div>
          </div>
        </div>
      
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              <b>2. Menentukan Anggaran dan Skala Prioritas Keuangan Bisnis</b>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body">
              <p>Dalam menentukan skala prioritas, Anda bisa mulai menyusun daftar rencana penggunaan uang
                atau hasil
                usaha yang biasa disebut budgeting atau anggaran. Dengan begitu Anda bisa melakukan
                pembelanjaan dengan
                prioritas yang paling tinggi terlebih dahulu. Rencanakan keuangan jangka pendek terlebih
                dahulu setelah
                itu baru rencana jangka panjang, Anda dapat menerapkan skala prioritas pengelolaan keuangan.
                Dengan begitu
                Anda tidak akan mengalami kondisi low budget dalam jangka waktu cepat jika ada perencanaan
                yang matang.
              </p>
            </div>
          </div>
        </div>
      
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree">
              <b>3. Membatasi Resiko Hutang</b>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree">
            <div class="accordion-body">
              <p>Banyak pebisnis yang gagal tidak bisa melanjutkan usaha dikarenakan tidak bisa membayar bahan
                baku kepada
                supplier maupun membayar angsuran kredit kepada bank. Oleh karena itu anda harus bisa
                membatasi kemampuan
                Anda, pinjamlah sesuai kemampuan anda. Anda dapat mengukur kemampuan maksimal angsuran
                kepada bank, baik
                kredit modal kerja maupun kredit investasi. Hindari terlalu banyak kebutuhan konsumtif
                karena kebutuhan
                konsumtif tidak bisa turn over.</p>
              <p>Dalam menjalankan bisnis, Anda harus berhati-hati dengan yang namanya hutang. Penambahan
                hutang berarti
                adanya penambahan beban yang akan memperburuk kondisi bisnis Anda.</p>
            </div>
          </div>
        </div>
      
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
              <b>4. Membuat Laporan Arus Kas (Cash Flow) Secara Berkala</b>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFour">
            <div class="accordion-body">
              <p>Dalam membuat laporan arus kas anda harus membuatnya secara berkala, karena laporan ini dapat
                membantu
                anda memprediksi penghasilan dan pengeluaran pada periode terntentu, merencanakan investasi
                masa depan dan
                memberikan acuan untuk pengambilan keputusan lebih cepat dan tepat.</p>
              <p>Kondisi arus kas defisit adalah masalah yang sering pebisnis hadapi, hal ini disebabkan
                karena
                pengeluaran melebihi pendapatan sehingga arus kas menjadi tidak seimbang. Anda harus lebih
                memahami
                apabila perputaran kas melambat berarti waktu penjualan anda secara kredit itu lebih lama
                dibandingkan
                pembelian dalam jumlah besar sehingga Anda harus banyak menyimpan persediaan barang
                dagangan. Yang Anda
                harus lakukan adalah optimalkan waktu penjualan kredit sama dengan pembelian kredit anda,
                anda bisa
                menekan tingkat persediaan barang agar dapat memenuhi order tanpa membebani keuangan.</p>
            </div>
          </div>
        </div>
      
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
              <b>5. Mengirim Tagihan dengan Tepat Waktu</b>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFive">
            <div class="accordion-body">
              <p>Selain mengelola perputaran kas, Anda harus memperhatikan piutang tak tertagih diluar sana
                karena dapat
                mempengaruhi keberlangsunan perputaran modal usaha anda itu sendiri. Demi menjaga perputaran
                modal usaha,
                pastikan pengiriman tagihan dengan tepat waktu dan langsung dilakukan setelah transaksi
                selesai.
                Perkembangan saat ini sudah mulai banyak alat bantu seperti software akuntansi Harmony ada
                fitur “Smart
                Invoicing” dengan cloud teknologi-nya akan mempercepat proses pengiriman invoicing melalui
                media whatapps
                atau email secara langsung. Hal ini sangat disukai oleh pebisnis dengan mempermudah dari
                segi mudah, tepat
                dan praktis. Anda bisa reminder untuk mengingatkan mengenai keterlambatan pembayaran
                customer jika
                pembayaran sudah jatuh tempo.</p>
            </div>
          </div>
        </div>
      
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
              <b>6. Lakukan Monitoring Secara Berkala</b>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingSix">
            <div class="accordion-body">
              <p>Anda harus mulai monitoring itu semenjak dimulai bisnis anda, hal ini dikarenakan agar anda
                dapat
                meminimalisirkan resiko kerugian yang ada. Cepat anda melakukan monitoring semakin cepat
                pula resiko
                diketahui dan dapat segera diatasi. Anda harus lakukan monitoring ini secara berkala dan
                konsisten.</p>
            </div>
          </div>
        </div>
      
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false"
              aria-controls="panelsStayOpen-collapseSeven">
              <b>7. Gunakan Teknologi dalam Membuat Pembukuan Keuangan</b>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingSeven">
            <div class="accordion-body">
              <p>Di era industri 4.0 serba digital ini pengelolaan keuangan khususnya dalam pembuatan laporan
                keuangan
                masih ada pebisnis yang menggunakan sistem manual atau tradisional. Apa yang terjadi ?
                pebisnis tersebut
                masih belum bisa mengembangkan bisnis-nya dikarenakan kendala waktu, tenaga dan pikiran
                habis untuk
                membuat laporan keuangan tersebut.</p>
              <p>Jika anda masih kerepotan dan malas mencatat keuangan secara manual, anda bisa menggunakan
                alat bantu
                seperti website pencatatan keuangan, pengelolan keuangan anda akan lebih mudah dan cepat.
                Jangan bingung,
                dimanapun dan kapanpun Anda dapat mudah menggunakan WebApps <b class="text-primary">Maneyfy</b> yang dapat
                membantu anda dalam
                pencatatan keuangan.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('tips-content', TipsContent);
