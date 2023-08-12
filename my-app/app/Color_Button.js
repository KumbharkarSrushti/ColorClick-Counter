"use client"
import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('white');
  const [clickCounts, setClickCounts] = useState({
    red: 0,
    green: 0,
    yellow: 0,
    blue: 0,
  });

  const updateColorAndCount = (buttonColor) => {
    setColor(buttonColor);
    const newClickCounts = { ...clickCounts };
    newClickCounts[buttonColor]++;
    setClickCounts(newClickCounts);
  };

  return (
    <div className="App">
      <button
        className={`button red`}
        onClick={() => updateColorAndCount('red')}
      >
        Red
      </button>
      <button
        className={`button green`}
        onClick={() => updateColorAndCount('green')}
      >
        Green
      </button>
      <button
        className={`button yellow`}
        onClick={() => updateColorAndCount('yellow')}
      >
        Yellow
      </button>
      <button
        className={`button blue`}
        onClick={() => updateColorAndCount('blue')}
      >
        Blue
      </button>

      <div className="color-box" style={{ backgroundColor: color }}></div>

      <div className="click-counts">
        {Object.keys(clickCounts).map((buttonColor) => (
          <p key={buttonColor}>
            {buttonColor} :{clickCounts[buttonColor]}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;

