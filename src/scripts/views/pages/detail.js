import InfooditySource from '../../data/infoodity-source';
import '../../component/detail-card';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="detail">
        <p class="text-center">Loading...</p>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.getElementById('detail');

    const { error, message, restaurant } =
      await InfooditySource.detailRestaurant(url.id);

    if (!error) {
      detailContainer.innerHTML = '';

      const detailCard = document.createElement('detail-card');
      detailCard.restaurant = restaurant;

      detailContainer.appendChild(detailCard);
    } else {
      detailContainer.innerHTML = `<p class='message'>${message}</p>`;
    }

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });
  },
};

export default Detail;
