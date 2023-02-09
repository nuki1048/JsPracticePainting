/* eslint-disable no-restricted-globals */
const hamburger = (hamburgerElement, activeClass, menuSelector) => {
  const hamburgerSelector = document.querySelector(hamburgerElement);
  const menu = document.querySelector(menuSelector);
  const menuItem = document.querySelectorAll('.burger-menu li');
  hamburgerSelector.addEventListener('click', () => {
    if ((menu.style.display !== 'block' && screen.availWidth < 992) || (!menu.style.display && screen.availWidth < 992)) {
      hamburgerSelector.classList.toggle(activeClass);
      menu.classList.add('animated', 'fadeInDown');
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });
  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      menu.style.display = 'none';
    });
  });
};
export default hamburger;
