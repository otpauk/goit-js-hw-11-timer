import './css/countdown-timer.css';
import CountdownTimer from './js/countdown-timer';

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2020'),
});
