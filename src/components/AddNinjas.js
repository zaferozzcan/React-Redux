import React, { useState } from "react";

function AddNinjas(props) {
    const [ninjaList, setNinjaList] = useState({
        name: "",
        age: "",
        state: ""
    })

    function handleChange(e) {
        const { name, value } = e.target
        setNinjaList(pV => {
            return { ...pV, [name]: value }
        })

    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAdd(ninjaList)
        setNinjaList({
            name: "",
            age: "",
            state: ""
        })
    }


    return (
        <form onSubmit={handleSubmit} className="container">
            <input onChange={handleChange} type="text" name="name" placeholder="Name" value={ninjaList.name}></input>
            <input onChange={handleChange} type="text" name="age" placeholder="Age" value={ninjaList.age}  ></input>
            <input onChange={handleChange} type="text" name="state" placeholder="State" value={ninjaList.state}  ></input>
            <button >Submit Your Ninja</button>
        </form>
    )
}

export default AddNinjas;