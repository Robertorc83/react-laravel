import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import axios from "axios";

const container = document.getElementById('counter');
const root = createRoot(container);

export default function Counter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
    notifyServer();
  };

  // Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
    notifyServer();
  };

  // Notifies the server about the change
  const notifyServer = () => {
      axios.post('/count', {
          message: 'Counter Updated!',
      })
  }

  return (
    <div>
        <button onClick={handleDecrement}>-</button>
        <span> {count} </span>
        <button onClick={handleIncrement}>+</button>
    </div>
  );
}


if (document.getElementById('counter')) {
    root.render(<Counter />);
}
