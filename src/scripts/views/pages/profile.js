const Profile = {
  async render() {
    return `
        <header class="header" id="header">
          <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
          <div class="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt=""> </div>
        </header>
  
        <side-bar class="l-navbar" id="nav-bar"></side-bar>
  
        <main class="container">
        <h1 class="titlePage mb-5 pt-3">Profil Saya</h1>

        <section class="profil mb-5 row">
            <div class="col-lg-2 col-sm-4 col-5">
                <img class="img-fluid" src="..//public/images/Ellipse 5.png" alt="">
            </div>
            <div class="col-lg-3 col-sm-6 col-7 desc">
                <p class="name">Fajar Alfiantino</p>
                <p class="email">asdfgh@jkl.com</p>
            </div>
        </section>

        <section class="kelola row">
            <h2>Kelola</h2>
            <div class="pemasukan col-12 col-sm-12 col-lg-3 text-center">
                <button type="button" class="btn titleKelola" data-bs-toggle="modal" data-bs-target="#kelolaPemasukan">
                    Kategori Pemasukan
                </button>

                <div class="modal fade" id="kelolaPemasukan" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="exampleModalLabel">Logo</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h5>Kategori Pendapatan</h5>
                                <ul class="list-group list-group-horizontal">
                                    <li class="list-group-item flex-fill">Makan&Minum</li>
                                    <li class="list-group-item">
                                        <button type="button" class="btn btn-transparent" onclick="console.log('edit')">
                                            <iconify-icon icon="material-symbols:edit"></iconify-icon>
                                        </button>
                                    </li>
                                    <li class="list-group-item">
                                        <button type="button" class="btn btn-transparent"
                                            onclick="console.log('delete')">
                                            <iconify-icon icon="mdi:trash"></iconify-icon>
                                        </button>
                                    </li>
                                </ul>
                                <ul class="list-group list-group-horizontal">
                                    <li class="list-group-item flex-fill">Makan&Minum</li>
                                    <li class="list-group-item">
                                        <button type="button" class="btn btn-transparent" onclick="console.log('edit')">
                                            <iconify-icon icon="material-symbols:edit"></iconify-icon>
                                        </button>
                                    </li>
                                    <li class="list-group-item">
                                        <button type="button" class="btn btn-transparent"
                                            onclick="console.log('delete')">
                                            <iconify-icon icon="mdi:trash"></iconify-icon>
                                        </button>
                                    </li>
                                </ul>
                                <div class="button">
                                    <button type="button" class="btn like" data-bs-toggle="modal"
                                        data-bs-target="#tambahPemasukan">
                                        <p class="tambah">+</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="tambahPemasukan" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="exampleModalLabel">Tambah Kategori Pemasukan</h4>
                                <button type="button" class="btn-close" data-bs-toggle="modal"
                                    data-bs-target="#kelolaPemasukan"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Nama Kategori</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp">
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dompet col-12 col-sm-12 col-lg-3 text-center">
                <button type="button" class="btn titleKelola" data-bs-toggle="modal" data-bs-target="#kelolaDompet">
                    Dompet
                </button>
            </div>
            <div class="pengeluaran col-12 col-sm-12 col-lg-3 text-center">
                <button type="button" class="btn titleKelola" data-bs-toggle="modal"
                    data-bs-target="#kelolaPengeluaran">
                    Kategori Pengeluaran
                </button>
            </div>
        </section>
    </main>
    `;
  },

  // async afterRender() {
  //   // try {
  //   //   const restaurants = await RestaurantAPIDicoding.getListRestaurant();

  //   //   this._initContentHomePage(restaurants);
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
  // },

  // _initContentHomePage(restaurants) {
  //   // ExploreRestaurantInitiator.init({
  //   //   restaurants,
  //   //   listRestaurantContainer: document.querySelector('.explore-container'),
  //   // });
  //   // RecommendedRestaurantInitiator.init({
  //   //   restaurantsRecommended: restaurants,
  //   //   listRecommendedContainer: document.querySelector('.recommendation-container'),
  //   // });
  // },
};

export default Profile;
