import React from "react";
import { connect } from "react-redux";
import reactDom from "react-dom";

function MessageList(props) {
  //////////////////////////////////////////////////////////////
  const handleLoad = (e) => {
    //let studentlink = document.getElementById("message").value;
    let studnetlink = document.getElementById("message").firstChild.nodeValue;

    alert(`${studnetlink}`);
  };

  React.useEffect(() => {
    window.addEventListener("click", handleLoad);

    // cleanup this component
    return () => {
      window.removeEventListener("click", handleLoad);
    };
  }, []);
  //////////////////////////////////////////////////////////////////
  const arr = props.studentmessage;
  const listItems = arr.map((message, index) => <li key={index}>{message}</li>);
  return (
    <section>
      <div className="commentbox">
        <ul>{listItems}</ul>
      </div>
    </section>
  );
}

const mapStatetoprops = (state) => {
  return {
    studentmessage: state.message,
  };
};

export default connect(mapStatetoprops)(MessageList);
