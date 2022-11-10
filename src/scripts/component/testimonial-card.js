class TestimonialCard extends HTMLElement {
  set testimonial(testimonial) {
    this.render(testimonial);
  }

  render(testimonial) {
    this.innerHTML = `
			<p>${testimonial.text}</p>

			<section class="testimonials__card__user">
				<picture>
					<source type="image/webp" srcset="${testimonial.picture2}" loading="lazy" />
					<img src="${testimonial.picture}" alt="${testimonial.name}" loading="lazy" />
				</picture>
				<section>
					<p>${testimonial.name}</p>
					<p>${testimonial.title}</p>
				</section>
			</section>
		`;
  }
}

customElements.define('testimonial-card', TestimonialCard);
