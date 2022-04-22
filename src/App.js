import React from "react";
import { GuessBlock } from "./Components/GuessBlock/guessBlock";
import { Keyboard } from "./Components/Keyboard/keyboard";
import { Title } from "./Components/Title/title";
import { UserInput } from "./Components/UserInput/UserInput";

export const App = () => {
  const word = "racing";
  const wordArray = word.toUpperCase().split("");

  console.log(wordArray);

  const guesses = ["1", "2", "3", "4", "5", "6"];

  return (
    <>
      <Title />
      {guesses.map((letter) => (
        <GuessBlock word={wordArray} key={letter} />
      ))}
      <UserInput actual={{ wordArray }} />
      <Keyboard />
    </>
  );
};
