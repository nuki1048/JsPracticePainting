/* eslint-disable no-tabs */
import { getRes } from '../services/services';

const showMoreStyles = (buttonTrigger, wrapper) => {
  const trigger = document.querySelector(buttonTrigger);
  // trigger.classList.add("animated");
  // trigger.addEventListener("click", (e) => {
  // 	if (e.target && e.target.classList.contains(buttonTrigger.replace(/\./, ""))) {
  // 		selector.forEach((item) => {
  // 			item.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs", "styles-2");
  // 			item.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1", "animated", "fadeIn");
  // 		});
  // 	}
  // 	trigger.classList.add("fadeOut");
  // 	setTimeout(() => {
  // 		trigger.remove();
  // 	}, 600);
  // });
  function createCards(response) {
    response.forEach((item) => {
      const card = document.createElement('div');
      card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeIn');

      card.innerHTML = `
				<div class=styles-block>
					<img src=${item.src} alt>
					<h4>${item.title}</h4>
					<a href="${item.link}">Подробнее</a>
				</div>
			`;
      document.querySelector(wrapper).appendChild(card);
    });
    this.remove();
  }
  trigger.addEventListener('click', () => {
    getRes('http://localhost:3000/styles')
      .then((res) => createCards(res))
      .catch((error) => {
        throw error;
      });
  });
};
export default showMoreStyles;
