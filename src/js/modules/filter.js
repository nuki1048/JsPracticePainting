const filter = () => {
  const menu = document.querySelector('.portfolio-menu');
  const items = menu.querySelectorAll('li');
  const btnAll = menu.querySelector('.all');
  const btnLovers = menu.querySelector('.lovers');
  const btnChef = menu.querySelector('.chef');
  const btnGirl = menu.querySelector('.girl');
  const btnGuy = menu.querySelector('.guy');
  const btnGrandmother = menu.querySelector('.grandmother');
  const btnGranddad = menu.querySelector('.granddad');
  const wrapper = document.querySelector('.portfolio-wrapper');
  const markAll = wrapper.querySelectorAll('.all');
  const no = document.querySelector('.portfolio-no');

  const showType = (type) => {
    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');
    markAll.forEach((item) => {
      if (item.classList.contains(type)) {
        item.style.display = 'block';
        item.classList.add('animated', 'fadeIn');
      } else if (type === 'granddad' || type === 'grandmother') {
        item.style.display = 'none';
        item.classList.remove('animated', 'fadeIn');
        no.style.display = 'block';
        no.classList.add('animated', 'fadeIn');
      } else {
        item.style.display = 'none';
        item.classList.remove('animated', 'fadeIn');
      }
    });
    // no.style.display = "none";
    // no.classList.remove("animated", "fadeIn");
  };
  btnAll.addEventListener('click', () => {
    showType('all');
  });
  btnGirl.addEventListener('click', () => {
    showType('girl');
  });
  btnChef.addEventListener('click', () => {
    showType('chef');
  });
  btnGuy.addEventListener('click', () => {
    showType('guy');
  });
  btnLovers.addEventListener('click', () => {
    showType('lovers');
  });
  btnGrandmother.addEventListener('click', () => {
    showType('grandmother');
  });
  btnGranddad.addEventListener('click', () => {
    showType('granddad');
  });
  menu.addEventListener('click', (e) => {
    if (e.target && e.target.tagName === 'LI') {
      items.forEach((item) => {
        item.classList.remove('active');
        e.target.classList.add('active');
      });
    }
  });
};
export default filter;
