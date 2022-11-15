const Landing = {
  async render() {
    return `
      <skip-link-element></skip-link-element>
      <header>      
        <app-bar></app-bar>
      </header>
    
      <main></main>
    
      <footer>
        <footer-element></footer-element>
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
