import './testimonial-card';
import data from '../../DATA.json';

class TestimonialList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    data.testimonials.forEach((testimonial) => {
      const testimonialCard = document.createElement('testimonial-card');
      testimonialCard.testimonial = testimonial;

      this.appendChild(testimonialCard);
    });
  }
}

customElements.define('testimonial-list', TestimonialList);
