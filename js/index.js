import { Nav } from './header.nav.js';
import { Carousel } from './main.carousel.js';
import { Projects } from './main.projects.js';
import { Features } from './main.features.js';

new Nav().init();
new Carousel().init(5000);
new Projects().init();
new Features().init();
