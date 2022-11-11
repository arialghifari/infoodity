const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">🤍</button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">🧡</button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
