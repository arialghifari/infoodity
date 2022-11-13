import InfooditySource from '../src/scripts/data/infoodity-source';
import * as TestFactories from './helpers/testFactories';

describe('Review a Restaurant', () => {
  const addReviewContainer = () => {
    document.body.innerHTML = '<div id="review-container"></div>';
  };

  const addFormInput = (id, name, review) => {
    const formInput = `
			<form id="reviewForm">
				<input type="hidden" name="id" required="" value="${id}">
				<input type="text" name="name" placeholder="Name" required="" value="${name}">
				<textarea name="review" cols="10" rows="5" placeholder="Write review" required="">${review}</textarea>
				<button>COMMENT</button>
			</form>
		`;
    document.body.innerHTML += formInput;
  };

  beforeEach(() => {
    addReviewContainer();
  });

  it('should have restaurant review id, name, review value', async () => {
    addFormInput('', '', '');
    await TestFactories.createReviewPresenterWithRestaurant();

    expect(
      document.querySelector('[name="id"]').value ||
        document.querySelector('[name="name"]').value ||
        document.querySelector('[name="review"]').value
    ).toBe('');
  });

  it('should contain restaurant id', async () => {
    addFormInput('', 'Desta', 'Tasty!');
    await TestFactories.createReviewPresenterWithRestaurant();

    const response = await InfooditySource.addReview({
      id: document.querySelector('[name="id"]').value,
      name: document.querySelector('[name="name"]').value,
      review: document.querySelector('[name="review"]').value,
    });

    expect(response.message).toBe('should contain restaurant id');
  });

  it('should have valid restaurant id', async () => {
    addFormInput('a', 'Desta', 'Tasty!');
    await TestFactories.createReviewPresenterWithRestaurant();

    const response = await InfooditySource.addReview({
      id: document.querySelector('[name="id"]').value,
      name: document.querySelector('[name="name"]').value,
      review: document.querySelector('[name="review"]').value,
    });

    expect(response.message).toBe('restaurant id not valid');
  });

  it('should contain name', async () => {
    addFormInput('s1knt6za9kkfw1e867', '', 'Tasty!');
    await TestFactories.createReviewPresenterWithRestaurant();

    const response = await InfooditySource.addReview({
      id: document.querySelector('[name="id"]').value,
      name: document.querySelector('[name="name"]').value,
      review: document.querySelector('[name="review"]').value,
    });

    expect(response.message).toBe('should contain name');
  });

  it('should contain review', async () => {
    addFormInput('s1knt6za9kkfw1e867', 'Desta', '');
    await TestFactories.createReviewPresenterWithRestaurant();

    const response = await InfooditySource.addReview({
      id: document.querySelector('[name="id"]').value,
      name: document.querySelector('[name="name"]').value,
      review: document.querySelector('[name="review"]').value,
    });

    expect(response.message).toBe('should contain review');
  });

  it('should show my own review', async () => {
    const nameInput = 'Joe';
    const reviewInput = '10 out of 10, very tasty!';
    addFormInput('s1knt6za9kkfw1e867', nameInput, reviewInput);

    const date = new Date();
    const dateFormat = date.toLocaleDateString('en-GB', {
      timeZone: 'Asia/Jakarta',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    await TestFactories.createReviewPresenterWithRestaurant();

    const response = await InfooditySource.addReview({
      id: document.querySelector('[name="id"]').value,
      name: document.querySelector('[name="name"]').value,
      review: document.querySelector('[name="review"]').value,
    });

    expect(response.customerReviews).toContain({
      name: nameInput,
      review: reviewInput,
      date: dateFormat,
    });
  });
});
