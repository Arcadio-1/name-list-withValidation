import { useState } from "react";
import "./App.scss";
import Inputs from "./Components/Inputs/Inputs";
import List from "./Components/List/List";
import Notif from "./Components/Notif/Notif";
import Validator from "./Components/Validator/validator";
import React from "react";

function App() {
  const pList = [
    {
      id: "p1",
      name: "max",
      age: 31,
    },
    {
      id: "p2",
      name: "allis",
      age: 31,
    },
    {
      id: "p3",
      name: "anna",
      age: 24,
    },
    {
      id: "p4",
      name: "sarah",
      age: 21,
    },
  ];
  const [vall, setVall] = useState("");
  const [persons, setPersons] = useState(pList);
  const [showErorr, setShowErorr] = useState(false);

  const onAddPerson = (per) => {
    const mess = Validator(per);

    if (mess === "true") {
      setPersons((prevPers) => {
        return [per, ...prevPers];
      });
    } else {
      setVall(() => {
        return mess;
      });
      setShowErorr(true);
    }
  };

  const closeNotif = () => {
    setShowErorr(false);
  };

  return (
    <React.Fragment>
      {showErorr && <Notif vali={vall} onCloseNotif={closeNotif} />}
      <div className="container">
        <Inputs onAddPerson={onAddPerson} />
        <List persons={persons} />
      </div>
    </React.Fragment>
  );
}

export default App;
