import './restaurant-card';
import icMapPin from '../../public/ic-map-pin.svg';
import icStar from '../../public/ic-star.svg';
import icArrow from '../../public/ic-arrow-up-right.svg';

class RestaurantCard extends HTMLElement {
  set restaurant(restaurant) {
    this.render(restaurant);
  }

  render(restaurant) {
    this.innerHTML = `
			<img
				src="${restaurant.pictureId}"
				alt="${restaurant.name} image"
			/>

			<section class="restaurant__card__info">
				<section>
					<img src="${icMapPin}" alt="Map pin icon" />
					<p>${restaurant.city}</p>
				</section>
				<section>
					<img src="${icStar}" alt="Star icon" />
					<p>${restaurant.rating}</p>
				</section>
			</section>

			<section class="restaurant__card__body">
				<section>
					<h3>${restaurant.name}</h3>
					<p>${restaurant.description.split('', 150).join('')}...</p>
				</section>
				<button>
					<p>View More</p>
					<img src="${icArrow}" alt="Arrow icon" />
				</button>
			</section>
		`;
  }
}

customElements.define('restaurant-card', RestaurantCard);
