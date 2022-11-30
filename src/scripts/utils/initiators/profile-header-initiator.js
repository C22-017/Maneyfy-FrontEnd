const DetailRestaurantMenuInitiator = {
  init({ dataUser, element }) {
    this._dataUser = dataUser;
    this._element = element;

    this._element.dataUser = this._dataUser;
  },
};

export default DetailRestaurantMenuInitiator;
