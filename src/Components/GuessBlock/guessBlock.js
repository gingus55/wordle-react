import "./guessBlock.css";
import React from "react";
import { LetterBlock } from "../LetterBlock/letterBlock";

export const GuessBlock = ({ word, data }) => {
  return (
    <div className={data}>
      {word.map((letter, index) => (
        <LetterBlock key={index} letter={letter} data={index} />
      ))}
    </div>
  );
};
