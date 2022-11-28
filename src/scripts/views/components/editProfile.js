import CONFIG from '../../globals/config';

const editProfile = () => {
  const btnEdit = document.querySelector('.btn-edit');
  btnEdit.innerHTML = `
<button type="button" class="btn edit" data-bs-toggle="modal"
data-bs-target="#kelolaProfil">
    <span class="iconify" data-icon="oi:pencil"></span>
</button>

<div class="modal fade" id="kelolaProfil" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="exampleModalLabel">
                    <img class="logo img-fluid" src="${CONFIG.IMAGE_LOGO_PATH}" alt=""> Maneyfy
                </h4>
                <button type="button" class="btn-close p-3" data-bs-dismiss="modal"
                    aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3 text-center">
                        <figure class="profile-pic-div">
                            <img class="img-fluid mb-2 mx-auto d-block" src=".//public/images/Ellipse 5.png" id="photo">
                        </figure>
                        <label for="file" class="uploadBtn" hidden>Foto</label>
                        <input type="file" accept="image/*" class="form-control" id="file">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputUsername1" class="form-label">Nama</label>
                        <input type="text" class="form-control" id="exampleInputUsername1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="d-grid d-md-flex justify-content-md-end">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
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
    console.log(uploadButton.files[0]);
    reader.onload = () => {
      choosenImage.setAttribute('src', reader.result);
    };
  };
};
export default editProfile;
