import { Button, FormControl, Input, InputLabel } from "@mui/material";
import React from "react";
import "./userInput.css";

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("submitted");
};

export const UserInput = () => {
  return (
    <FormControl className="guessForm">
      <InputLabel>Guess:</InputLabel>

      <Input id="guess-input" type="text" name="guess" />
      <Button onClick={handleSubmit} type="submit" value="submit">
        SUBMIT
      </Button>
    </FormControl>
  );
};
