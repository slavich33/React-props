import React from "react";
import contacts from "../contacts.js";

function Heading() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
    </div>
  );
}
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p>{props.tel}</p>
        <p>{props.mail}</p>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <Heading />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        mail={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        mail={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        mail={contacts[2].email}
      />
    </div>
  );
}

export default App;
export { Heading };
