import React from "react";
import { GuessBlock } from "./Components/GuessBlock/guessBlock";
import { Keyboard } from "./Components/Keyboard/keyboard";
import { Title } from "./Components/Title/title";

export const App = () => {
  const word = "racing";
  const wordArray = word.toUpperCase().split("");

  console.log(wordArray);

  const guesses = ["guess1", "guess2", "guess3", "guess4", "guess5", "guess6"];

  return (
    <>
      <Title />
      {guesses.map((guess) => (
        <GuessBlock word={wordArray} key={guess} data={guess} />
      ))}
      <Keyboard />
    </>
  );
};
