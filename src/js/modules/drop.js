const drop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');
  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((eventName) => {
    fileInputs.forEach((input) => {
      // eslint-disable-next-line no-use-before-define
      input.addEventListener(eventName, preventDefaults, false);
    });
  });

  function preventDefaults(event) {
    event.preventDefaults();
    event.stopPropagation();
  }
  function highlight(item) {
    item.closest('.file_upload').style.border = '5px solid yellow';
    item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0,.7)';
  }
  function unHighliht(item) {
    item.closest('.file_upload').style.border = 'none';
    if (item.closest('.calc_form')) {
      item.closest('.file_upload').style.backgroundColor = '#fff';
    } else {
      item.closest('.file_upload').style.backgroundColor = '#ededed';
    }
  }
  ['dragenter', 'dragover'].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });
  ['dragleave', 'drop'].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, () => unHighliht(input), false);
    });
  });
  fileInputs.forEach((input) => {
    input.addEventListener('drop', (e) => {
      input.files = e.dataTransfer.files;
      let dots;
      const nameSplit = input.files[0].name.split('.');
      // eslint-disable-next-line no-unused-expressions
      nameSplit[0].length > 6 ? (dots = '...') : (dots = '.');
      const name = nameSplit[0].substring(0, 6) + dots + nameSplit[1];
      input.previousElementSibling.textContent = name;
    });
  });
};
export default drop;
