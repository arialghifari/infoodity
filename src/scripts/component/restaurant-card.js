import CONFIG from '../globals/config';

class RestaurantCard extends HTMLElement {
  set restaurant(restaurant) {
    this.render(restaurant);
  }

  render(restaurant) {
    this.innerHTML = `
			<img
				src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}"
				alt="${restaurant.name}"
				loading="lazy"
			/>

			<section class="restaurant__card__info">
				<section>
					<span class="text-small">📍</span> <p>${restaurant.city}</p>
				</section>
				<section>
					<span class="text-small">⭐</span> <p>${restaurant.rating}</p>
				</section>
			</section>

			<section class="restaurant__card__body">
				<section>
					<h3>${restaurant.name}</h3>
					<p>${restaurant.description}...</p>
				</section>
				<a href="/#/detail/${restaurant.id}" aria-label="View Detail ${restaurant.name}">
					<p>View Detail</p>
				</a>
			</section>
		`;
  }
}

customElements.define('restaurant-card', RestaurantCard);
