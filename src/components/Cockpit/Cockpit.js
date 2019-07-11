import React from "react";
import Radium from "radium";
import "./Cockpit.css";

const cockpit = props => {
  let classes = [];
  let btnClass = "";
  let style = props.style;
  if (props.showPerson) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    classes.push("red");
  }
  if (props.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <div className={classes}>
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button style={style} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Radium(cockpit);
