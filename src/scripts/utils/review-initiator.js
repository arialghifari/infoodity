import InfooditySource from '../data/infoodity-source';

const ReviewInitiator = {
  async init({ form }) {
    await form?.addEventListener('submit', async (event) => {
      event.preventDefault();
      let [id, name, review] = event.target;
      id = id.value;
      name = name.value;
      review = review.value;

      const { error, customerReviews } = await InfooditySource.addReview({
        id,
        name,
        review,
      });
      if (!error) this._renderReviews(customerReviews);
    });
  },

  async _renderReviews(customerReviews) {
    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '';

    await customerReviews
      .map((review) => {
        return (reviewContainer.innerHTML += `
        <div class="review">
          <p class="name">${review.name}</p>
          <p class="date">${review.date}</p>
          <p class="text">${review.review}</p>
        </div>
      `);
      })
      .join('');
  },
};

export default ReviewInitiator;
