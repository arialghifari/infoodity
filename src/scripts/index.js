import 'regenerator-runtime';
import '../styles/main.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('.drawer'),
  content: document.body,
});

window.addEventListener('load', async () => {
  await swRegister();
});
