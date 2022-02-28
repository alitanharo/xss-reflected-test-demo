import React, { useState } from "react";
import { connect } from "react-redux";
import { doLogin } from "../redux/actions";

import { student, victim1, victim2 } from "./customers";

function UserLoggin(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let customers = [student, victim1, victim2];

  function handleChange(e) {
    if (e.target.type === "search") {
      setName(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  function handleSubmit(e) {
    if (name && password !== "") {
      for (let i = 0; i < customers.length; i++) {
        if (name === customers[i].name && password === customers[i].password) {
          props.doLogin(customers[i].name);
          alert(
            `usename: ${customers[i].name} balance:${customers[i].balance}`
          );

          document.getElementById("login").style.display = "none";
          // document.getElementById("transaction").style.display = "on";
        } else {
          setPassword("");
          setName("");
        }
      }

      //setPassword("");
      //setName("");
    } else {
      alert("Enter username and password.");
    }
    e.preventDefault();
  }

  return (
    <div className="login" id="login">
      <form onSubmit={handleSubmit}>
        <header>
          <h1>The vulnerable Bank</h1>
        </header>
        <label>Please login for start as a customer</label> <br />
        <input
          name="name"
          type="search"
          value={name}
          onChange={handleChange}
          placeholder="username"
        />
        <br />
        <input
          name="password"
          type=" password"
          value={password}
          onChange={handleChange}
          placeholder="password "
        />
        <br />
        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default connect(null, { doLogin })(UserLoggin);
