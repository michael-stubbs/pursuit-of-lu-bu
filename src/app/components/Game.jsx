import React from "react";

function Game(props) {
  return (
    <div className="gameCard">
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
  );
}

export default Game;
