import React from "react";
import './Card.css'

function Card({ person }) {
  return (
    <div className="person">
      <div>
        <h2>{person.name}</h2>
        <p>{person.email}</p>
      </div>
    </div>
  );
}

export default Card;
