import { addClass, removeClass } from './helper.js';

const htmlElements = {
  links: document.querySelectorAll('.nav > .nav-links > ul > li > a')
};

function Nav() {}

Nav.prototype.init = () => {
  htmlElements.links.forEach(link => {
    link.addEventListener('click', () => {
      removeClass('selected', ...htmlElements.links);
      addClass('selected', link);
    });
  });
};

export { Nav };
