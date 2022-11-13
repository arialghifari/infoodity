const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">🤍</button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">🧡</button>
`;

export { createLikeButtonTemplate, createUnlikeButtonTemplate };
