import * as React from 'react';
import './App.css';
import Timer from './Components/Timer/Timer.controller';

function App() {
  const [autostart] = React.useState(true);
  const [time] = React.useState(10000);
  const [step] = React.useState(1000);

  return (
    <div className="App">
      <Timer 
        onTick={(time) => console.log("Залишилось часу: " + time)}
        onTimeEnd={() => console.log("Час вийшов!")}
        onTimeStart={(timeLeft) => console.log("Таймер запущено!")}
        onTimePause={(timeLeft) => console.log("Таймер на паузі!")}
        autostart={autostart}
        time={time}
        step={step}
      />
    </div>
  );
};

export default App;
