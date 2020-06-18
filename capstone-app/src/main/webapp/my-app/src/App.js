import React, { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState('');

  function handleClick() {
    console.log("clicked")
    fetch('https://8080-4eb76769-d229-4fde-8cdf-c818ce4435c7.us-west1.cloudshell.dev/helloworld')
      .then(res => res.json())
      .then((json) => {
        console.log(json)
        setText(json)
      })
  }

  return (
    <div>
      <button onClick={handleClick}>Fetch</button>
      <div>{text}</div>
    </div>
  );
}

export default App;
