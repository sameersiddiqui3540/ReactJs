import './App.css';
import React, {useEffect, useState} from 'react';
function App() {
  const [resourceType, setResourceType] = useState('posts');

  /*
  This useEffect will run everytime our application renders (we click on any button).
  useEffect takes an array as second parameter, and it will run 
  whenever there is any change in any of the value of that array.

  If we pass [] as second parameter, it will act as mount function 
  and it will only run on the first render.
  */ 

  // This will run only for the first time.
  
  // useEffect(() => {
  //   console.log("Started!")
  // },[resourceType])

  // This will run whenever there is any change in the value of resourceType
  useEffect(() => {
    console.log("Started!")
  },[resourceType])

  return (
    <div className="App">
      
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>

      <h1>{resourceType}</h1>
    </div>

  );
}

export default App;
