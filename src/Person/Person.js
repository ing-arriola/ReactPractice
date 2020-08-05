import React from "react";

const Person = ({ name, age, children, click, changed }) => {
  return (
    <div>
      <p onClick={click}>
        Hi, my name is {name} and my age is {age}
      </p>
      <p>{children}</p>
      <input placeholder="Insert a new name" onChange={changed}></input>
    </div>
  );
};

export default Person;
