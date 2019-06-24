import { addClass, removeClass } from './helper.js';

const htmlElements = {
  links: document.querySelectorAll('.nav > .nav-links > ul > li > a'),
  chkNav: document.querySelector('.nav input#chk-nav'),
  navSelectedText: document.querySelector('.nav .nav-selected-text')
};

function Nav() {}

Nav.prototype.init = () => {
  htmlElements.links.forEach(link => {
    link.addEventListener('click', () => {
      removeClass('selected', ...htmlElements.links);
      addClass('selected', link);
      htmlElements.chkNav.checked = false;
      htmlElements.navSelectedText.textContent = link.textContent;
    });
  });
};

export { Nav };
