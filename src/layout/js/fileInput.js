/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/
export default class {
  constructor() {
    this.fileInputs = [...document.querySelectorAll('.js-inputfile')];
    this.addEvents();
  }
  
  addEvents() {
    this.fileInputs.forEach(input => {
      let label = input.nextElementSibling,
        labelVal = label.innerHTML;
      
      input.addEventListener('change', function (e) {
        var fileName = '';
        if (this.files && this.files.length > 1)
          fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
        else
          fileName = e.target.value.split('\\').pop();
        
        if (fileName)
          label.querySelector('.js-inputfile-name').innerHTML = fileName;
        else
          label.innerHTML = labelVal;
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