import CONFIG from '../../globals/config';

const dompet = `
    <div class="dompet shadow-sm col-12 col-sm-12 col-lg-3 text-center">
      <button type="button" class="btn titleKelola" data-bs-toggle="modal" data-bs-target="#kelolaDompet">
        Dompet
      </button>

      <div class="modal fade" id="kelolaDompet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">Kelola Dompet</h4>
              <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div id="list-wallet"></div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-add add-dompet" data-bs-toggle="modal" data-bs-target="#tambahDompet">
                <p>+</p>
              </button>
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
            <body-tambah-dompet></body-tambah-dompet>
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
            <body-edit-dompet></body-edit-dompet>
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
            <div class="modal-body row gap-1">
              <div class="grid-icon-list list-icon-dompet"></div>
            </div>
            <div class="modal-footer">
              <div class="d-grid d-md-flex justify-content-md-end">
                <button type="button" class="btn btn-primary btnChooseIconDompet" data-bs-toggle="modal" data-bs-target="#tambahDompet">Pilih</button>
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
            <div class="modal-body row gap-1">
              <div class="grid-icon-list list-icon-dompet"></div>
            </div>
            <div class="modal-footer">
              <div class="d-grid d-md-flex justify-content-md-end">
                <button type="button" class="btn btn-primary btnChooseIconDompet" data-bs-toggle="modal" data-bs-target="#editDompet">Pilih</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="hapusDompet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">Hapus Dompet?</h4>
              <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#kelolaDompet"></button>
            </div>
          <body-delete-dompet></body-delete-dompet>
          </div>
        </div>
      </div>
    </div>
`;

export default dompet;
