const Dashboard = {
  async render() {
    return `
      <header class="header" id="header">
        <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
        <div class="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt=""> </div>
      </header>

      <side-bar class="l-navbar" id="nav-bar"></side-bar>

      <main class="height-100 bg-light">
        <h4>Main Components</h4>
      </main>
      
    `;
  },

  // async afterRender() {
  //   // try {
  //   //   const restaurants = await RestaurantAPIDicoding.getListRestaurant();

  //   //   this._initContentHomePage(restaurants);
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
  // },

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
