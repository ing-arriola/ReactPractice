import React from "react";
import Radium from "radium";

const Person = ({ name, age, children, click, changed }) => {
  const fancyPerson = {
    "@media (max-width: 500px)": {
      color: "red",
    },
  };
  return (
    <div style={fancyPerson}>
      <p onClick={click}>
        Hi, my name is {name} and my age is {age}
      </p>
      <p>{children}</p>
      <input placeholder="Insert a new name" onChange={changed}></input>
    </div>
  );
};

export default Radium(Person);
