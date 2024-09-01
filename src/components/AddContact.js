import React, { useState } from "react";

const AddContact = ({ addContactHandler }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addHandler = (e) => {
      e.preventDefault()
      if(name === "" || email === ""){
        alert("Its mandatory")
        return
      }
      addContactHandler({name , email})
      setName("")
      setEmail("")
      // console.log({name, email})
  }

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form">
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue" onClick={addHandler}>Add</button>
      </form>
    </div>
  );
};

export default AddContact;
