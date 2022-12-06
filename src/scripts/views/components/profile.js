import editProfile from './editProfile';

const profile = (dataUser) => {
  const kelolaList = document.querySelector('section.profil');
  kelolaList.innerHTML = `
      <div class="foto d-flex flex-row justify-content-start flex-fill gap-3">
          <div>
            <img class="photo-profile" src="${dataUser.profile_picture}" alt="Profil ${dataUser.name}">      
          </div>
          <div class="desc d-flex flex-column justify-content-center">
              <p class="name">${dataUser.name}</p>
              <p class="email">${dataUser.email}</p>
          </div>
      </div>
      <div>
          <div class="btn-edit justify-content-end"></div>
      </div>
  `;
  editProfile(dataUser);
};

export default profile;
