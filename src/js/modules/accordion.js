const accordion = (triggersSelector) => {
  const buttons = document.querySelectorAll(triggersSelector);
  buttons.forEach((button) => {
    // eslint-disable-next-line func-names
    button.addEventListener('click', function () {
      if (!this.classList.contains('active')) {
        buttons.forEach((btn) => {
          btn.classList.remove('active', 'active-style');
          btn.nextElementSibling.classList.remove('accordion-block-active', 'animated', 'fadeInDown');
        });
        this.classList.add('active', 'active-style');
        this.nextElementSibling.classList.add('accordion-block-active', 'animated', 'fadeInDown');
      }
    });
  });
};
export default accordion;
