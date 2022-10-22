const Home = {
  async render() {
    return `
      <section class="hero">
        <section class="hero__wrapper container">
          <h1 class="hero__logo">INFOODITY</h1>
          <p class="hero__title">
            Favorite restaurant <br />
            list for you
          </p>
          <p class="hero__subtitle">
            Start experiencing something that you <br />
            have never experienced before
          </p>
          <button class="hero__button">Start Explore</button>
        </section>
      </section>

      <section class="restaurant">
        <h2 class="restaurant__title">Explore Restaurant</h2>
        <p class="restaurant__subtitle">Sometimes first sight is promising</p>

        <restaurant-list></restaurant-list>
      </section>

      <section class="testimonials">
        <h2 class="testimonials__title">Testimonials</h2>
        <p class="testimonials__subtitle">What they say about this platform</p>

        <testimonial-list></testimonial-list>
      </section>
  `;
  },

  async afterRender() {},
};

export default Home;
