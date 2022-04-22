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

  return (
    <div className="key-container">
      {keys.map((letter, index) => (
        <button key={index} className={letter} letter={letter}>
          {letter}
        </button>
      ))}
    </div>
  );
};
