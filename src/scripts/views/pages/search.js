import InfooditySource from '../../data/infoodity-source';
import UrlParser from '../../routes/url-parser';

const Search = {
  async render() {
    return `
      <section class="restaurant">
        <div id="restaurant-list">
          <p>Loading...</p>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('.restaurant');
    const restaurantListContainer = document.querySelector('#restaurant-list');

    const { error, founded, restaurants } =
      await InfooditySource.searchRestaurant(url.id);

    if (founded > 0 && !error) {
      restaurantListContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        const restaurantCard = document.createElement('restaurant-card');
        restaurantCard.restaurant = restaurant;

        restaurantListContainer.appendChild(restaurantCard);
      });
    } else {
      restaurantContainer.innerHTML = `
        <p class='message'>No restaurant found</p>
      `;
    }
  },
};

export default Search;
