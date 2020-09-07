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
