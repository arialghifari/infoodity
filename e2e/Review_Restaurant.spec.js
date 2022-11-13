Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('review restaurant', async ({ I }) => {
  const name = 'Jupri';
  const review = 'Great restaurant!';

  I.waitForElement('.restaurant__card__body__section h3');
  const firstRestaurantLink = locate('.restaurant__card__body__link').first();

  I.click(firstRestaurantLink);
  I.waitForElement('#reviewForm');
  I.fillField('[name="name"]', name);
  I.fillField('[name="review"]', review);
  I.click(locate('#reviewForm button'));

  I.see(name, '.review .name');
  I.see(review, '.review .text');
});
