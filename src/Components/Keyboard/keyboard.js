import "./keyboard.css";
import React from "react";
import { handleLetterClick } from "../../GameLogic/logic";
import { __esModule } from "@testing-library/jest-dom/dist/matchers";

export const Keyboard = () => {
  
  const keyRows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
  const backIcn = "🔙";
  const enterTxt = "Enter";

  const renderKey = (letter, key) => (
    <button
      onClick={handleLetterClick}
      key={key}
      className={letter}
      letter={letter}
    >
      {letter}
    </button>
  );

  return (
    <div className="key-container">
      {keyRows.map((row, i) => {
        const fullRow =
          i === 2 ? [enterTxt, ...row.split(""), backIcn] : row.split("");
        return <div className="key-row">{fullRow.map(renderKey)}</div>;
      })}
    </div>
  );
};
