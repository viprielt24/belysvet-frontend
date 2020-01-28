import noUiSlider from 'nouislider';
import ConnectChoices from './connect-choices';

export default class {
  constructor() {
    this.rangeSlider = document.querySelector('.js-connect__callback-range');
    this.addEvents();
  }

  addEvents() {
    const ConnectChoicesInst = new ConnectChoices();
    //инит
    noUiSlider.create(this.rangeSlider, {
      start: [690, 960],
      connect: true,
      range: {
        'min': 600,
        'max': 1020
      },
      step: 30,
      margin: 30,
    });
    //изменяем селекты от слайдера
    this.rangeSlider.noUiSlider.on('change', (values) => {
      ConnectChoicesInst.selectsFromInst.setChoiceByValue(Math.round(values[0]).toString());
      ConnectChoicesInst.selectsToInst.setChoiceByValue(Math.round(values[1]).toString());
    });
    //изменяем левую точку слайдера по селекту С
    ConnectChoicesInst.selectsFromInst.passedElement.element.addEventListener('change', (event) => {
      let rangeCompare = Math.round(this.rangeSlider.noUiSlider.get()[1]) - event.detail.value;
      if (rangeCompare < 30) {
        this.rangeSlider.noUiSlider.set([event.detail.value, this.rangeSlider.noUiSlider.get()[1] + 30]);
        ConnectChoicesInst.selectsToInst.setChoiceByValue(Math.round(this.rangeSlider.noUiSlider.get()[1] + 30).toString());
      } else {
        this.rangeSlider.noUiSlider.set([event.detail.value, null]);
      }

    });
    //изменяем правую точку слайдера по селекту ДО
    ConnectChoicesInst.selectsToInst.passedElement.element.addEventListener('change', (event) => {
      let rangeCompare = Math.round(event.detail.value - this.rangeSlider.noUiSlider.get()[0]);
      if (rangeCompare < 30) {
        this.rangeSlider.noUiSlider.set([event.detail.value - 30, event.detail.value]);
        ConnectChoicesInst.selectsFromInst.setChoiceByValue(Math.round(event.detail.value - 30).toString());
      } else {
        this.rangeSlider.noUiSlider.set([null, event.detail.value]);
      }
    });
  }
}