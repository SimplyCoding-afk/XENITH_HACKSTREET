import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // TARGET DATE: Feb 16, 2026 (Based on your system clock in the screenshot)
    const targetDate = new Date("Feb 16, 2026 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-wrapper">
      <div className="timer-container">
        {/* DAYS */}
        <div className="time-box">
          <span className="kanji-label">日</span>
          <div className="time-value">{timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}</div>
          <div className="time-label">DAYS</div>
        </div>

        <div className="separator">:</div>

        {/* HOURS */}
        <div className="time-box">
          <span className="kanji-label">時</span>
          <div className="time-value">{timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}</div>
          <div className="time-label">HOURS</div>
        </div>

        <div className="separator">:</div>

        {/* MINUTES */}
        <div className="time-box">
          <span className="kanji-label">分</span>
          <div className="time-value">{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}</div>
          <div className="time-label">MINS</div>
        </div>

        <div className="separator">:</div>

        {/* SECONDS */}
        <div className="time-box">
          <span className="kanji-label">秒</span>
          <div className="time-value red-glow">{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</div>
          <div className="time-label">SECS</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;