const htmlElements = {
  items: document.querySelectorAll('.photo'),
  nextButton: document.querySelector('.carousel-button-next'),
  prevButton: document.querySelector('.carousel-button-prev')
};

function Carousel() {}

Carousel.prototype.init = function(interval) {
  let isMoving = false;
  let currentIdx = 0;

  const update = function(increment) {
    if (isMoving) {
      return;
    }

    isMoving = true;
    setTimeout(() => {
      isMoving = false;
    }, 500);

    htmlElements.items.forEach(item => (item.className = 'photo'));
    currentIdx = (currentIdx + htmlElements.items.length + increment) % htmlElements.items.length;
    const nextIdx = (currentIdx + 1) % htmlElements.items.length;
    const prevIdx = (currentIdx - 1 + htmlElements.items.length) % htmlElements.items.length;

    htmlElements.items[currentIdx].classList.add('active');
    htmlElements.items[nextIdx].classList.add('next');
    htmlElements.items[prevIdx].classList.add('prev');
  };

  htmlElements.nextButton.addEventListener('click', update.bind(this, 1));
  htmlElements.prevButton.addEventListener('click', update.bind(this, -1));

  setInterval(update.bind(null, 1), interval);
};

export { Carousel };
