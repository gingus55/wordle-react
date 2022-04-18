import { Button, FormControl, Input, InputLabel } from "@mui/material";
import React from "react";
import "./userInput.css";

export const UserInput = (actual) => {
  const actualLength = actual.actual.wordArray.length;

  const guess = [];

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    console.log(event.target.value);
  };

  const handleValue = (event) => {
    event.preventDefault();
    console.log(guess.length);
    console.log(actualLength);
    if (guess.length <= actualLength - 1) {
      guess.push(event.target.value);
      console.log(guess);
    } else if ((guess.length = actualLength)) {
      const guessArray = guess[guess.length - 1];
      console.log(guessArray);
    } else {
      alert("too looongg");
    }
  };
  return (
    <FormControl className="guessForm">
      <InputLabel>Guess:</InputLabel>

      <Input
        onChange={handleValue}
        inputProps={{
          maxLength: { actualLength },
        }}
        id="guess-input"
        type="text"
        name="guess"
      />
      <Button onClick={handleSubmit} type="submit">
        SUBMIT
      </Button>
    </FormControl>
  );
};
