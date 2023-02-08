import { postData } from "../services/services";

const forms = () => {
	const forms = document.querySelectorAll("form"),
		inputs = document.querySelectorAll("input"),
		upload = document.querySelectorAll('[name="upload"]'),
		message = {
			loading: "Загрузка",
			sucsess: "Дякую! Скоро ми з вами звяжемось",
			failure: "Щось пішло не так",
			spinner: "assets/img/spinner.gif",
			ok: "assets/img/ok.png",
			fail: "assets/img/fail.png",
		},
		path = {
			designer: "assets/server.php",
			question: "assets/question.php",
		};
	function clearInputs() {
		inputs.forEach((item) => {
			item.value = "";
		});
		upload.forEach((item) => {
			item.previousElementSibling.textContent = "Файл не выбран";
		});
	}

	upload.forEach((item) => {
		item.addEventListener("input", () => {
			console.log(item.files[0]);
			let dots;
			const nameSplit = item.files[0].name.split(".");
			nameSplit[0].length > 6 ? (dots = "...") : (dots = ".");
			const name = nameSplit[0].substring(0, 6) + dots + nameSplit[1];
			item.previousElementSibling.textContent = name;
		});
	});

	forms.forEach((item) => {
		item.addEventListener("submit", (e) => {
			e.preventDefault();

			let statusMessage = document.createElement("div");
			statusMessage.classList.add("status");
			item.parentNode.appendChild(statusMessage);
			item.classList.add("animated", "fadeOut");

			setTimeout(() => {
				item.style.display = "none";
			}, 400);

			let statusImg = document.createElement("img");
			statusImg.setAttribute("src", message.spinner);
			statusImg.classList.add("animated", "fadeInUp");
			statusMessage.appendChild(statusImg);

			let textMessage = document.createElement("div");
			textMessage.textContent = message.loading;
			statusMessage.appendChild(textMessage);

			let api;
			item.closest(".popup-design") || item.classList.contains("calc_form")
				? (api = path.designer)
				: (api = path.question);
			console.log(api);

			const formData = new FormData(item);
			postData(api, formData)
				.then((data) => {
					console.log(data);
					statusImg.setAttribute("src", message.ok);
					textMessage.textContent = message.sucsess;
				})
				.catch(() => {
					statusImg.setAttribute("src", message.fail);
					textMessage.textContent = message.failure;
				})
				.finally(() => {
					clearInputs();
					setTimeout(() => {
						statusMessage.remove();
						item.style.display = "block";
						item.classList.remove("fadeOut");
						item.classList.add("fadeInUp");
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
