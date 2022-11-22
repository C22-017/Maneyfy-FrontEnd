const Landing = {
  async render() {
    return `
      <skip-link></skip-link>
      <header id="header" class="header fixed-top">      
        <app-bar></app-bar>
      </header>
    
      <main>
        <hero-landing></hero-landing>
        <features-maneyfy></features-maneyfy>
        <register-now></register-now>
      </main>
    
      <footer>
        <p><a href="https://github.com/C22-017/Maneyfy-FrontEnd" target="_blank" rel="noopener">Copyright 2022 - Maneyfy </p>
      </footer>
    `;
  },

  // async afterRender() {
  //   try {
  //     const restaurants = await RestaurantAPIDicoding.getListRestaurant();

  //     this._initContentHomePage(restaurants);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },

  // _initContentHomePage(restaurants) {
  //   ExploreRestaurantInitiator.init({
  //     restaurants,
  //     listRestaurantContainer: document.querySelector('.explore-container'),
  //   });
  //   RecommendedRestaurantInitiator.init({
  //     restaurantsRecommended: restaurants,
  //     listRecommendedContainer: document.querySelector('.recommendation-container'),
  //   });
  // },
};

export default Landing;
