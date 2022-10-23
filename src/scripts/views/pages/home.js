import InfooditySource from '../../data/infoodity-source';
import '../../component/restaurant-card';
import '../../component/testimonial-card';
import data from '../../../DATA.json';

const Home = {
  async render() {
    return `
      <section class="hero">
        <section class="hero__wrapper container">
          <h1 class="hero__logo">INFOODITY</h1>
          <p class="hero__title">
            Your favorite <br />
            restaurant list
          </p>
          <p class="hero__subtitle">
            Start experiencing something that you <br />
            have never experienced before
          </p>
          <a class="hero__button">Start Explore</a>
        </section>
      </section>

      <section class="restaurant">
        <h2 id="restaurant__title">Explore Restaurant</h2>
        <p class="restaurant__subtitle">Sometimes first sight is promising</p>

        <div id="restaurant-list">
          <p>Loading...</p>
        </div>
      </section>

      <section class="testimonials">
        <h2 class="testimonials__title">Testimonials</h2>
        <p class="testimonials__subtitle">What they say about this platform</p>

        <div id="testimonial-list"></div>
      </section>
  `;
  },

  async afterRender() {
    const { error, message, restaurants } = await InfooditySource.restaurants();
    const testimonials = data.testimonials;
    const restaurantListContainer = document.getElementById('restaurant-list');
    const testimonialListContainer = document.getElementById('testimonial-list');

    if (!error) {
      restaurantListContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        const restaurantCard = document.createElement('restaurant-card');
        restaurantCard.restaurant = restaurant;

        restaurantListContainer.appendChild(restaurantCard);
      });
    } else {
      restaurantListContainer.innerHTML = `<p class='message'>${message}</p>`;
    }

    testimonials.forEach((testimonial) => {
      const testimonialCard = document.createElement('testimonial-card');
      testimonialCard.testimonial = testimonial;

      testimonialListContainer.appendChild(testimonialCard);
    });
  },
};

export default Home;
