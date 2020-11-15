import React, { useState, useRef } from 'react';
import './App.css';


function padTime(time){
  return time.toString().padStart(2, '0');
}

function App() {
  const [title, setTitle] = useState('let the countdown begin !!!');
  const [timeLeft, setTimeLeft] = useState(5);
  const intervalRef = useRef(null);
  const [isRunning, setIsrunning] = useState(false);

  function startTimer() {
    setIsrunning(true);
    if (intervalRef.current != null) return;
    setTitle("You're doing great");
    intervalRef.current = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft >= 1) return timeLeft -1;
        resetTimer();
        return 0;
        });

    }, 1000)
  }

  function stopTimer() {
    if (intervalRef.current == null) return;
    clearInterval(intervalRef.current);
    setTitle('keep it up!');
    setIsrunning(false);
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    setTitle('Ready for another round?');
    setTimeLeft(25 * 60);
    setIsrunning(false);
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
        {!isRunning && <button onClick = {startTimer}> start </button>}
        {isRunning && <button onClick = {stopTimer}> stop </button>}
        <button onClick = {resetTimer}> reset </button>
      </div>
    </div>
  );
}

export default App;
