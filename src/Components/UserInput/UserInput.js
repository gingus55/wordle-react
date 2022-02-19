import "./userInput.css";

export const UserInput = () => {
  return (
    <form className="guessForm">
      <label>
        Guess:
        <input type="text" name="guess" />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
};
