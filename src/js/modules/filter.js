const filter = () => {
	const menu = document.querySelector(".portfolio-menu"),
		items = menu.querySelectorAll("li"),
		btnAll = menu.querySelector(".all"),
		btnLovers = menu.querySelector(".lovers"),
		btnChef = menu.querySelector(".chef"),
		btnGirl = menu.querySelector(".girl"),
		btnGuy = menu.querySelector(".guy"),
		btnGrandmother = menu.querySelector(".grandmother"),
		btnGranddad = menu.querySelector(".granddad"),
		wrapper = document.querySelector(".portfolio-wrapper"),
		markAll = wrapper.querySelectorAll(".all"),
		no = document.querySelector(".portfolio-no");

	const showType = (type) => {
		no.style.display = "none";
		no.classList.remove("animated", "fadeIn");
		markAll.forEach((item) => {
			if (item.classList.contains(type)) {
				item.style.display = "block";
				item.classList.add("animated", "fadeIn");
			} else if (type == "granddad" || type == "grandmother") {
				item.style.display = "none";
				item.classList.remove("animated", "fadeIn");
				no.style.display = "block";
				no.classList.add("animated", "fadeIn");
			} else {
				item.style.display = "none";
				item.classList.remove("animated", "fadeIn");
			}
		});
		// no.style.display = "none";
		// no.classList.remove("animated", "fadeIn");
	};
	btnAll.addEventListener("click", () => {
		showType("all");
	});
	btnGirl.addEventListener("click", () => {
		showType("girl");
	});
	btnChef.addEventListener("click", () => {
		showType("chef");
	});
	btnGuy.addEventListener("click", () => {
		showType("guy");
	});
	btnLovers.addEventListener("click", () => {
		showType("lovers");
	});
	btnGrandmother.addEventListener("click", () => {
		showType("grandmother");
	});
	btnGranddad.addEventListener("click", (e) => {
		showType("granddad");
	});
	menu.addEventListener("click", (e) => {
		if (e.target && e.target.tagName == "LI") {
			items.forEach((item, i) => {
				item.classList.remove("active");
				e.target.classList.add("active");
			});
		}
	});
};
export default filter;
