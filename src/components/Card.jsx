import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = () => {
  const [degrees, setDegrees] = useState(0);
  const [color, setColor] = useState("rgb(247, 115, 7)");

  useEffect(() => {
    if (degrees === 0) {
      setColor("rgb(189, 221, 44)");
    } else if (degrees > 0) {
      setColor("rgb(247, 115, 7)");
    } else {
      setColor("rgb(11, 155, 238)");
    }
  }, [degrees]);

  return (
    <div className="container">
      <div className="circle" style={{ backgroundColor: color }}>
        {degrees} °С
      </div>
      
        <div> <button onClick={() => setDegrees((prevDegrees) => prevDegrees + 1)}>
          ➕
        </button>
        <button onClick={() => setDegrees((prevDegrees) => prevDegrees - 1)}>
          ➖
        </button></div>
       
      
    </div>
  );
};

export default Card;
