import 'regenerator-runtime'; /* for async await transpile */
import html from '../templates/index.html';
import '../styles/main.scss';
import main from './main.js';
import './component/restaurant-list.js';
import './component/restaurant-card.js';
import './component/testimonial-list.js';
import './component/testimonial-card.js';

document.addEventListener('DOMContentLoaded', main);
