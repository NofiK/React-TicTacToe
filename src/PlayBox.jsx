import React from "react";

const PlayBox = (props) => {
  return (
    <button type="submit" className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default PlayBox;
