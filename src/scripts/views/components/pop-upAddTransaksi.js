import CONFIG from '../../globals/config';

const addTransaksi = `
<img src="../public/images/logo.png" alt="">
  <button type="button" class="btn btn-primary edit" data-bs-toggle="modal" data-bs-target="#addTransaksi">
    <span class="iconify" data-icon="oi:pencil"></span>
  </button>

  <div class="modal fade" id="addTransaksi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content container">
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalLabel">
            <img class="logo img-fluid" src="${CONFIG.IMAGE_LOGO_PATH}" alt=""> Maneyfy
          </h4>
          <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
          <h5>Add Transaction</h5>
          <div class=" row justify-content-center">
            <div class="bg-danger col-12 col-lg-3 m-1">
              <img class="img-fluid logo" src="..//public/images/logo.png" alt="logo"> Dompet
            </div>
            <div class="bg-primary col-12 col-lg-3 m-1">
              <button type="button" class="btn btn-primary edit d-flex" data-bs-toggle="modal"
                data-bs-target="#addKategori">
                <img class="img-fluid logo" src="..//public/images/logo.png" alt="logo"><span>
                  Kategori
                </span>
              </button>
            </div>
            <div class="bg-secondary col-12 col-lg-3 m-1">
              <div class="mb-3">
                <label for="exampleInputUsername1" class="form-label">Ammount</label>
                <input type="number" class="form-control" id="exampleInputUsername1">
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="bg-secondary col-12 col-lg-3 m-1">
              <div class="mb-3 input-append date">
                <label for="tanggalTransaksi" class="form-label">Date</label>
                <input type="date" class="form-control" id="tanggalTransaksi">
              </div>
            </div>
            <div class="bg-secondary col-12 col-lg-6 m-1">
              <div class="mb-3">
                <label for="exampleInputUsername1" class="form-label">Nama Transaksi</label>
                <input type="text" class="form-control pe-5" id="exampleInputUsername1">
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

  <div class="modal fade" id="addKategori" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

          <!-- Tab panes -->
          <div class="tab-content">
            <div class="tab-pane active m-3" id="pendapatan" role="tabpanel" aria-labelledby="kategoriPendapatan"
              tabindex="0">
              <div class="p-3 m-3">
                <div class="row">
                  <!-- project1 -->
                  <div class="col-12 col-lg-3">
                    <div class="d-flex flex-column">
                      <div class="rounded-3 overflow-hidden mb-3 card">
                        <h6>Pengeluaran 1</h6>
                      </div>
                    </div>
                  </div>
                  <!-- project2 -->
                  <div class="col-12 col-lg-3">
                    <div class="d-flex flex-column">
                      <div class="rounded-3 overflow-hidden mb-3 card">
                        <h6>Pengeluaran 2</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-grid d-md-flex justify-content-md-end">
                  <button type="submit" class="btn btn-danger">Submit</button>
                </div>
              </div>
            </div>
            <div class="tab-pane m-3" id="pengeluaran" role="tabpanel" aria-labelledby="kategoriPengeluaran"
              tabindex="0">
              <div class="p-3 m-3">
                <div class="row">
                  <!-- project1 -->
                  <div class="col-12 col-lg-3">
                    <div class="d-flex flex-column">
                      <div class="rounded-3 overflow-hidden mb-3 card">
                        <h6>Pengeluaran 1</h6>
                      </div>
                    </div>
                  </div>
                  <!-- project2 -->
                  <div class="col-12 col-lg-3">
                    <div class="d-flex flex-column">
                      <div class="rounded-3 overflow-hidden mb-3 card">
                        <h6>Pengeluaran 2</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-grid d-md-flex justify-content-md-end">
                  <button type="submit" class="btn btn-danger">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

`;

export default addTransaksi;
