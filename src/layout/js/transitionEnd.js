export default class TransitionEnd {
  constructor(options) {
    this.element = options.element || window;
    this.callback = options.callback.bind(this);
    this.parent = options.parent || null;
    
    this.Listener();
  }
  
  Listener() {
    this.element.addEventListener('transitionend', this.callback);
  }
  
  end() {
    this.element.removeEventListener('transitionend', this.callback);
  }
}
