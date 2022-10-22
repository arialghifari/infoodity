import InfooditySource from '../../data/infoodity-source';
import '../../component/detail-card';
import UrlParser from '../../routes/url-parser';

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
    const detailEl = document.getElementById('detail');

    const { error, message, restaurant } =
      await InfooditySource.detailRestaurant(url.id);

    if (!error) {
      detailEl.innerHTML = '';

      const detailCard = document.createElement('detail-card');
      detailCard.restaurant = restaurant;

      detailEl.appendChild(detailCard);
    } else {
      detailEl.innerHTML = `<p>${message}</p>`;
    }
  },
};

export default Detail;
