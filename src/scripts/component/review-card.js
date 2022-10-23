class ReviewCard extends HTMLElement {
  set review(review) {
    this.render(review);
  }

  render(review) {
    this.innerHTML = `
			<div id="review-container">
				<div class="review">
					<p class="name">${review.name}</p>
					<p class="date">${review.date}</p>
					<p class="text">${review.review}</p>
				</div>
			</div>
		`;
  }
}

customElements.define('review-card', ReviewCard);
