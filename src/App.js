import './App.css';
import React, {useState} from 'react';
function App() {
  const [count,setCount] = useState(0);
  const decrementCount = () => {
    setCount(count => count-1);
    setCount(count => count-1);
  }
  const incrementCount = () => {
    setCount(count => count+1);
    setCount(count => count+1);
    setCount(count => count+1);
  }
  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
