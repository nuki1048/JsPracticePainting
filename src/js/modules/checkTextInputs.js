const checkTextInputs = (selector) => {
  const textInputs = document.querySelectorAll(selector);
  textInputs.forEach((input) => {
    input.addEventListener('keypress', (e) => {
      if (e.key.match(/[a-z 0-9]/gi)) {
        e.preventDefault();
      }
    });
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[a-z 0-9]/gim, '');
    });
  });
};
export default checkTextInputs;
