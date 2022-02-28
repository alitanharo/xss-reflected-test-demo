import { addMessage } from "../redux/actions";
import React, { useState } from "react";
import { connect } from "react-redux";

function SendMessage(props) {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  function handleChange(e) {
    if (e.target.type === "email") {
      setEmail(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  }

  function handleSubmit(e) {
    if (message !== "") {
      props.addMessage(message);
      setMessage("");
      setEmail("");
    } else {
      alert("Please write your message before submite!");
    }
    e.preventDefault();
  }

  return (
    <div className="messagebox">
      <h1>New Email</h1>
      <form onSubmit={handleSubmit}>
        <label> To:</label>
        <input
          type="email"
          name="email"
          id="myemail"
          placeholder="tom@gmail.com"
          disabled
          value={email}
        />
        <br />
        <br />
        <textarea
          id="message"
          type="text"
          name="message"
          placeholder="Message"
          onChange={handleChange}
          value={message}
        />
        <br />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default connect(null, { addMessage })(SendMessage);
