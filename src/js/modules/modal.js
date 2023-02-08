const modal = () => {
	function bindModal(modalSelector, modalTrigger, modalClose, modalActiveClass = "popup-active") {
		const modal = document.querySelector(modalSelector),
			trigger = document.querySelectorAll(modalTrigger),
			close = document.querySelector(modalClose);
		function modalToggle(modal) {
			modal.classList.toggle(modalActiveClass);
		}
		trigger.forEach((item) => {
			item.addEventListener("click", (e) => {
				e.preventDefault();
				modalToggle(modal);
				modal.classList.add("animated", "fadeIn");
				document.body.overflow = "hidden";
			});
		});
		close.addEventListener("click", (e) => {
			modalToggle(modal);

			document.body.overflow = "visible";
		});
		modal.addEventListener("click", (e) => {
			if (e.target === modal) {
				modalToggle(modal);
				document.body.overflow = "visible";
			}
		});
	}
	function modalScrollShow() {
		// const modalS = document.querySelector(modalSelector);
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			document.querySelector(".fixed-gift").style.display = "none";
			document.querySelector(".popup-gift").classList.toggle("popup-active");
			window.removeEventListener("scroll", modalScrollShow);
		}
	}
	window.addEventListener("scroll", modalScrollShow);

	bindModal(".popup-design", " .button-design", ".popup-design .popup-close");
	bindModal(".popup-consultation", ".button-consultation", ".popup-consultation .popup-close");
	bindModal(".popup-gift", ".fixed-gift", ".popup-gift .popup-close");
};
export default modal;
