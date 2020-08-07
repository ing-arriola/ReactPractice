import React from "react";

const ValidationComponent = ({ tlength }) => {
  const style = {
    color: "blue",
  };
  return (
    <div style={style}>
      {tlength < 6 ? <p>Text too short</p> : <p>Text is OK!!</p>}
    </div>
  );
};

export default ValidationComponent;
