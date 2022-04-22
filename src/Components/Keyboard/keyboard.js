import "./keyboard.css";
import React from "react";

export const Keyboard = () => {
  const keys = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "Del",
    "Enter",
  ];

  let word = [];

  const handleClick = (event) => {
    event.preventDefault();
    const letter = event.currentTarget.textContent;
    word.push(letter);
    console.log(word);
  };

  return (
    <div className="key-container">
      {keys.map((letter, index) => (
        <button
          onClick={handleClick}
          key={index}
          className={letter}
          letter={letter}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};
