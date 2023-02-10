const scroll = (up) => {
  const upSelector = document.querySelector(up);
  upSelector.classList.add('animated');
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1200) {
      upSelector.classList.add('fadeInUp');
      upSelector.classList.remove('fadeOutDown');
    } else {
      upSelector.classList.remove('fadeInUp');
      upSelector.classList.add('fadeOutDown');
    }
  });
  // scrolling with raf
  //   const links = document.querySelectorAll('[href^="#"]');
  //   const speed = 0.7;
  //   links.forEach((item) => {
  //     item.addEventListener('click', function (e) {
  //       e.preventDefault();
  //       const widthTop = document.documentElement.scrollTop;
  //       const { hash } = this;
  //     });
  //   });
  // pure JS scrolling

//   const element = document.documentElement;
//   const documentBody = document.body;
//   const calcScroll = () => {
//     upSelector.addEventListener('click', (event) => {
//       const scrollTop = Math.round(documentBody.scrollTop || element.scrollTop);
//       if (this.hash !== '') {
//         event.preventDefault();
//         const hashElement = document.querySelector(this.hash);
//         let hashELementTop;
//         while (hashElement.offsetParent) {
//           hashELementTop += hashElement.offsetTop;
//           hashELementTop = hashElement.offsetParent;
//         }
//         hashELementTop = Math.round(hashELementTop);
//         // eslint-disable-next-line no-use-before-define
//         smoothScroll(scrollTop, hashELementTop, this.hash);
//       }
//     });
//   };
//   const smoothScroll = (from, to, hash) => {
//     const timeInterval = 1;
//     let prevScrollTop;
//     let speed;
//     if (to > from) {
//       speed = 30;
//     } else {
//       speed = -30;
//     }
//     const move = setInterval(() => {
//       const scrollTop = Math.round(documentBody.scrollTop || element.scrollTop);
//       if (prevScrollTop === scrollTop || (to > from && scrollTop >= to) || (to < from && scrollTop <= to)) {
//         clearInterval(move);
//         // eslint-disable-next-line no-restricted-globals
//         history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
//       } else {
//         documentBody.scrollTop += speed;
//         element.scrollTop += speed;
//         prevScrollTop = scrollTop;
//       }
//     }, timeInterval);
//   };
//   calcScroll();
};

export default scroll;
