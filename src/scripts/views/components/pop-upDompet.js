import CONFIG from '../../globals/config';

const dompet = `
    <div class="dompet col-12 col-sm-12 col-lg-3 text-center">
        <button type="button" class="btn titleKelola" data-bs-toggle="modal" data-bs-target="#kelolaDompet">
          Dompet
        </button>

        <div class="modal fade" id="kelolaDompet" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="exampleModalLabel">
                                    <img class="logo" src="${CONFIG.IMAGE_LOGO_PATH}" alt=""> Maneyfy
                                </h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h5>Dompet</h5>
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
                                        data-bs-target="#tambahDompet">
                                        <p class="tambah">+</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="tambahDompet" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="exampleModalLabel">Tambah Kategori Pemasukan</h4>
                                <button type="button" class="btn-close" data-bs-toggle="modal"
                                    data-bs-target="#kelolaDompet"></button>
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
    </div>
`;

export default dompet;
