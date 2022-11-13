const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.waitForElement('.message');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.see("You don't have favorite restaurant", '.message');
});

Scenario('like one restaurant', async ({ I }) => {
  // Start like
  I.see("You don't have favorite restaurant", '.message');

  I.amOnPage('/');
  I.waitForElement('.restaurant__card__body__section h3');
  const firstRestaurant = locate('.restaurant__card__body__section h3').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  let firstRestaurantLink = locate('.restaurant__card__body__link').first();

  I.click(firstRestaurantLink);
  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant__card__body__section h3');
  const likedRestaurantTitle = await I.grabTextFrom(
    '.restaurant__card__body__section h3'
  );

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // Start unlike
  firstRestaurantLink = locate('.restaurant__card__body__link').first();

  I.click(firstRestaurantLink);
  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.message');
  I.see("You don't have favorite restaurant", '.message');
});
