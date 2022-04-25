import "./letterBlock.css";
import React from "react";

export const LetterBlock = ({ letter, data, guess, row }) => {
  const classy = `letterBlock${data}${row}`;
  return (
    <div className="letterBlock" id={classy} data={data}>
      {guess}
    </div>
  );
};
