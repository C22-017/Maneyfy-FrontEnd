import CONFIG from '../../globals/config';

const detailTransaksi = `
    <div class="modal fade" id="detailTransaksi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content container">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLabel">Detail Transaksi</h4>
            <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <body-detail-transaction class="modal-body justify-content-evenly row gap-3"></body-detail-transaction>
          <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-danger col-4" data-bs-toggle="modal"
              data-bs-target="#hapusTransaksi">Hapus</button>
            <button type="button" class="btn btn-secondary col-4" data-bs-toggle="modal"
              data-bs-target="#editTransaksi" id="btnEditTransaction">Ubah</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="hapusTransaksi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLabel">Hapus Transaksi ?</h4>
            <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#detailTransaksi"></button>
          </div>
          <body-delete-transaction></body-delete-transaction>
        </div>
      </div>
    </div>

    <div class="modal fade" id="editTransaksi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content container">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLabel">Ubah Transaksi</h4>
            <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#detailTransaksi"></button>
          </div>
          <body-edit-transaction class="modal-body text-center tambah-transaksi"></body-edit-transaction>
          <div class="modal-footer">
            <div class="d-grid justify-content-md-end">
              <button type="button" class="btn btn-primary" id="btnUpdateTransaction">Simpan</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="editKategori" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content container">
          <div class="modal-header flex-column gap-4">
            <div class="d-flex w-100 justify-content-center">
              <h4 class="modal-title" id="exampleModalLabel">Pilih Kategori</h4>
              <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#editTransaksi"></button>
            </div>
            <div>
              <ul class="nav nav-tabs justify-content-center list-porto" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="kategoriPendapatan" data-bs-toggle="tab"
                    data-bs-target="#editpendapatanKategori" type="button" role="tab" aria-controls="pendapatan"
                    aria-selected="true">Pendapatan</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="kategoriPengeluaran" data-bs-toggle="tab"
                    data-bs-target="#editpengeluaranKategori" type="button" role="tab" aria-controls="profile"
                    aria-selected="false">Pengeluaran</button>
                </li>
              </ul>
            </div>
          </div>
          <div class="modal-body row gap-4 p-3">
            <div class="tab-content">
              <div class="tab-pane active" id="editpendapatanKategori" role="tabpanel" aria-labelledby="kategoriPendapatan">
                <div class="p-3">
                  <div class="row justify-content-center" id="list-category-earning-edit"></div>
                </div>
              </div>
              <div class="tab-pane" id="editpengeluaranKategori" role="tabpanel" aria-labelledby="kategoriPengeluaran">
                <div class="p-3">
                  <div class="row justify-content-center" id="list-category-spending-edit"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-grid d-md-flex justify-content-md-end">
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editTransaksi" id="btnChooseCategory">Pilih</button>
            </div>
          </div>
        </div>
      </div>
    </div>
`;

export default detailTransaksi;
