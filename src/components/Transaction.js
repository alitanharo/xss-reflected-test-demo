import React, { useState } from "react";
import { connect } from "react-redux";
import {
  setBalanceVictim1,
  setBalanceStudent,
  setBalanceVictim2,
} from "../redux/actions";
import { student, victim1, victim2 } from "./customers";

function Transaction(props) {
  const loginerBalance = (sender) => {
    if (sender === victim1.name) {
      return victim1.balance;
    } else if (sender === student.name) {
      return student.balance;
    } else if (sender === victim2.name) {
      return victim2.balance;
    } else console.log("undefined!!!!!");
  };

  const loginersArr = props.loginer;
  const sender = loginersArr[loginersArr.length - 1];

  //const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState(0);

  function changeHandler(e) {
    // if (e.target.type === "search") {
    // setSender(e.target.value);
    // } else
    if (e.target.type === "text") {
      setReceiver(e.target.value);
    } else {
      setAmount(e.target.value);
    }
  }

  function submitHandler(e) {
    if (sender && receiver && amount !== "") {
      if (sender === victim1.name && receiver === victim2.name) {
        props.setBalanceVictim1(victim1.send(amount));
        props.setBalanceVictim2(victim2.receive(amount));

        alert(
          `Now, jerry balance is ${victim2.balance} $ and tom balance is ${victim1.balance} $ `
        );
      } else if (sender === victim1.name && receiver === student.name) {
        props.setBalanceVictim1(victim1.send(amount));
        props.setBalanceStudent(student.receive(amount));

        alert(
          `Now, alex balanc is${student.balance} $ and tom balance is ${victim1.balance} $ `
        );
        document.getElementById("flag").src = "tweeter/images/compose-icon.png";
      } else {
        alert("nothing");
      }
    } else {
      alert("ooops, please try again!");
    }
    e.preventDefault();
    setAmount(0);
    setReceiver("");
    //setSender("");
  }

  return (
    <div className="transaction" id="transaction">
      <div className="mypage">
        <h1> Welcome {sender}</h1>
        <h2>
          <img src="" id="flag" />
        </h2>
        <p> {Date()}</p>

        <p>your accountnumber :{sender.length * 68746684368}</p>
        <p>your balance :{loginerBalance(sender) + "$"}</p>
      </div>
      <h1> trasaction </h1>
      <form onSubmit={submitHandler}>
        <label>from : </label>
        <input
          id="send"
          name="sender"
          type="search"
          value={sender}
          onChange={changeHandler}
        />
        <label> to : </label>
        <input
          //readonly="active"
          name="recever"
          type="text"
          value={receiver}
          onChange={changeHandler}
        />
        <br /> <br />
        <label> amount : </label>
        <input
          name="amount"
          type="number"
          value={amount}
          onChange={changeHandler}
          min="0"
          max="1000"
          //step={100}
        />
        <label>"$"</label>
        <br /> <br />
        <button type="submit"> send</button>
      </form>
    </div>
  );
}

const mapStatetoprops = (state) => {
  return {
    loginer: state.name,
    studentBalance: state.sbalance,
    victim1Balance: state.v1balance,
    victim2Balance: state.v2balance,
  };
};
export default connect(mapStatetoprops, {
  setBalanceStudent,
  setBalanceVictim1,
  setBalanceVictim2,
})(Transaction);
