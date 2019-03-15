export default class {
  
  fadeIn(el, options = {}) {
    if (!el) return;
    let stop = false;
    
    dispatchEvent(new CustomEvent('fadeIn', {detail: el}));
    
    let {duration = 400, delay = 0, callback} = options;
    
    if (el.classList.contains('fadeIn')) return;
    el.classList.add('fadeIn');
    
    el.style.display = 'flex';
    el.style.opacity = 0;
    el.style.transform = ' translateY(-10%)';
    
    return new Promise((resolve, reject) => {
      
      let start = Date.now() + delay;
      
      let animation = () => {
        if (Date.now() < start) {
          requestAnimationFrame(animation);
          return;
        }
        if (stop) return;
        let progress = this.__progress(start, duration);
        el.style.opacity = 1 * progress;
        el.style.transform = `translateY(${-10 * (1 - progress)}%)`;
        
        if (progress === 1) {
          // callback();
          return;
        }
        requestAnimationFrame(animation);
      };
      
      requestAnimationFrame(animation);
    });
  }
  
  fadeOut(el, options = {}) {
    if (!el) return;
    let stop = false;
    
    dispatchEvent(new CustomEvent('fadeOut', {detail: el}));
    
    let {duration = 400, delay = 0, callback} = options;
    
    const initalOpacity = el.style.opacity || 1;
    
    return new Promise((resolve, reject) => {
      
      let start = Date.now() + delay;
      
      let animation = () => {
        if (Date.now() < start) {
          requestAnimationFrame(animation);
          return;
        }
        if (stop) return;
        let progress = this.__progress(start, duration);
        el.style.opacity = initalOpacity - 1 * progress;
        el.style.transform = `translateY(${-10 * progress}%)`;
        
        if (progress === 1) {
          // callback();
          el.classList.remove('fadeIn');
          el.style.display = '';
          el.style.opacity = '';
          el.style.transform = '';
          resolve();
          return;
        }
        requestAnimationFrame(animation);
      };
      
      requestAnimationFrame(animation);
    });
  }
  
  __progress(start, duration) {
    let progress = (Date.now() - start) / duration;
    if (progress > 1) progress = 1;
    
    return this.__timing(progress);
  }
  
  __timing(progress) {
    return Math.sin(Math.acos(progress ** 1.4 - 1));
  }
}
