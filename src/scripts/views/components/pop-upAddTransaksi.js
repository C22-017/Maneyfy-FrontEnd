const addTransaksi = `
  <div class="modal fade" id="addTransaksi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content container">
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalLabel">Tambah Transaksi</h4>
          <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <body-add-transaction class="modal-body text-center tambah-transaksi"></body-add-transaction>
        <div class="modal-footer">
          <div class="d-grid justify-content-md-end">
            <button type="button" class="btn btn-primary btn-primary-color px-4" id="btnCreateTransaction">Tambah</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="addKategori" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content container">
        <div class="modal-header flex-column gap-4">
          <div class="d-flex w-100 justify-content-center">
            <h4 class="modal-title" id="exampleModalLabel">Pilih Kategori</h4>
            <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#addTransaksi"></button>
          </div>
          <div>
            <ul class="nav nav-tabs justify-content-center list-porto" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="kategoriPendapatan" data-bs-toggle="tab" data-bs-target="#tambahpendapatanKategori"
                  type="button" role="tab" aria-controls="pendapatan" aria-selected="true">Pendapatan</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="kategoriPengeluaran" data-bs-toggle="tab" data-bs-target="#tambahpengeluaranKategori"
                  type="button" role="tab" aria-controls="profile" aria-selected="false">Pengeluaran</button>
              </li>
            </ul>
          </div>
        </div>
        <div class="modal-body row gap-4 p-3">
          <div class="tab-content">
            <div class="tab-pane active" id="tambahpendapatanKategori" role="tabpanel" aria-labelledby="kategoriPendapatan">
              <div class="p-3">
                <div class="row justify-content-center" id="list-category-earning-add"></div>
              </div>
            </div>
            <div class="tab-pane" id="tambahpengeluaranKategori" role="tabpanel" aria-labelledby="kategoriPengeluaran">
              <div class="p-3">
                <div class="row justify-content-center" id="list-category-spending-add"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="d-grid d-md-flex justify-content-md-end">
            <button type="button" class="btn btn-primary btn-primary-color px-4" data-bs-toggle="modal" data-bs-target="#addTransaksi" id="btnChooseCategoryAdd">Pilih</button>
          </div>
        </div>
      </div>
    </div>
  </div>

`;

export default addTransaksi;
