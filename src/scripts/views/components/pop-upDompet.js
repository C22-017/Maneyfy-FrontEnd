import CONFIG from '../../globals/config';

const dompet = `
<div class="dompet col-12 col-sm-12 col-lg-3 text-center">
<button type="button" class="btn titleKelola" data-bs-toggle="modal" data-bs-target="#kelolaDompet">
  Dompet
</button>

<div class="modal fade" id="kelolaDompet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">
          <img class="logo" src="${CONFIG.IMAGE_LOGO_PATH}" alt=""> Maneyfy
        </h4>
        <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Dompet</h5>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item flex-fill">Dompet 1</li>
          <li class="list-group-item">
            <button type="button" class="btn btn-transparent p-2" data-bs-toggle="modal" data-bs-target="#editDompet">
              <iconify-icon icon="material-symbols:edit"></iconify-icon>
            </button>
          </li>
          <li class="list-group-item">
            <button type="button" class="btn btn-transparent p-2" onclick="console.log('delete')">
              <iconify-icon icon="mdi:trash"></iconify-icon>
            </button>
          </li>
        </ul>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item flex-fill">Dompet 2</li>
          <li class="list-group-item">
            <button type="button" class="btn btn-transparent p-2" data-bs-toggle="modal" data-bs-target="#editDompet">
              <iconify-icon icon="material-symbols:edit"></iconify-icon>
            </button>
          </li>
          <li class="list-group-item">
            <button type="button" class="btn btn-transparent p-2" onclick="console.log('delete')">
              <iconify-icon icon="mdi:trash"></iconify-icon>
            </button>
          </li>
        </ul>
        <div class="button">
          <button type="button" class="btn like" data-bs-toggle="modal" data-bs-target="#tambahDompet">
            <p class="tambah">+</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="tambahDompet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">Tambah Dompet</h4>
        <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#kelolaDompet"></button>
      </div>
      <div class="modal-body">
        <div class="modal-body row gap-4 p-3">
          <div class="wallet col-3 border">
            <button type="button" class="btn btn-transparent edit d-flex" data-bs-toggle="modal"
            data-bs-target="#iconTambahDompet">
                <img class="img-fluid rounded" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">
            </button>
          </div>
          <div class="wallet col-8 border">
            <div class="mb-3">
              <label for="exampleInputUsername1" class="form-label">Nama Dompet</label>
              <input type="text" class="form-control" id="exampleInputUsername1">
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

<div class="modal fade" id="editDompet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">Edit Dompet</h4>
        <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#kelolaDompet"></button>
      </div>
      <div class="modal-body">
        <div class="modal-body row gap-4">
          <div class="wallet col-3 border">
          <button type="button" class="btn btn-transparent edit d-flex" data-bs-toggle="modal"
          data-bs-target="#iconEditDompet">
              <img class="img-fluid rounded" src="${CONFIG.IMAGE_LOGO_PATH}" alt="logo">
          </button>
          </div>
          <div class="col-8 border">
            <div class="mb-3">
              <label for="exampleInputUsername1" class="form-label">Nama Dompet</label>
              <input type="text" class="form-control" id="exampleInputUsername1">
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

<div class="modal fade" id="iconTambahDompet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">Pilih Icon Dompet</h4>
        <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#tambahDompet"></button>
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
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="iconEditDompet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">Pilih Icon Dompet</h4>
        <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#editDompet"></button>
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
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`;

export default dompet;
