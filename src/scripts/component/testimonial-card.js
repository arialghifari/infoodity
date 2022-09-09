class TestimonialCard extends HTMLElement {
  set testimonial(testimonial) {
    this.render(testimonial);
  }

  render(testimonial) {
    this.innerHTML = `
			<p>${testimonial.text}</p>

			<section class="testimonials__card__user">
				<img
					src="${testimonial.picture}"
					alt="${testimonial.name} picture"
				/>
				<section>
					<p>${testimonial.name}</p>
					<p>${testimonial.title}</p>
				</section>
			</section>
		`;
  }
}

customElements.define('testimonial-card', TestimonialCard);
