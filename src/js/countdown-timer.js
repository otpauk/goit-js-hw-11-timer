// countdown timer plugin
export default class CountdownTimer {
  // selector - id or class of html element for counter 
  // targetDate - date for counter to finish coundown
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.selector = document.querySelector(selector);

    this.timer();
  }

  // update timer
  timer() { 
    setInterval(() => {      
      const deltaTime = this.targetDate - Date.now();
      const currentTime = this.getTimeComponents(deltaTime);

      this.updateTimer(currentTime);
    }, 1000);
  }
  
  getTimeComponents(time) {
    const days = (Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.zeroPlacer(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.zeroPlacer(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.zeroPlacer(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  // put '0' before if single number in counter
  zeroPlacer(value) {
    return String(value).padStart(2, '0');
  }

  updateTimer({ days, hours, mins, secs }) {
    this.selector.querySelector('span[data-value="days"]').textContent = `${days}`;
    this.selector.querySelector('span[data-value="hours"]').textContent = `${hours}`;
    this.selector.querySelector('span[data-value="mins"]').textContent = `${mins}`;
    this.selector.querySelector('span[data-value="secs"]').textContent = `${secs}`;
  };
};
