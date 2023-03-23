import './App.css';
import React, { useState, useEffect, useRef} from 'react';
function App() {

  const [count,setCount] = useState(0);

  let id = useRef();

  const handleCount = () => {
    id.current = setInterval(() => {
      setCount((count) => count+1);
      
    },1000);
    
  };

  useEffect(() => {
    return () => clearInterval(id.current);
  },[]);

return <div className="App">
      <h1>{count}</h1>
      <button onClick={() => handleCount()}>Start</button>
      <button onClick={() => clearInterval(id.current)}>Pause</button>
      <button onClick={() => {
        clearInterval(id.current);
        setCount(0);
      }}>Stop</button>
  </div>
}

export default App;
