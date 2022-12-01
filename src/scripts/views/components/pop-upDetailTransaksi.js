import CONFIG from '../../globals/config';

const detailTransaksi = `
<button type="button" class="btn btn-primary edit" data-bs-toggle="modal" data-bs-target="#detailTransaksi">
<span class="iconify" data-icon="oi:pencil"></span>
</button>

<div class="modal fade" id="detailTransaksi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  <div class="modal-content container">
    <div class="modal-header">
      <h4 class="modal-title" id="exampleModalLabel">
        <img class="logo img-fluid" src="${CONFIG.IMAGE_LOGO_PATH}" alt=""> Maneyfy
      </h4>
      <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body justify-content-evenly row gap-4 p-3">
      <h5>Detail Transaction</h5>
      <div class="col-12 row">
        <div class="col-5 align-self-center">
          <img class="img-fluid kategori-icon" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">
        </div>
        <div class="col-6 align-self-center detail-desc">
          <p class="nama-transaksi">Beli Makanan</p>
          <p class="nama-kategori">Makanan & Minuman</p>
          <p class="tanggal">14 November 2022</p>
        </div>
      </div>
        <div class="col-12 text-end">
          <span class="nominal">Rp. 30.000</span>
        </div>
      <div class="justify-content-between row p-3">
        <button type="submit" class="btn btn-danger col-4" data-bs-toggle="modal"
          data-bs-target="#hapusTransaksi">Hapus</button>
        <button type="submit" class="btn btn-secondary col-4" data-bs-toggle="modal"
          data-bs-target="#editTransaksi">Edit</button>
      </div>
    </div>
  </div>
</div>
</div>

<div class="modal fade" id="hapusTransaksi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
  <div class="modal-content">
    <div class="modal-header">
      <h4 class="modal-title" id="exampleModalLabel">Hapus Transaksi</h4>
      <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#detailTransaksi"></button>
    </div>
    <div class="modal-body">
      <div class="justify-content-between row p-3">
        <button type="submit" class="btn btn-primary col-4" data-bs-toggle="modal"
          data-bs-target="#detailTransaksi">cancel</button>
        <button type="submit" class="btn btn-danger col-4">Submit</button>
      </div>
    </div>
  </div>
</div>
</div>

<div class="modal fade" id="editTransaksi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content container">
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalLabel">
            <img class="logo img-fluid" src="${CONFIG.IMAGE_LOGO_PATH}" alt=""> Maneyfy
          </h4>
          <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#detailTransaksi"></button>
        </div>
        <div class="modal-body text-center tambah-transaksi">
          <h5>Edit Transaction</h5>
          <div class="row">
            <div class="form-transaksi col-12 col-lg-3">
                <div class="pilih-dompet">
                    <img class="img-fluid logo" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">
                    <span>Dompet</span>
                </div>
            </div>
            <div class="form-transaksi col-12 col-lg-3 align-self-center">
              <button type="button" class="btn edit d-flex pilih-kategori justify-content-center" data-bs-toggle="modal"
                data-bs-target="#editKategori">
                <img class="img-fluid logo" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">
                <span class="align-self-center">
                  Kategori
                </span>
              </button>
            </div>
            <div class="form-transaksi col-12 col-lg-3">
              <div class="mb-3">
                <label for="exampleInputUsername1" class="form-label">Ammount</label>
                <input type="number" class="form-control" id="exampleInputUsername1">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-transaksi col-12 col-lg-3">
              <div class="mb-3 input-append date">
                <label for="tanggalTransaksi" class="form-label">Date</label>
                <input type="date" class="form-control" id="tanggalTransaksi">
              </div>
            </div>
            <div class="large-form col-12 col-lg-6">
              <div class="mb-3">
                <label for="exampleInputUsername1" class="form-label">Nama Transaksi</label>
                <input type="text" class="form-control" id="exampleInputUsername1">
              </div>
            </div>
          </div>
          <div class="d-grid justify-content-md-end p-2">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
</div>

<div class="modal fade" id="editKategori" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content container">
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalLabel">
            <img class="logo img-fluid" src="${CONFIG.IMAGE_LOGO_PATH}" alt=""> Maneyfy
          </h4>
          <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#addTransaksi"></button>
        </div>
        <div class="modal-body row gap-4 p-3">
          <h5 class="text-center">Kategori</h5>
          <!-- Nav tabs -->
          <ul class="nav nav-tabs justify-content-center list-porto" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="kategoriPendapatan" data-bs-toggle="tab" data-bs-target="#pendapatan"
                type="button" role="tab" aria-controls="pendapatan" aria-selected="true">Pendapatan</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="kategoriPengeluaran" data-bs-toggle="tab" data-bs-target="#pengeluaran"
                type="button" role="tab" aria-controls="profile" aria-selected="false">Pengeluaran</button>
            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-pane active" id="pendapatan" role="tabpanel" aria-labelledby="kategoriPendapatan"
              tabindex="0">
              <div class="p-3">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-5 col-lg-3">
                    <div class="d-flex flex-column">
                      <div class="rounded-3 overflow-hidden mb-3 card">
                        <ul class="list-group list-group-horizontal text-center kategori-list">
                            <li class="list-group-item flex-fill">
                            <img class="icon-list" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">
                            <p>Gaji</p>
                            </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-5 col-lg-3">
                    <div class="d-flex flex-column">
                      <div class="rounded-3 overflow-hidden mb-3 card">
                      <ul class="list-group list-group-horizontal text-center kategori-list">
                          <li class="list-group-item flex-fill">
                          <img class="icon-list" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">
                          <p>Keuntungan Investasi</p>
                          </li>
                      </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-grid d-md-flex justify-content-md-end">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="pengeluaran" role="tabpanel" aria-labelledby="kategoriPengeluaran"
              tabindex="0">
              <div class="p-3">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-5 col-lg-3">
                    <div class="d-flex flex-column">
                      <div class="rounded-3 overflow-hidden mb-3 card">
                      <ul class="list-group list-group-horizontal text-center kategori-list">
                        <li class="list-group-item flex-fill">
                        <img class="icon-list" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">
                        <p>Makan & Minum</p>
                        </li>
                      </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-5 col-lg-3">
                    <div class="d-flex flex-column">
                      <div class="rounded-3 overflow-hidden mb-3 card">
                      <ul class="list-group list-group-horizontal text-center kategori-list">
                        <li class="list-group-item flex-fill">
                        <img class="icon-list" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">
                        <p>Transportasi</p>
                        </li>
                      </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-grid d-md-flex justify-content-md-end">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export default detailTransaksi;
