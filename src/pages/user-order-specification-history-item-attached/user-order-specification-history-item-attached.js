import "../user-order-history-item-attached/user-order-history-item-attached.css";
import "../user-order-specification-history-item-attached/user-order-specification-history-item-attached.css";
import "../card/card.css";

let warningCloseTrigger = document.querySelector('.uhbData__icon--close');

warningCloseTrigger.addEventListener('click', function (event) {
  warningClose();
});

function warningClose() {
  let warning = document.querySelector('.uhbData__item--warning');
  let separator = document.querySelector('.uhbData__item--separator');
  setTimeout(() => {
    warning.classList.remove('warning--visible');
    warning.classList.add('warning--hidden');
    separator.classList.add('separator--visible');
  }, 300);
}
