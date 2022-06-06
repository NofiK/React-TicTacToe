import React, { useState } from "react";
import PlayBox from "./PlayBox";

const PlayField = (props) => {
  return (
    <div className="playField">
      <p className="playerX">Player X: {props.playerX}</p>
      {props.squares.map((box, i) => (
        <PlayBox key={i} value={box} onClick={() => props.click(i)} />
      ))}
      <p className="playerO">Player O: {props.playerO}</p>
    </div>
  );
};

export default PlayField;
