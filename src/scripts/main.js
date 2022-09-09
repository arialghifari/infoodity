const main = () => {
  const btnHamburger = document.querySelector('.hamburger');
  const drawer = document.querySelector('.drawer');

  btnHamburger.addEventListener('click', (e) => {
    drawer.classList.toggle('open');
    e.stopPropagation();
  });

  document.body.addEventListener('click', (e) => {
    drawer.classList.remove('open');
    e.stopPropagation();
  });
};

export default main;
