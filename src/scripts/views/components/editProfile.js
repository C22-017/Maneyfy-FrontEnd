const editProfile = (dataUser) => {
  const btnEdit = document.querySelector('.btn-edit');
  btnEdit.innerHTML = `
    <button type="button" class="btn edit shadow-sm" data-bs-toggle="modal" data-bs-target="#kelolaProfil">
      <span class="iconify" data-icon="oi:pencil"></span>
    </button>

    <div class="modal fade" id="kelolaProfil" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <form id="update-profile-form">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">
                Ubah Profil
              </h4>
              <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3 text-center">
                <figure class="profile-pic-div">
                  <img class="img-fluid mb-2 mx-auto d-block" src="${dataUser.profile_picture}" id="photo">
                </figure>
                <label for="file" class="uploadBtn" hidden>Foto</label>
                <input type="file" accept="image/png, image/jpeg, image/webp" class="form-control" id="file" name="file">
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">Nama</label>
                <input type="text" class="form-control" id="name" name="name" value="${dataUser.name}" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp"
                  value="${dataUser.email}" required>
              </div>
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-danger col-4" data-bs-toggle="modal" data-bs-target="#hapusAkun">Hapus
                Akun</button>
              <button type="submit" class="btn btn-primary col-4">Simpan</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="modal fade" id="hapusAkun" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLabel">Hapus Akun?</h4>
            <button type="button" class="btn-close p-3" data-bs-toggle="modal" data-bs-target="#kelolaProfil"></button>
          </div>
          <div class="modal-body modal-confirm">
            <span>Tindakan ini akan menghapus data kamu dari database, termasuk Transaksi yang sudah ditambahkan
              sebelumnya</span>
            <div class="justify-content-between row p-3">
              <button type="button" class="btn btn-primary col-4" data-bs-toggle="modal"
                data-bs-target="#kelolaProfil">Batal</button>
              <button type="button" id="btnDeleteUser" class="btn btn-danger col-4">Hapus</button>
            </div>
          </div>
        </div>
      </div>
    </div>
`;

  const uploadButton = document.getElementById('file');
  const choosenImage = document.getElementById('photo');

  uploadButton.onchange = () => {
    const reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
      choosenImage.setAttribute('src', reader.result);
    };
  };
};
export default editProfile;
