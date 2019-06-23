const htmlElements = {
  links: document.querySelectorAll('.nav > .nav-links > ul > li > a[data-select]')
};

const addClass = (className, ...elements) => {
  elements.forEach(link => {
    link.classList.add('selected');
  });
};

const removeClass = (className, ...elements) => {
  elements.forEach(link => {
    link.classList.remove('selected');
  });
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
