import modal from "./modules/modal";
import sliders from "./modules/slider";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import checkMailInput from "./modules/checkMailInput";
import showMoreStyles from "./modules/showMoreStyles";
window.addEventListener("DOMContentLoaded", () => {
	"use strict";
	modal();
	sliders(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
	sliders(".main-slider-item", "vertical");
	forms();
	mask('[name="phone"]');
	checkTextInputs('[name="name"]');
	checkTextInputs('[name="message"]');
	checkMailInput("[name=email]");
	showMoreStyles(".hidden-lg", ".button-styles");
});
