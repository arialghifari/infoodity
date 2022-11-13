import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import ReviewInitiator from '../../src/scripts/utils/review-initiator';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant,
    favoriteRestaurant: FavoriteRestaurantIdb,
  });
};

const createReviewPresenterWithRestaurant = async () => {
  await ReviewInitiator.init({ form: document.querySelector('#reviewForm') });
};

export {
  createLikeButtonPresenterWithRestaurant,
  createReviewPresenterWithRestaurant,
};
