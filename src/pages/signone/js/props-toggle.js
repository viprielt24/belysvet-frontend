export default class {
  constructor() {
    //elems
    this.props = document.querySelectorAll('.js-prop-wrap');
    //func
    this.addEvents();
  }

  addEvents() {
    this.props.forEach(propWrap => {
      const prop = propWrap.querySelector('.js-props');
      const propBtn = propWrap.querySelector('.js-props-toggle');
      const propH = prop.clientHeight;
      prop.style.transition = 'opacity .2s ease, visibility .2s ease, height .3s ease';
      prop.style.height = propH + 'px';

      propBtn.addEventListener('click', () => {
        if (prop.classList.contains('is-hidden')) {
          prop.classList.remove('is-hidden');
          prop.style.height = propH + 'px';
          prop.style.opacity = 1;
          prop.style.visibility = 'visible';
          prop.style.transition = 'opacity .2s ease .1s, visibility .2s ease .1s, height .3s ease';
          propBtn.innerText = 'Свернуть характеристики'
        } else {
          prop.classList.add('is-hidden');
          prop.style.height = 0;
          prop.style.opacity = 0;
          prop.style.visibility = 'hidden';
          prop.style.transition = 'opacity .2s ease, visibility .2s ease, height .3s ease';
          propBtn.innerText = 'Развернуть характеристики'
        }
      });
    });
  }
}