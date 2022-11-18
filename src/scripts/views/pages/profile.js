import kelolaProfile from '../components/kelolaProfile';

const Profile = {
  async render() {
    return `
        <header class="header" id="header">
          <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
          <div class="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt=""> </div>
        </header>
  
        <side-bar class="l-navbar" id="nav-bar"></side-bar>
  
        <main class="container">
        <h1 class="titlePage mb-5 pt-3">Profil Saya</h1>

        <section class="profil mb-5 row">
            <div class="col-lg-2 col-sm-4 col-5">
                <img class="img-fluid" src="..//public/images/Ellipse 5.png" alt="">
            </div>
            <div class="col-lg-3 col-sm-6 col-7 desc">
                <p class="name">Fajar Alfiantino</p>
                <p class="email">asdfgh@jkl.com</p>
            </div>
        </section>

        <section class="kelola row">
        </section>
    </main>
    `;
  },

  async afterRender() {
    kelolaProfile();
  },
};

export default Profile;
