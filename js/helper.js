const addClass = (className, ...elements) => {
  elements.forEach(link => {
    link.classList.add(className);
  });
};

const removeClass = (className, ...elements) => {
  elements.forEach(link => {
    link.classList.remove(className);
  });
};

export { addClass, removeClass };
