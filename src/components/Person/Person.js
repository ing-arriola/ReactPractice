import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  color: green;

  @media screen and (max-width: 500px) : {
    color: red;
  }
`;

const Person = ({ name, age, children, click, changed }) => {
  /*const fancyPerson = {
    "@media (max-width: 500px)": {
      color: "red"
    },
  };*/
  return (
    <StyledDiv>
      <p onClick={click}>
        Hi, my name is {name} and my age is {age}
      </p>
      <p>{children}</p>
      <input placeholder="Insert a new name" onChange={changed}></input>
    </StyledDiv>
  );
};

export default Person;
