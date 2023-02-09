const hamburger = (hamburgerElement, activeClass, menuSelector) => {
	const hamburger = document.querySelector(hamburgerElement),
		menu = document.querySelector(menuSelector),
		menuItem = document.querySelectorAll(".burger-menu li");
	hamburger.addEventListener("click", (e) => {
		if (menu.style.display != "block" || !menu.style.display) {
			hamburger.classList.toggle(activeClass);
			menu.classList.add("animated", "fadeInDown");
			menu.style.display = "block";
		} else {
			menu.style.display = "none";
		}
	});
	menuItem.forEach((item) => {
		item.addEventListener("click", (e) => {
			menu.style.display = "none";
		});
	});
};
export default hamburger;
