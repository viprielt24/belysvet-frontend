/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/
export default class {
  constructor() {
    this.fileInputs = document.querySelectorAll('.js-inputfile');
    this.addEvents();
  }

  addEvents() {
    this.fileInputs.forEach(input => {
      let label = input.nextElementSibling;
      let labelVal = label.innerHTML;
      let labelText = 'Прикрепить файл';
      let labelClear = label.nextElementSibling;

      input.addEventListener('change', function (e) {
        var fileName = '';
        if (this.files && this.files.length > 1) {
          fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
          input.classList.add('has-file');
        } else {
          fileName = e.target.value.split('\\').pop();
          input.classList.add('has-file');
        }

        if (fileName) {
          label.querySelector('.js-inputfile-name').innerHTML = fileName;
        } else {
          label.innerHTML = labelVal;
        }
      });

      labelClear.addEventListener('click', () => {
        input.value = '';
        input.classList.remove('has-file');
        label.querySelector('.js-inputfile-name').innerHTML = labelText;
      });

      // Firefox bug fix
      input.addEventListener('focus', function () {
        input.classList.add('has-focus');
      });
      input.addEventListener('blur', function () {
        input.classList.remove('has-focus');
      });
    });
  }
}