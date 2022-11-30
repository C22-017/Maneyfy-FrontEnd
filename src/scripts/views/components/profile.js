import editProfile from './editProfile';

const profile = (dataUser) => {
  const kelolaList = document.querySelector('section.profil');
  kelolaList.innerHTML = `
      <div class="foto col-lg-3 col-sm-4 col-4">
          <img class="photo-profile" src="${dataUser.profile_picture}" alt="">
      </div>
      <div class="desc col-lg-9 col-sm-8 col-8 row">
          <div class="col-lg-11 col-sm-10 col-10">
              <p class="name">${dataUser.name}</p>
              <p class="email">${dataUser.email}</p>
          </div>
          <div class="col-1 btn-edit">
          </div>
      </div>
  `;
  editProfile(dataUser);
};

export default profile;
