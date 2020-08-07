import React from "react";

const CharComponent = ({ char, click }) => {
  const style = {
    color: "red",
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
  };
  return (
    <div onClick={click} style={style}>
      {char}
    </div>
  );
};

export default CharComponent;
