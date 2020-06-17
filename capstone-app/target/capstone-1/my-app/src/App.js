import React, { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState('');

  function handleClick() {
    console.log("clicked")
    fetch('http://localhost:8080/helloworld')
      .then(res => res.json())
      .then((json) => {
        console.log(json)
        setText(json)
      })
  }

  return (
    <div>
      <button onclick={handleClick}>Fetch</button>
      <div>{text}</div>
    </div>
  );
}

export default App;
