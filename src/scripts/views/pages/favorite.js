import FavoriteMovieIdb from '../../data/favorite-restaurant-idb';

const Favorite = {
  async render() {
    return `
      <section class="restaurant mb">
        <div id="restaurant-list">
          <p>Loading...</p>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteMovieIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('.restaurant');
    const restaurantListContainer = document.querySelector('#restaurant-list');

    if (restaurants.length > 0) {
      restaurantListContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        const restaurantCard = document.createElement('restaurant-card');
        restaurantCard.restaurant = restaurant;

        restaurantListContainer.appendChild(restaurantCard);
      });
    } else {
      restaurantContainer.innerHTML = `
        <p class='message'>You don't have favorite restaurant</p>
      `;
    }
  },
};

export default Favorite;
