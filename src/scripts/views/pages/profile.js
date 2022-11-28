import kelolaProfile from '../components/kelolaProfile';
import profile from '../components/profile';

const Profile = {
  async render() {
    return `
        <top-header></top-header>
        <side-bar></side-bar>
  
    <main class="container">
        <h1 class="titlePage mb-5 pt-3">Profil Saya</h1>

        <section class="profil mb-5 row">
        </section>

        <section class="kelola row">
        </section>
    </main>
    `;
  },

  async afterRender() {
    profile();
    kelolaProfile();

    const showNavbar = (toggleId, iconToggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId);
      const iconToggle = document.getElementById(iconToggleId);
      const nav = document.getElementById(navId);
      const bodypd = document.getElementById(bodyId);
      const headerpd = document.getElementById(headerId);

      if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('show-navbar');
          iconToggle.classList.toggle('bx-x');
          bodypd.classList.toggle('body-pd');
          headerpd.classList.toggle('body-pd');
        });
      }
    };

    showNavbar('header-toggle', 'icon-toggle', 'nav-bar', 'body-pd', 'header');

    const dashboardLink = document.getElementById('dashboard-link');
    const tipsLink = document.getElementById('tips-link');

    tipsLink.classList.remove('active');
    dashboardLink.classList.remove('active');
  },
};

export default Profile;
