export default class DevelopmentMode {
  constructor() {
    this.mobileWords = ['мин', 'vby', 'min', 'ьшт'];
    this.tabletWords = ['мид', 'vbl', 'mid', 'ьшв'];
    this.desktopWords = ['макс', 'vfrc', 'max', 'ьфч'];
    this.showStatusWords = ['стт', 'cnn', 'стат', 'cnfn', 'cnf', 'ста'];
    let keys = [];
    const arrayKeywords = [].concat(this.mobileWords, this.tabletWords, this.desktopWords, this.showStatusWords);
    document.addEventListener('keyup', event => {
      const {key, keyCode} = event;
      if (keys.langth > 20) {
        keys.shift();
      }
      if (key) {
        keys.push(key.toLowerCase());
      } else {
        keys.push(String.fromCharCode(keyCode).toLowerCase());
      }

      let word = keys.join('');
      let i = 0;
      for (; i < arrayKeywords.length; i++) {
        if (word.indexOf(arrayKeywords[i].toLowerCase()) + 1 !== 0) {
          keys = [];
          this.keyLogic(arrayKeywords[i]);
          break;
        }
      }
      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        keys = [];
      }, 10000);

    });
  }

  keyLogic(key) {

    let isMobile;
    let isTablet;
    let isDesktop;
    let showStatus;

    if (this.mobileWords.includes(key)) {
      isMobile = true;
    } else if (this.tabletWords.includes(key)) {
      isTablet = true;
    } else if (this.desktopWords.includes(key)) {
      isDesktop = true;
    } else if (this.showStatusWords.includes(key)) {
      showStatus = true;
    }


    switch (true) {
      case isMobile:
        this.mobile();
        break;

      case isTablet:
        this.tablet();
        break;

      case isDesktop:
        this.desktop();
        break;

      case showStatus:
        this.showStatus();
        break;
    }
  }

  mobile() {
    this.clear();
    if (/mobile=true/.test(document.cookie)) return;
    document.cookie = 'mobile=true';
    window.location = window.location.href;
  }

  tablet() {
    this.clear();
    if (/tablet=true/.test(document.cookie)) return;
    document.cookie = 'tablet=true';
    window.location = window.location.href;
  }

  desktop() {
    if (/mobile=true/.test(document.cookie) || /tablet=true/.test(document.cookie))
      '';
    else return;
    this.clear();
    window.location = window.location.href;
  }

  clear() {
    document.cookie = 'mobile=false';
    document.cookie = 'tablet=false';
  }

  showStatus() {
    const el = document.createElement('div');

    el.style.position = 'fixed';
    el.style.top = 15;
    el.style.right = 15;
    el.style.padding = '10px 20px';
    el.style.borderRadius = '3px';
    el.style.background = 'rgba(0,0,0,.1)';
    el.style.zIndex = 9999999;
    let status;
    let text;

    if (/mobile=true/.test(document.cookie)) {
      status = 'mobile';
      text = 'Mobile';
    } else if (/tablet=true/.test(document.cookie)) {
      status = 'tablet';
      text = 'Tablet';
    } else {
      status = 'desktop';
      text = 'Desktop';
    }

    el.innerText = text;

    document.body.appendChild(el);

    setTimeout(function () {
      el.remove();
    }, 5000);
  }
}
