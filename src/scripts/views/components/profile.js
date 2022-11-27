import editProfile from './editProfile';

const profile = () => {
  const kelolaList = document.querySelector('section.profil');
  kelolaList.innerHTML = `
<div class="foto col-lg-3 col-sm-4 col-4">
    <img class="img-fluid" src="..//public/images/Ellipse 5.png" alt="">
</div>
<div class="desc col-lg-9 col-sm-8 col-8 row">
    <div class="col-lg-11 col-sm-10 col-10">
        <p class="name">Fajar Alfiantino</p>
        <p class="email">asdfgh@jkl.com</p>
    </div>
    <div class="col-1 btn-edit">
    </div>
</div>


    `;
  editProfile();
};

export default profile;
