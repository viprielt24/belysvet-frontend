export default class EscClick {
  constructor(elems, visibleClass) {
    if (!elems.length > 0) return;
    this.elems = elems;
    this.visibleClass = visibleClass;
    this.addEvents();
  }
  
  addEvents() {
    //click outside
    document.addEventListener('click', event => {
      this.elems.forEach(elem => {
        let wrapName = elem[0];
        let className = elem[1];
        if (wrapName && !wrapName.contains(event.target) && !event.target.closest(`.${className}`)) {
          wrapName.classList.remove(this.visibleClass);
        }
      });
    });
    
    //press escape
    this.elems.forEach(elem => {
      let wrapName = elem[0];
      let className = elem[1];
      
      document.addEventListener('keydown', event => {
        if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
          if (wrapName && wrapName.classList.contains(this.visibleClass)) {
            wrapName.classList.remove(this.visibleClass);
          }
        }
      });
    });
  }
}