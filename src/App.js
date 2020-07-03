import React, { useState } from 'react';


function App() {
  const [name, setName] = useState("");
  const [text, setText] = useState("Hi, submit your name!")

  const handleChange = (e) => {
    const newText = e.target.value;
    setName(newText)
  }
  console.log(name);


  function handleClick(e) {
    e.preventDefault();
    setText("Hello,", { name }, "welcome home!")

  }
  console.log(text);


  return (
    <div className="App">
      <header className="App-header">
        <form className="container">

          <p>{text}</p>
          <input onChange={handleChange} name="name" placeholder="Enter Your Name" ></input>
          <button onClick={handleClick}>Submit Your Name</button>

        </form>
      </header>
    </div>
  );
}

export default App;
