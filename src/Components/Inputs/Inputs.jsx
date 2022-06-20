import "./Inputs.scss";
// you can also use useState for geting inputs values
// import { useState, useRef } from "react";
import { useRef } from "react";
const Inputs = (props) => {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  const personName = useRef();
  const personAge = useRef();
  const addPersonHandler = (e) => {
    e.preventDefault();
    const person = {
      id: Math.random(),
      // name: name,
      // age: age,
      name: personName.current.value,
      age: personAge.current.value,
    };
    props.onAddPerson(person);
    // setName("");
    // setAge("");
    personName.current.value = "";
    personAge.current.value = "";
  };

  // const nameHandler = (e) => {
  //   setName(e.target.value);
  // };

  // const ageHandler = (e) => {
  //   setAge(e.target.value);
  // };

  return (
    <div className="inputs">
      <form className="inputs-form" action="">
        <div className="inputs-form-name">
          <label htmlFor="name">Name :</label>
          <input
            id="name"
            type="text"
            // value={name} onChange={nameHandler}
            ref={personName}
          />
        </div>
        <div className="inputs-form-age">
          <label htmlFor="age">Age :</label>
          <input
            type="number"
            name="age"
            id="age"
            // value={age}
            // onChange={ageHandler}
            ref={personAge}
          />
        </div>
        <button onClick={addPersonHandler} className="input-form-submit">
          Add
        </button>
      </form>
    </div>
  );
};
export default Inputs;
