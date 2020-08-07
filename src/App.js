import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Person from "./components/Person/Person";
import Persons from "./components/Person/Persons";
import UserOutput from "./components/Person/UserOutput";
import UserInput from "./components/Person/UserInput";
import ValidationComponent from "./components/Practice2/ValidationComponent";
import CharComponent from "./components/Practice2/CharComponent";

const StyledButton = styled.button`
  background: ${(val) => (val.myAlt ? "green" : "red")};
  };
  color: #fff;
  border: 1px solid #333;
  cursor: pointer;
  &:hover {
    background: ${(val) => (val.alt ? "blue" : "salmon")};
  }
`;
function App() {
  const [peopleState, setPeople] = useState({
    people: [
      { id: 1, name: "Jaime", age: 30 },
      { id: 2, name: "Raul", age: 20 },
      { id: 3, name: "Sam", age: 24 },
    ],
  });

  const [username, setUsername] = useState({
    user: { name: "Jaime" },
  });

  const [showPeople, setShowPeople] = useState({
    showpeople: { show: true },
  });

  const [lengthOfString, setlengthOfString] = useState({
    numChars: { characters: 0 },
  });

  const [justString, setJustString] = useState({
    justSomeChars: [],
  });

  const changeHandler = (e, id) => {
    //I need to know who is the user such name has been changed, so that's why I sent the id
    const userIndex = peopleState.people.findIndex((p) => {
      return p.id === id;
    });
    //Then I need a copy of the object
    const someone = { ...peopleState.people[userIndex] };
    someone.name = e.target.value; //the target is the input and that why I can't send the e.target.value and hope that had the userId
    const peopleCopy = [...peopleState.people]; //Good practice
    peopleCopy[userIndex] = someone;
    setPeople({
      people: peopleCopy,
    });
  };

  const deleteUser = (user) => {
    //In this approach I'm just getting a pointer to the original to the original people array so this can lead to
    //unpredictable apps and you should not use this
    //const copyOfPeople = peopleState.people;
    const copyOfPeople = [...peopleState.people]; //Good practice :), because I'm getting a fresh copy of people array that actually is not a pointer to the original people array
    copyOfPeople.splice(user, 1);
    setPeople({
      people: copyOfPeople,
    });
  };
  const userNameChangeHandler = (e) => {
    setUsername({
      user: { name: e.target.value },
    });
  };

  const deleteChar = (indexOfCharacter) => {
    const copyOfChars = [...justString.justSomeChars];
    copyOfChars.splice(indexOfCharacter, 1);
    console.log(copyOfChars);
    setJustString({
      justSomeChars: copyOfChars,
    });
  };

  const togglePeople = () => {
    const doesShow = showPeople.showpeople.show;
    setShowPeople({
      showpeople: { show: !doesShow },
    });
  };

  const getLength = (e) => {
    let someString = e.target.value;
    let someChars = someString.split("");
    //console.log(someChars);
    setlengthOfString({
      numChars: { characters: e.target.value.length },
    });
    setJustString({
      justSomeChars: someChars,
    });
  };

  let peopleToShow = null;

  if (showPeople.showpeople.show) {
    peopleToShow = (
      <div>
        <Persons
          somePeople={peopleState.people}
          delet={deleteUser}
          change={changeHandler}
        />
      </div>
    );
    // styleButton.background = "red";
  }

  const styles = [];

  if (peopleState.people.length <= 2) {
    styles.push("status-one");
  }
  if (peopleState.people.length <= 1) {
    styles.push("status-two");
  }

  return (
    <div className="App">
      <h1 className={styles.join(" ")}>Super Practice app</h1>
      <StyledButton myAlt={showPeople.showpeople.show} onClick={togglePeople}>
        Toggle People
      </StyledButton>
      {peopleToShow}
      <UserOutput myname={username.user.name} />
      <UserInput changed={userNameChangeHandler} />
      <h2>Practice 2</h2>
      <input onChange={getLength} value={justString.justSomeChars.join("")} />
      <ValidationComponent tlength={lengthOfString.numChars.characters} />
      {justString.justSomeChars.length > 0 ? (
        <div>
          {justString.justSomeChars.map((ch, index) => {
            return (
              <CharComponent
                key={index}
                char={ch}
                click={() => deleteChar(index)}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default App;
