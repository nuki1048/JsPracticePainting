const calculcator = (size, material, options, promocode, result) => {
	const sizeBlock = document.querySelector(size),
		materialBlock = document.querySelector(material),
		optionsBlock = document.querySelector(options),
		resultBlock = document.querySelector(result),
		promoCodeBlock = document.querySelector(promocode);

	const calcFunction = () => {
		const sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);
		if (sizeBlock == "" || materialBlock == "") {
			resultBlock.textContent = "Пожалуста, виберете усі данні";
		} else if (promoCodeBlock.value === "IWANTPOPART") {
			resultBlock.textContent = Math.round(sum * 0.7);
		} else {
			resultBlock.textContent = sum;
		}
	};
	sizeBlock.addEventListener("change", calcFunction);
	materialBlock.addEventListener("change", calcFunction);
	optionsBlock.addEventListener("change", calcFunction);
	promoCodeBlock.addEventListener("input", calcFunction);
};
export default calculcator;
