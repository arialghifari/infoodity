const assert = require('assert');

Feature('Search Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
  I.waitForElement('#searchForm');
});

Scenario('restaurant not found', ({ I }) => {
  I.fillField('.input-search', 'apaan tuh?');

  I.pressKey('Enter');
  I.waitForElement('.message');
  I.see('No restaurant found', '.message');
});

Scenario('search restaurant exactly one', async ({ I }) => {
  const searchInput = 'Kafe Kita';
  I.fillField('.input-search', searchInput);

  I.pressKey('Enter');
  I.seeNumberOfElements('restaurant-card', 1);
  I.waitForElement('.restaurant__card__body__section h3');
  const restaurantTitle = await I.grabTextFrom(
    '.restaurant__card__body__section h3'
  );

  assert.strictEqual(searchInput, restaurantTitle);
});
