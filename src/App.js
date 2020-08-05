import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserOutput from "./Person/UserOutput";
import UserInput from "./Person/UserInput";
import ValidationComponent from "./Practice2/ValidationComponent";
import CharComponent from "./Practice2/CharComponent";
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

  const togglePeople = () => {
    const doesShow = showPeople.showpeople.show;
    setShowPeople({
      showpeople: { show: !doesShow },
    });
  };

  const getLength = (e) => {
    let someString = e.target.value;
    let someChars = someString.split("");
    console.log(someChars);
    setlengthOfString({
      numChars: { characters: e.target.value.length },
    });
    setJustString({
      justSomeChars: someChars,
    });
  };

  return (
    <div className="App">
      <button onClick={togglePeople}>Toggle People</button>
      {showPeople.showpeople.show ? (
        <div>
          {peopleState.people.map((someone, index) => {
            return (
              <Person
                click={() => deleteUser(index)}
                key={someone.id}
                name={someone.name}
                age={someone.age}
                changed={(e) => changeHandler(e, someone.id)}
              />
            );
          })}
        </div>
      ) : null}

      <UserOutput myname={username.user.name} />
      <UserInput changed={userNameChangeHandler} />

      <h2>Practice 2</h2>
      <input placeholder="insert your text" onChange={getLength} />
      <ValidationComponent tlength={lengthOfString.numChars.characters} />
      {justString.justSomeChars.length > 0 ? (
        <div>
          {justString.justSomeChars.map((ch, index) => {
            return <CharComponent key={index} char={ch} />;
          })}
        </div>
      ) : null}
    </div>
  );
}

export default App;
