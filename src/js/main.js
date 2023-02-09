import modal from './modules/modal';
import sliders from './modules/slider';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import checkMailInput from './modules/checkMailInput';
import showMoreStyles from './modules/showMoreStyles';
import hamburger from './modules/hamburger';
import hoverEffect from './modules/hoverEffect';
import calculcator from './modules/calculator';
import filter from './modules/filter';

window.addEventListener('DOMContentLoaded', () => {
  modal();
  forms();
  filter();
  hoverEffect();
  mask('[name="phone"]');
  checkMailInput('[name=email]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  sliders('.main-slider-item', 'vertical');
  showMoreStyles('.button-styles', '#styles .row');
  hamburger('.burger', 'burger-active', '.burger-menu');
  calculcator('#size', '#material', '#options', '.promocode', '.calc-price');
  sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
});
