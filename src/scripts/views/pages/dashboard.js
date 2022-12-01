const Dashboard = {
  async render() {
    return `
      <top-header></top-header>
      <side-bar></side-bar>

      <main>
        <head-dashboard></head-dashboard>
        <list-category></list-category>
        <choose-month></choose-month>
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

    const dashboardLink = document.getElementById('dashboard-link');
    const tipsLink = document.getElementById('tips-link');

    tipsLink.classList.remove('active');
    dashboardLink.classList.add('active');
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
