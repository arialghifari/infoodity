import InfooditySource from '../../data/infoodity-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import ReviewInitiator from '../../utils/review-initiator';
import '../../component/detail-card';
import '../../component/review-card';

const Detail = {
  async render() {
    return `
      <section class="detail mb">
        <p class="text-center">Loading...</p>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const detailContainer = document.querySelector('.detail');
    const { error, message, restaurant } =
      await InfooditySource.detailRestaurant(url.id);

    if (!error) {
      detailContainer.innerHTML = '';

      const detailCard = document.createElement('detail-card');
      detailCard.restaurant = restaurant;
      detailContainer.appendChild(detailCard);

      const reviewContainer = document.getElementById('review-container');
      restaurant.customerReviews.map((review) => {
        const reviewCard = document.createElement('review-card');
        reviewCard.review = review;
        return reviewContainer.appendChild(reviewCard);
      });
    } else {
      detailContainer.innerHTML = `<p class='message'>${message}</p>`;
    }

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });

    await ReviewInitiator.init({
      form: document.querySelector('#reviewForm'),
    });
  },
};

export default Detail;
