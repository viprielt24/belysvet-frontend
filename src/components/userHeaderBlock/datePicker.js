import datepicker from 'js-datepicker'
//const picker = document.querySelector('.uhbData__dateCalendar')

export default class {
  constructor() {
    this.datePicker = document.querySelectorAll('.uhbData__dateCalendar')
    this.dateList = document.querySelector('.uhbData__dateList')
    this.addEvent();
  }

  addEvent() {
    this.datePicker.forEach(datePick => {
      datePick.addEventListener('click', (e) => {
        const newDatePicker =  datepicker('.uhbData__dateCalendar', {
          customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
          customDays: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
          minDate: new Date(),
          disableYearOverlay: true,
          onSelect: instance => {
            const newDateItem = instance.dateSelected.toLocaleDateString().split('/').join('.');
            let newItem = document.createElement('div')
            newItem.innerHTML = newDateItem
            newItem.classList.add('uhbData__dateItem')
            this.dateList.append(newItem)
          },
        })
      })
    });
  }
}