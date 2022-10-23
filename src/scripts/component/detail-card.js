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

			<div class="header">
				<p class="title">${restaurant.name}</p>
				<div id="likeButtonContainer"></div>
			</div>

			<div class="categories">
				${restaurant.categories.map((category) => `<p>${category.name}</p>`).join('')}
			</div>

			<div class="info">
				<div>
					<img src="./ic-map-pin.svg" alt="Map pin icon" />
					<p>${restaurant.address}, ${restaurant.city}</p>
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

			<div class="foods-container">
				<div class="foods">
					<p>Foods</p>

					<ul class="food">
						${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
					</ul>
				</div>

				<div class="foods">
					<p>Drinks</p>

					<ul class="drink">
						${restaurant.menus.drinks.map((drinks) => `<li>${drinks.name}</li>`).join('')}
					</ul>
				</div>
			</div>

			<hr />

			<div class="reviews">
				<form id="reviewForm">
					<input type="hidden" name="id" value="${restaurant.id}" required />
					<input type="text" name="name" placeholder="Name" required />
					<textarea name="review" cols="10" rows="5" placeholder="Write review" required></textarea>
					<button>COMMENT</button>
				</form>

				<div id="review-container"></div>
			</div>
		`;
  }
}

customElements.define('detail-card', DetailCard);
