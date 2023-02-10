const hoverEffect = () => {
  const imgBlock = document.querySelectorAll('.sizes-block');

  function showImg(block) {
    const img = block.querySelector('img');
    const path = `${img.getAttribute('src').slice(0, -4)}-1.png`;
    img.setAttribute('src', path);
    block.querySelectorAll('p:not(.sizes-hit)').forEach((item) => {
      item.style.display = 'none';
    });
  }
  function hideImg(block) {
    const img = block.querySelector('img');
    const path = `${img.getAttribute('src').slice(0, -6)}.png`;
    img.setAttribute('src', path);
    block.querySelectorAll('p:not(.sizes-hit)').forEach((item) => {
      item.style.display = 'block';
    });
  }
  imgBlock.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      showImg(item);
    });
    item.addEventListener('mouseleave', () => {
      hideImg(item);
    });
  });
};
export default hoverEffect;
