import React from "react";

const UserInput = ({ changed }) => {
  return (
    <div>
      <input onChange={changed} placeholder="insert your name :)"></input>
    </div>
  );
};

export default UserInput;
