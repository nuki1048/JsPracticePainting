const showMoreStyles = (elementSelector, buttonTrigger) => {
	const selector = document.querySelectorAll(elementSelector),
		trigger = document.querySelector(buttonTrigger);
	trigger.classList.add("animated");
	trigger.addEventListener("click", (e) => {
		if (e.target && e.target.classList.contains(buttonTrigger.replace(/\./, ""))) {
			selector.forEach((item) => {
				item.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs", "styles-2");
				item.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1", "animated", "fadeIn");
			});
		}
		trigger.classList.add("fadeOut");
		setTimeout(() => {
			trigger.remove();
		}, 600);
	});
};
export default showMoreStyles;
