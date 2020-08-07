import React from "react";
import Person from "./Person";

const Persons = ({ somePeople, delet, change }) => {
  return somePeople.map((someone, index) => {
    return (
      <Person
        click={() => delet(index)}
        key={someone.id}
        name={someone.name}
        age={someone.age}
        changed={(e) => change(e, someone.id)}
      />
    );
  });
};

export default Persons;
