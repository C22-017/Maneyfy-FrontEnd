const Dashboard = {
  async render() {
    return `
      <top-header></top-header>
      <side-bar></side-bar>

      <main class="main-logged-in">
        <h4>Main Components</h4>
      </main>
    `;
  },

  async afterRender() {
    const bodyPd = document.getElementById('body-pd');
    bodyPd.classList.remove('body-pd');
    bodyPd.classList.add('body-logged-in');
    // try {
    //   const restaurants = await RestaurantAPIDicoding.getListRestaurant();

    //   this._initContentHomePage(restaurants);
    // } catch (error) {
    //   console.log(error);
    // }
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

    /*= ==== LINK ACTIVE ===== */
    const linkColor = document.querySelectorAll('.nav_link');

    function colorLink() {
      if (linkColor) {
        linkColor.forEach((l) => l.classList.remove('active'));
        this.classList.add('active');
      }
    }
    linkColor.forEach((l) => l.addEventListener('click', colorLink));
  },

  // _initContentHomePage(restaurants) {
  //   // ExploreRestaurantInitiator.init({
  //   //   restaurants,
  //   //   listRestaurantContainer: document.querySelector('.explore-container'),
  //   // });
  //   // RecommendedRestaurantInitiator.init({
  //   //   restaurantsRecommended: restaurants,
  //   //   listRecommendedContainer: document.querySelector('.recommendation-container'),
  //   // });
  // },
};

export default Dashboard;
