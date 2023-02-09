/* eslint-disable no-tabs */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { postData } from '../services/services';

const forms = () => {
  const formsSelector = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const upload = document.querySelectorAll('[name="upload"]');
  const message = {
    loading: 'Загрузка',
    sucsess: 'Дякую! Скоро ми з вами звяжемось',
    failure: 'Щось пішло не так',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png',
  };
  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php',
  };
  function clearInputs() {
    inputs.forEach((input) => {
      input.value = '';
    });
    upload.forEach((input) => {
      input.previousElementSibling.textContent = 'Файл не выбран';
    });
  }

  upload.forEach((item) => {
    item.addEventListener('input', () => {
      // eslint-disable-next-line no-console
      console.log(item.files[0]);
      let dots;
      const nameSplit = item.files[0].name.split('.');
      nameSplit[0].length > 6 ? (dots = '...') : (dots = '.');
      const name = nameSplit[0].substring(0, 6) + dots + nameSplit[1];
      item.previousElementSibling.textContent = name;
    });
  });

  formsSelector.forEach((item) => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.appendChild(statusMessage);
      item.classList.add('animated', 'fadeOut');

      setTimeout(() => {
        item.style.display = 'none';
      }, 400);

      const statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);

      const textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);

      let api;
      item.closest('.popup-design') || item.classList.contains('calc_form')
        ? (api = path.designer)
        : (api = path.question);

      const formData = new FormData(item);
      if (item.classList.contains('calc_form')) {
        const input = document.querySelector('.calc-price');
        formData.append('price', input.textContent);
      } else {
        formData.append('type', 'Пользователь не делал заказ на картину');
      }
      postData(api, formData)
        .then(() => {
          statusImg.setAttribute('src', message.ok);
          textMessage.textContent = message.sucsess;
        })
        .catch(() => {
          statusImg.setAttribute('src', message.fail);
          textMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            item.style.display = 'block';
            item.classList.remove('fadeOut');
            item.classList.add('fadeInUp');
          }, 5000);
        });
    });
  });

  // function showMessage(message) {
  // 	const modal = document.querySelector(".popup-consultation");
  // 	modal.innerHTML = "";
  // 	modal.classList.toggle("popup-active");

  // 	const thanksModal = document.createElement("div");
  // 	thanksModal.innerHTML = `

  //         <div class=popup-dialog>
  //             <div class=popup-content>
  //                 <button class=popup-close>&times;</button>
  //                 <h4>Остались вопросы? Закажите обратный звонок</h4>
  //                 <div class=main-form>
  //                     ${message};
  //                 </div>
  //             </div>
  //         </div>

  //     `;
  // 	modal.appendChild(thanksModal);

  // 	setTimeout(() => {
  // 		thanksModal.remove();
  // 		modal.classList.toggle("popup-active");
  // 	}, 2000);
  // }
};
export default forms;
