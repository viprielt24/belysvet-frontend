import "./user-sale-item.css";

export default class {
  constructor() {
    this.saleStages = document.querySelector('.js-stages-sale-tagline')
    this.saleStagesTags = this.saleStages.querySelectorAll('.tag');

    this.tender = document.querySelector('.js-stages-sale-tender');

    this.buttonStatusSale = document.querySelector('.js-status-sale');
    this.buttonRegDeal = document.querySelector('.js-reg-deal');
    this.buttonClientStatus = document.querySelector('.js-client-status');
    this.buttonRegClientProject = document.querySelector('.js-reg-client-project');
    this.disabledClassTender = 'disabledTender';
    this.disabledClassButton = 'disabledButton';

    this.tagToggle();
  }
  tagToggle() {
    this.saleStagesTags.forEach(tag => {
      tag.addEventListener('click', () => {
        const activeClassCheck = document.querySelector('.js-stages-sale-tagline .tag.tag--active');
        if (tag.classList.contains('tag--active')) {
          tag.classList.remove('tag--active');
          this.tender.classList.add(this.disabledClassTender);
          this.buttonStatusSale.classList.add(this.disabledClassButton);
          this.buttonRegDeal.classList.add(this.disabledClassButton);
          this.buttonClientStatus.classList.add(this.disabledClassButton);
          this.buttonRegClientProject.classList.add(this.disabledClassButton);

        } else {
          if (activeClassCheck !== null) {
            activeClassCheck.classList.remove('tag--active');
          }
          let stage = tag.dataset.value;

          this.tender.classList.add(this.disabledClassTender);
          this.buttonStatusSale.classList.add(this.disabledClassButton);
          this.buttonRegDeal.classList.add(this.disabledClassButton);
          this.buttonClientStatus.classList.add(this.disabledClassButton);
          this.buttonRegClientProject.classList.add(this.disabledClassButton);

          switch (stage) {
            case '1':
              // console.log(1);
              break;
            case '2':
              // console.log(2);
              break;
            case '2.1':
              // console.log(2.1);
              break;
            case '2.2':
              this.tender.classList.remove(this.disabledClassTender);
              this.buttonStatusSale.classList.remove(this.disabledClassButton);
              this.buttonRegDeal.classList.remove(this.disabledClassButton);
              break;
            case '2.3':
              this.buttonStatusSale.classList.remove(this.disabledClassButton);
              this.buttonRegDeal.classList.remove(this.disabledClassButton);
              this.buttonRegClientProject.classList.remove(this.disabledClassButton);
              break;
            case '3':
              // console.log(3);
              break;
            case '4':
              // console.log(4);
              break;
            default:
          }
          tag.classList.add('tag--active');
        }
      });
    });
  }
}