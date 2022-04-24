import "./letterBlock.css";
import React from "react";

export const LetterBlock = ({ letter, data, guess }) => {
  return (
    <div className="letterBlock" data={data}>
      {guess}
    </div>
  );
};
