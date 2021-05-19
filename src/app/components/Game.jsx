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
        <img
          className="gameImage"
          src="https://cdn.thegamesdb.net/images/original/boxart/front/29386-1.jpg"
          alt=""
        />
        <div className="cardFooter">
          <h3 className="gameTitle">Dynasty Warriors 8 XL</h3>
          <p className="rating">8/10</p>
        </div>
      </div>
      <Review style={style} />
    </div>
  );
}

export default Game;
