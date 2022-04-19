import "./guessBlock.css";
import React from "react";
import { LetterBlock } from "../LetterBlock/letterBlock";

export const GuessBlock = ({ word }) => {
  return (
    <div className="container">
      {word.map((letter, index) => (
        <LetterBlock key={index} letter={letter} />
      ))}
    </div>
  );
};
