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
`;

export default detailTransaksi;
