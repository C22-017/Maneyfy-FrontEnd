const pemasukan = `
    <div class="pemasukan shadow-sm col-12 col-sm-12 col-lg-3 text-center">
      <button type="button" class="btn titleKelola" data-bs-toggle="modal" data-bs-target="#kelolaKategoriPemasukan">
        Kelola Pemasukan
      </button>

      <div class="modal fade" id="kelolaKategoriPemasukan" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">Kelola Kategori Pemasukan</h4>
              <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div id="list-category-earning"></div>       
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-add add-earning btn-icon-focus" data-bs-toggle="modal" data-bs-target="#tambahKategoriPemasukan">
                <p>+</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="tambahKategoriPemasukan" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">Tambah Kategori Pemasukan</h4>
              <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#kelolaKategoriPemasukan"></button>
            </div>
            <body-tambah-earning></body-tambah-earning>
            <div class="modal-footer p-3">
              <div class="d-grid w-100 d-md-flex justify-content-md-end">
              <button type="button" id="btnTambahEarning" class="btn btn-primary">Tambah</button>
              </div>
            </div>   
          </div>
        </div>
      </div>

      <div class="modal fade" id="editKategoriPemasukan" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">Edit Kategori Pemasukan</h4>
              <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#kelolaKategoriPemasukan"></button>
            </div>
            <body-edit-earning></body-edit-earning>     
          </div>
        </div>
      </div>

      <div class="modal fade" id="iconTambahKategoriPemasukan" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">Pilih Icon Pemasukan</h4>
              <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#tambahKategoriPemasukan"></button>
            </div>
            <div class="modal-body row gap-1">
              <div class="grid-icon-list list-icon-earning"></div>
            </div>
            <div class="modal-footer">
              <div class="d-grid d-md-flex justify-content-md-end">
                <button type="button" class="btn btn-primary btnChooseIconEarning" data-bs-toggle="modal" data-bs-target="#tambahKategoriPemasukan">Pilih</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="iconEditKategoriPemasukan" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">Pilih Icon Pemasukan</h4>
              <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#editKategoriPemasukan"></button>
            </div>
            <div class="modal-body row gap-1">
              <div class="grid-icon-list list-icon-earning"></div>   
            </div>
            <div class="modal-footer">
              <div class="d-grid d-md-flex justify-content-md-end">
                <button type="button" class="btn btn-primary btnChooseIconEarning" data-bs-toggle="modal" data-bs-target="#editKategoriPemasukan">Pilih</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="hapusKategoriPemasukan" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">Hapus Kategori Pemasukan?</h4>
              <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#kelolaKategoriPemasukan"></button>
            </div>
            <body-delete-earning></body-delete-earning>    
          </div>
        </div>
      </div>
    </div>
`;

export default pemasukan;
