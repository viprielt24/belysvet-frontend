import IMask from 'imask';
/**
 * Как использовать:
 * 1. Поставить форме .js-form-validate
 * 2. Расставить полям тип валидации, например, .js-form-validate__empty или .js-form-validate__email
 */
export default class Validate {
  constructor() {
    //elems
    this.forms = [...document.querySelectorAll('.js-form-validate')];
    //props
    this.errorClass = 'has-error';//.form-element
    this.valueClass = 'has-value';//.form-element
    //func
    this.addEvents();
  }

  addEvents() {
    this.forms.forEach(form => {
      //маска для телефона
      if (form.querySelector('.js-form-validate__phone')){
        let phoneField = form.querySelector('.js-form-validate__phone');
        Validate.inputPhone(phoneField);
      }
      //автозаполнение формы тестовыми данными
      // Validate.formAutoComplite(form);
      form.addEventListener('submit', event => {
        event.preventDefault();
        this.submitValid(form);
        this.submitFetch(form);
      });
    });
  }

  submitValid(form) {
    [...form.querySelectorAll('input')].forEach(input => {
      //поле обязательное, если класс начинается на 'js-form-validate'
      let inputRequired = input.className.indexOf('js-form-validate') > 0;
      if (!inputRequired) return;
      Validate.inputValid(input);
    });
  }

  submitFetch(form) {
    let inputs = [...form.querySelectorAll('input')];
    let formValid = false;
    //есть ли поля с ошибкой
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].classList.contains(this.errorClass)) {
        formValid = false;

        break;

      } else {
        formValid = true;
      }
    }
    if (!formValid) return;

    // отправка данных
    window.preloader.show();
    fetch(form.getAttribute('action'), {
      method: 'POST',
      body: new FormData(form)
    }).then(res => {
      window.preloader.hide();
      /*if (res.status !== 200) {
        throw new Error('Ошибка');
      }*/

      return res.json();
    }).then((res) => {
      if(res.success == true){
        //очищаем форму
        form.reset();
        //очищаем элементы формы от класса заполнения
        let inputs = [...form.querySelectorAll('input')];
        inputs.forEach(input => {
          let inputWrapLabel = input.parentNode;
          inputWrapLabel.classList.remove(this.valueClass);
          if (inputWrapLabel.classList.contains('label--checkbox')) {
            inputWrapLabel.querySelector('input').checked = false;
          }
        });

        //выводим сообщение об успешной отправке
        let successMessage = document.querySelector('.js-popup-thanks');
        let formWrap = document.querySelector('.popup--visible');

        if (successMessage){
          successMessage.classList.add('popup--visible');
          successMessage.querySelector('.js-popup-close').addEventListener('click', () => {
            successMessage.classList.remove('popup--visible')
          });
        }

        setTimeout(()=>{
          if(formWrap){
            formWrap.classList.remove('popup--visible');
          }
        }, 500);
      }else{
        if(form.querySelector('.form-error')){
          form.querySelector('.form-error').innerHTML = `<p>${res.message}</p>`;
        }else{
          alert(res.message);
        }
      }
      if(typeof res.data.callback != 'undefined'){
        eval(res.data.callback);
      }
    }).catch(err => {
      window.preloader.hide();
      console.warn(err);
      console.log('Форму не удалось отправить, action не верный');
    });
  }

  static inputPhone(phoneField) {
    //включаем маску
    var phoneMask = new IMask(phoneField, {
      mask: '+{7} (000) 000-00-00',
    });
    //показываем маску при фокусе
    phoneField.addEventListener('focus', _ => {
      phoneMask.updateOptions({lazy: false});
    });
    // phoneField.addEventListener('blur', _=>{
    //   if (phoneMask.unmaskedValue.length <= 1){
    //     // phoneMask.updateOptions({lazy: false});
    //     phoneMask.masked.reset();
    //     phoneField.value = '';
    //     phoneField.parentElement.classList.remove('has-value');
    //   }
    // });

  }

  static inputValid(input) {
    if (input.classList.contains('js-form-validate__empty')) {
      if (input.value.length === 0) {
        Validate.inputErrorAdd(input);
      } else {
        Validate.inputErrorRemove(input);
      }
    }

    if (input.classList.contains('js-form-validate__phone')) {
      const phoneRegex = /[\W_]/g;
      const phoneRegexTest = input.value.replace(phoneRegex, '');
      if (phoneRegexTest.length === 11) {
        Validate.inputErrorRemove(input);
      } else {
        Validate.inputErrorAdd(input);
      }
    }

    if (input.classList.contains('js-form-validate__email')) {
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailRegex.test(String(input.value).toLowerCase())) {
        Validate.inputErrorRemove(input);
      } else {
        Validate.inputErrorAdd(input);
      }
    }

    if (input.classList.contains('js-form-validate__checked')) {
      if (input.checked) {
        Validate.inputErrorRemove(input);
      } else {
        Validate.inputErrorAdd(input);
      }
    }
  }

  static inputErrorAdd(input) {
    input.classList.add('has-error');
  }

  static inputErrorRemove(input) {
    input.classList.remove('has-error');
  }
}
