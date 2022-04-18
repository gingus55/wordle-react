import "./letterBlock.css";
import React from "react";

export const LetterBlock = ({ letter, color }) => {
  return (
    <div className="letterBlock" style={{ background: color }}>
      {letter}
    </div>
  );
};
