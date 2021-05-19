import React, { useState } from "react";
import Review from "./Review";

function Game(props) {
  const [style, setStyle] = useState({ visibility: "collapse" });

  return (
    <div
      className="gameCard toFilter"
      onMouseEnter={(e) => {
        setStyle({ visibility: "visible" });
      }}
      onMouseLeave={(e) => {
        setStyle({ visibility: "collapse" });
      }}
    >
      <div className="cardbody">
        <img className="gameImage" src={props.img} alt="" />
        <div className="cardFooter">
          <h3 className="gameTitle">{props.title}</h3>
          <p className="rating">{props.rating}</p>
        </div>
      </div>
      <Review style={style} body={props.body} title={props.title} />
    </div>
  );
}

export default Game;
