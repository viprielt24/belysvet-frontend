export default class {
  constructor() {
    this.videoWrap = document.querySelector('.js-insert-video');
    this.videoWrapLink = this.videoWrap.dataset.insertVideo;
    this.videoPoster = this.videoWrap.querySelector('.js-insert-video__poster');
    this.videoPlayer = this.videoWrap.querySelector('.js-insert-video__player');

    this.addEvents();
  }

  addEvents() {
    this.videoWrap.addEventListener('click', () => {
      this.insertVideo();
    });

  }

  insertVideo(){
    this.videoWrap.classList.add('plays');
    this.videoPlayer.innerHTML = this.videoWrapLink;
  }
}