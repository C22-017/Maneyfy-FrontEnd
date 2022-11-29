import CONFIG from '../../globals/config';

const pemasukan = `
<div class="pemasukan shadow-sm col-12 col-sm-12 col-lg-3 text-center">
<button type="button" class="btn titleKelola" data-bs-toggle="modal" data-bs-target="#kelolaKategoriPemasukan">
  Pemasukan
</button>

<div class="modal fade" id="kelolaKategoriPemasukan" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">
          <img class="logo" src="${CONFIG.IMAGE_LOGO_PATH}" alt=""> Maneyfy
        </h4>
        <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Pemasukan</h5>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item flex-fill">
          <img class="icon-list" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">Kategori Pemasukan 1</li>
          <li class="list-group-item">
            <button type="button" class="btn btn-transparent p-2" data-bs-toggle="modal" data-bs-target="#editKategoriPemasukan">
              <iconify-icon icon="material-symbols:edit" class="icon-large text-primary"></iconify-icon>
            </button>
          </li>
          <li class="list-group-item">
            <button type="button" class="btn btn-transparent p-2" data-bs-toggle="modal" data-bs-target="#hapusKategoriPemasukan">
                <iconify-icon icon="mdi:trash" class="icon-large text-danger"></iconify-icon>
            </button>
          </li>
        </ul>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item flex-fill">
          <img class="icon-list" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">Kategori Pemasukan 2</li>
          <li class="list-group-item">
            <button type="button" class="btn btn-transparent p-2" data-bs-toggle="modal" data-bs-target="#editKategoriPemasukan">
              <iconify-icon icon="material-symbols:edit" class="icon-large text-primary"></iconify-icon>
            </button>
          </li>
          <li class="list-group-item">
            <button type="button" class="btn btn-transparent p-2" data-bs-toggle="modal" data-bs-target="#hapusKategoriPemasukan">
                <iconify-icon icon="mdi:trash" class="icon-large text-danger"></iconify-icon>
            </button>
          </li>
        </ul>
        <div class="button">
          <button type="button" class="btn like" data-bs-toggle="modal" data-bs-target="#tambahKategoriPemasukan">
            <p class="tambah">+</p>
          </button>
        </div>
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
      <div class="modal-body">
        <div class="modal-body row gap-4 p-3">
          <div class="wallet col-3 border">
            <button type="button" class="btn btn-transparent edit d-flex" data-bs-toggle="modal"
            data-bs-target="#iconTambahKategoriPemasukan">
                <img class="img-fluid rounded" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">
            </button>
          </div>
          <div class="wallet col-8 border">
            <div class="mb-3">
              <label for="exampleInputUsername1" class="form-label">Nama Kategori Pemasukan</label>
              <input type="text" class="form-control" id="exampleInputUsername1">
            </div>
          </div>
          <div class="d-grid d-md-flex justify-content-md-end">
            <button type="submit" class="btn btn-primary">Tambah</button>
          </div>
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
      <div class="modal-body">
        <div class="modal-body row gap-4">
          <div class="wallet col-3 border">
          <button type="button" class="btn btn-transparent edit d-flex" data-bs-toggle="modal"
          data-bs-target="#iconEditKategoriPemasukan">
              <img class="img-fluid rounded" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">
          </button>
          </div>
          <div class="col-8 border">
            <div class="mb-3">
              <label for="exampleInputUsername1" class="form-label">Nama Kategori Pemasukan</label>
              <input type="text" class="form-control" id="exampleInputUsername1">
            </div>
          </div>
          <div class="d-grid d-md-flex justify-content-md-end">
            <button type="submit" class="btn btn-primary">Simpan</button>
          </div>
        </div>
      </div>
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
      <div class="modal-body">
        <div class="modal-body row gap-1">
          <div class="wallet col-2 border">
            <img class="img-fluid" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">
          </div>
          <div class="wallet col-2 border">
            <img class="img-fluid" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">
          </div>
          <div class="wallet col-2 border">
            <img class="img-fluid" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">
          </div> 
          <div class="d-grid d-md-flex justify-content-md-end">
            <button type="submit" class="btn btn-primary">Pilih</button>
          </div>
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
      <div class="modal-body">
        <div class="modal-body row gap-1">
          <div class="wallet col-2 border">
            <img class="img-fluid" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">
          </div>
          <div class="wallet col-2 border">
            <img class="img-fluid" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">
          </div>
          <div class="wallet col-2 border">
            <img class="img-fluid" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">
          </div> 
          <div class="d-grid d-md-flex justify-content-md-end">
            <button type="submit" class="btn btn-primary">Pilih</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="hapusKategoriPemasukan" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalLabel">Hapus Kategori Pemasukan?</h4>
          <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#kelolaKategoriPemasukan"></button>
        </div>
        <div class="modal-body modal-confirm">
        <div class="justify-content-between row p-3">             
        <button type="submit" class="btn btn-primary col-4" data-bs-toggle="modal"
        data-bs-target="#kelolaKategoriPemasukan">Batal</button>
        <button type="submit" class="btn btn-danger col-4">Hapus</button>
        </div>
        </div>
      </div>
    </div>
</div>
</div>
`;

export default pemasukan;
