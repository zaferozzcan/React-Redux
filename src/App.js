import React, { useState } from 'react';
import Greeting from "./components/Greeting"


function App() {

  const ninjas = [
    { name: "Ecem", age: "29", state: "New Hampshire" },
    { name: "Elif Beren", age: "4", state: "Istanbul" },
    { name: "Azra", age: "6", state: "Mass" }
  ]

  const [name, setName] = useState("");
  const [text, setText] = useState("Hi, submit your name!")

  const handleChange = (e) => {
    const newText = e.target.value;
    setName(newText)
  }
  console.log(name);


  function handleClick(e) {
    e.preventDefault();
    setText(("Hello,", { name }, "welcome home!"))

  }
  console.log(text);


  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleClick} className="container">

          <p>{text}</p>
          <input onChange={handleChange} type="text" name="name" placeholder="Enter Your Name" ></input>
          <button >Submit Your Name</button>

        </form>
        {ninjas.map(item => {
          return <div><Greeting name={item.name} age={item.age} state={item.state} /> </div>
        })}
      </header>
    </div>
  );
}

export default App;
