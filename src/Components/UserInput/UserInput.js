import { Button, FormControl, Input, InputLabel } from "@mui/material";
import React from "react";
import "./userInput.css";

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(event.target.value);
};

const handleValue = (event) => {
  event.preventDefault();
  console.log(event.target.value);
};

export const UserInput = () => {
  return (
    <FormControl className="guessForm">
      <InputLabel>Guess:</InputLabel>

      <Input onChange={handleValue} id="guess-input" type="text" name="guess" />
      <Button onClick={handleSubmit} type="submit">
        SUBMIT
      </Button>
    </FormControl>
  );
};
