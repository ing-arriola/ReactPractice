import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserOutput from "./Person/UserOutput";
import UserInput from "./Person/UserInput";
function App() {
  const [peopleState, setPeople] = useState({
    people: [
      { name: "Jaime", age: 30 },
      { name: "Raul", age: 20 },
      { name: "Sam", age: 24 },
    ],
  });

  const [username, setUsername] = useState({
    user: { name: "Jaime" },
  });

  const [showPeople, setShowPeople] = useState({
    showpeople: { show: true },
  });

  /*const switchNameHandler = () => {
    setPeople({
      people: [
        { name: "Susan", age: 40 },
        { name: "Alison", age: 19 },
        { name: "Jhosseline", age: 25 },
      ],
    });
  };

 const changeHandler = (e) => {
    setPeople({
      people: [
        { name: "Susan", age: 40 },
        { name: e.target.value, age: 19 },
        { name: "Jhosseline", age: 25 },
      ],
    });
  };
*/

  const deleteUser = (user) => {
    const copyOfPeople = peopleState.people;
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

  return (
    <div className="App">
      <button onClick={togglePeople}>Toggle People</button>
      {showPeople.showpeople.show ? (
        <div>
          {peopleState.people.map((someone, index) => {
            return (
              <Person
                click={() => deleteUser(index)}
                key={index}
                name={someone.name}
                age={someone.age}
              />
            );
          })}
        </div>
      ) : null}

      <UserOutput myname={username.user.name} />
      <UserInput changed={userNameChangeHandler} />
    </div>
  );
}

export default App;
