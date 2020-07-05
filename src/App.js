import React, { useState } from 'react';
import AddNinjas from './components/AddNinjas';
import Ninjas from './components/Ninjas';


function App() {

  const [ninjas, setNinjas] = useState([
    { name: "Ecem", age: "29", state: "New Hampshire" },
    { name: "Elif Beren", age: "4", state: "Istanbul" },
    { name: "Azra", age: "6", state: "Mass" }
  ])


  function addNinja(ninja) {
    setNinjas(pV => {
      return [...pV, ninja]
    })
  }



  return (
    <div className="App">
      <header className="App-header">

        {ninjas.map(item => {
          return <div><Ninjas name={item.name} age={item.age} state={item.state} /> </div>
        })}

        <AddNinjas onAdd={addNinja} />

      </header>
    </div>
  );
}

export default App;
