import React from "react";
import { GuessBlock } from "./Components/GuessBlock/guessBlock";
import { LetterBlock } from "./Components/LetterBlock/letterBlock";
import { UserInput } from "./Components/UserInput/UserInput";

export const App = () => {
  const word = "racing";
  const wordArray = word.toUpperCase().split("");

  console.log(wordArray);

  // const gameContext = React.useContext("");

  return (
    <>
      <div>Wordley</div>
      <GuessBlock word={wordArray} />
      <GuessBlock word={wordArray} />
      <UserInput actual={{ wordArray }} />
    </>
  );
};
