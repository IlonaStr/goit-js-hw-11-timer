'use strict';

class CountdownTimer {
   constructor({
       selector,
       targetDate
   }) {
       this.selector = selector;
       this.date = targetDate;
       this.secs = document.querySelector('[data-value="secs"]');
       this.mins = document.querySelector('[data-value="mins"]');
       this.hours = document.querySelector('[data-value="hours"]');
       this.days = document.querySelector('[data-value="days"]');

       this.counter = this.counter.bind(this);
        this.timerId = setInterval(this.counter, 1000);
   }
counter() {
const time = this.date - Date.now();
  /*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
const secs = Math.floor((time % (1000 * 60)) / 1000);

this.secs.textContent = secs < 10 ? '0' + secs : secs;
this.mins.textContent = mins < 10 ? '0' + mins : mins;
this.hours.textContent = hours < 10 ? '0' + hours : hours;
this.days.textContent = days;
}
}
new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 17, 2020'),
  });