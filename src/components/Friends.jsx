import React from "react";
import "./Friends.css";
const Friends = (props) => {
  return (
    <div className="container">
      Ismi: {props.name}
      <br />
      <img src={`images/${props.rasm}.png`} alt={props.name} /> <br />
      Yoshi: {props.age}
      <br />
      <div>
        Kasbi: {props.job}
      </div>
    </div>
  );
};

export default Friends;
