import { addClass, removeClass } from './helper.js';

const htmlElements = {
  links: document.querySelectorAll('.projects > .links > ul > li > a')
};

function Projects() {}

Projects.prototype.init = () => {
  htmlElements.links.forEach(link => {
    link.addEventListener('click', evt => {
      evt.preventDefault();
      removeClass('selected', ...htmlElements.links);
      addClass('selected', link);
    });
  });
};

export { Projects };
