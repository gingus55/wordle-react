import "./letterBlock.css";
import React from "react";

export const LetterBlock = ({ index, letter, guess }) => {
  return (
    <div className="letterBlock" key={index}>
      {guess}
    </div>
  );
};
