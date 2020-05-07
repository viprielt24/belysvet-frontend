export default class tagLineEvent {
  constructor(element) {
    this.block = element;
    this.tags = this.block.querySelectorAll('.tag');
    this.clearFilterElement = this.block.querySelector('.js-tagline__clear');
    this.tagClassToggleName = 'tag--active';

    this.listener();
  }
  listener() {
    for(let i=0; i < this.tags.length; i++) {
      this.tags[i].addEventListener('click', () => {
        this.tags[i].classList.toggle(this.tagClassToggleName);
      });
    }
    this.clearFilterElement.addEventListener('click', () => {
      for(let i=0; i < this.tags.length; i++) {
        this.tags[i].classList.remove(this.tagClassToggleName);
      }
    })
  }
}