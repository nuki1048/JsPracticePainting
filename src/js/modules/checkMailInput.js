/* eslint-disable no-param-reassign */
const checkMailInput = (selector) => {
  const textInputs = document.querySelectorAll(selector);
  textInputs.forEach((input) => {
    input.addEventListener('keypress', (e) => {
      if (e.key.match(/[а-яё]/)) {
        e.preventDefault();
      }
    });
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[а-яё]/gim, '');
    });
  });
};
export default checkMailInput;
