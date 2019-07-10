import React from "react";
import "./Cockpit.css";

const cockpit = props => {
  const classes = [];

  if (props.persons.length <= 2) {
    classes.push("red"); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    classes.push("bold"); // classes = ['red', 'bold']

    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black"
    //   }
    // };

    return (
      <div>
        <h1>Hi, I'm a React App</h1>
        {/* <p className={classes.join(" ")}>This is really working!</p> */}
        <p>This is really working!</p>
        {/* <button style={style} onClick={this.togglePersonsHandler}> */}
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
      </div>
    );
  }
};

export default cockpit;
