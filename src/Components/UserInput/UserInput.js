import { Button } from "@mui/material";
import React from "react";
import "./userInput.css";

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("submitted");
};

export const UserInput = () => {
  return (
    <form className="guessForm">
      <label>
        Guess:
        <input type="text" name="guess" />
      </label>
      <Button onClick={handleSubmit} type="submit" value="submit">
        SUBMIT
      </Button>
    </form>
  );
};
