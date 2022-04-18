const letterMatchEnum = {
  NO: 0,
  NEAR: 1,
  YES: 2,
};

export const enumMapColors = ['coral', 'goldenrod', 'mediumseagreen'];

export const startGame = () => {
  // Select a random word
  const word = "replace";

  const guesses = [];

  // Private function for checking guesses
  const checker = (guess) => {
    if (guess.length !== word.length) return;
    guesses.push(guess);
    const matches = [];

    for (let i in guess) {
      const letter = guess[i];
      if (word[i] === letter) {
        matches.push(letterMatchEnum.YES);
        continue;
      }
      if (word.includes(letter)) {
        matches.push(letterMatchEnum.NEAR);
        continue;
      }
      matches.push(letterMatchEnum.NO);
    }

    return matches;
  };

  // return length and checking function;
  return {
    length: word.length,
    checker,
  };
};
