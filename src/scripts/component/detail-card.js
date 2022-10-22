import CONFIG from '../globals/config';

class DetailCard extends HTMLElement {
  set restaurant(restaurant) {
    this.render(restaurant);
  }

  render(restaurant) {
    this.innerHTML = `
			<img
				src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}"
				alt="${restaurant.name}"
			/>

			<div class="flex">
				<p class="title">${restaurant.name}</p>
				<button aria-label="like this movie" id="likeButton" class="like">
					<i class="fa fa-heart-o" aria-hidden="true"></i>
				</button>
			</div>

			<div class="info">
				<div>
					<img src="./ic-map-pin.svg" alt="Map pin icon" />
					<p>${restaurant.city}</p>
				</div>
				<div>
					<img src="./ic-star.svg" alt="Star icon" />
					<p>${restaurant.rating}</p>
				</div>
			</div>

			<hr />

			<p class="description">
				${restaurant.description}
			</p>
		`;
  }
}

customElements.define('detail-card', DetailCard);
