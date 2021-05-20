import React, { useState } from "react";
import Review from "./Review";

function Game(props) {
  // State for hover button visibility
  const [style, setStyle] = useState({ visibility: "collapse" });

  // Dynamic colors for ratings
  const setRatingClass = (rate) => {
    if (rate >= 70) {
      return "rating-main green";
    } else if (rate >= 40) {
      return "rating-main orange";
    } else {
      return "rating-main red";
    }
  };

  return (
    // Only show review button when mouse enters
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
          <p className={setRatingClass(props.rating)}>{props.rating}</p>
        </div>
      </div>
      <Review
        style={style}
        body={props.body}
        title={props.title}
        rating={props.rating}
      />
    </div>
  );
}

export default Game;
