const modal = () => {
  function bindModal(modalElement, modalTrigger, modalClose, modalActiveClass = 'popup-active') {
    const modalSelector = document.querySelector(modalElement);
    const trigger = document.querySelectorAll(modalTrigger);
    const close = document.querySelector(modalClose);
    function modalToggle(selector) {
      selector.classList.toggle(modalActiveClass);
    }
    trigger.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        modalToggle(modalSelector);
        modalSelector.classList.add('animated', 'fadeIn');
        document.body.overflow = 'hidden';
      });
    });
    close.addEventListener('click', () => {
      modalToggle(modalSelector);

      document.body.overflow = 'visible';
    });
    modalSelector.addEventListener('click', (e) => {
      if (e.target === modalSelector) {
        modalToggle(modalSelector);
        document.body.overflow = 'visible';
      }
    });
  }
  function modalScrollShow() {
    // const modalS = document.querySelector(modalSelector);
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      document.querySelector('.fixed-gift').style.display = 'none';
      document.querySelector('.popup-gift').classList.toggle('popup-active');
      window.removeEventListener('scroll', modalScrollShow);
    }
  }
  window.addEventListener('scroll', modalScrollShow);

  bindModal('.popup-design', ' .button-design', '.popup-design .popup-close');
  bindModal('.popup-consultation', '.button-consultation', '.popup-consultation .popup-close');
  bindModal('.popup-gift', '.fixed-gift', '.popup-gift .popup-close');
};
export default modal;
