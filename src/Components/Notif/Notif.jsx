import "./Notif.scss";
import ReactDOM from "react-dom";
import React from "react";

const BackDrop = (props) => {
  return <div className="notif-back" onClick={props.onCloseNotif}></div>;
};
const NotifWindow = (props) => {
  return (
    <div className="notif-window">
      <header>Error</header>
      <section>{props.vali}</section>
      <footer>
        <button onClick={props.onCloseNotif}>ok</button>
      </footer>
    </div>
  );
};

const Notif = (props) => {
  return (
    <React.Fragment>
      <BackDrop onCloseNotif={props.onCloseNotif} />
      {ReactDOM.createPortal(
        <BackDrop onCloseNotif={props.onCloseNotif} />,
        document.getElementById("back-drop")
      )}
      {ReactDOM.createPortal(
        <NotifWindow vali={props.vali} onCloseNotif={props.onCloseNotif} />,
        document.getElementById("notif-window")
      )}
    </React.Fragment>
  );
};
export default Notif;
