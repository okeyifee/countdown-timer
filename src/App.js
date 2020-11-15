import React, { useState, useRef } from 'react';
import './App.css';


function padTime(time){
  return time.toString().padStart(2, '0');
}

function App() {
  const [title, setTitle] = useState('let the countdown begin !!!');
  const [timeLeft, setTimeLeft] = useState(15);
  const intervalRef = useRef(null);

  function startTimer() {
    setTitle("You're doing great");
    intervalRef.current = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft >= 1) return timeLeft -1;

        // reset timer
        return 0;
        });

    }, 1000)
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    setTitle('keep it up!');
  }


  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);


  return (
    <div className="App">
      <h2> {title} </h2>

      <div className = "timer">
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
      </div>

      <div className = "buttons">
        <button onClick = {startTimer}> start </button>
        <button onClick = {stopTimer}> stop </button>
        <button> reset </button>
      </div>
    </div>
  );
}

export default App;
