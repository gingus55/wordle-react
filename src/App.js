import React from "react";
import { LetterBlock } from "./Components/LetterBlock/letterBlock";
import { UserInput } from "./Components/UserInput/UserInput";

export const App = () => {
  const word = "racing";
  const wordArray = word.toUpperCase().split("");

  const gameContext = React.useContext("");

  return (
    <>
      <div>Wordley</div>
      <div className="container">
        {wordArray.map((letter, index) => (
          <LetterBlock key={index} letter={letter} />
        ))}
      </div>
      <UserInput />
    </>
  );
};
