import noUiSlider from 'noUiSlider';

export default class {
  constructor() {
    this.rangeSlider = document.querySelector('.js-connect__callback-range');
    this.addEvents();
  }

  addEvents() {
    noUiSlider.create(this.rangeSlider, {
      start: [200, 800],
      snap: true,
      connect: true,
      range: {
        'min': 0,
        '10%': 100,
        '20%': 200,
        '30%': 300,
        '40%': 400,
        '50%': 500,
        '60%': 600,
        '70%': 700,
        '80%': 800,
        '90%': 900,
        'max': 1000
      }
    })

    this.rangeSlider.noUiSlider.on('change', function (values, handle) {
      console.log(values, handle)
      // rangeSliderValueElement.innerHTML = values[handle];
    });
  }
}