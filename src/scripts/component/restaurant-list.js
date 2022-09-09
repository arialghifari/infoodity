import './restaurant-card';
import data from '../../DATA.json';

class RestaurantList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    data.restaurants.forEach((restaurant) => {
      const restaurantCard = document.createElement('restaurant-card');
      restaurantCard.restaurant = restaurant;

      this.appendChild(restaurantCard);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
