import '../css/style.css';

const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minsRef = document.querySelector('[data-value="mins"]');
const secsRef = document.querySelector('[data-value="secs"]');
const titleRef = document.querySelector('.countdown-title');

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  start = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = this.targetDate - currentTime;
    const time = this.getTimeComponents(deltaTime);

    this.updateClockface(time);
    this.stop(time);
    console.log(`${days}:${hours}:${mins}:${secs}`);
  }, 1000);

  stop(time) {
    if (time <= 0) {
      clearInterval(this.start);
      titleRef.textContent = 'Time is over!';
    }
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  updateClockface({ days, hours, mins, secs }) {
    daysRef.textContent = `${days}`;
    hoursRef.textContent = `${hours}`;
    minsRef.textContent = `${mins}`;
    secsRef.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2022'),
});
