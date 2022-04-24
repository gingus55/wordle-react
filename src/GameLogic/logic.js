let word = [];

const putLetterInGuess = (letter) => {
  console.log(`put ${letter} in block`);
};

const getCurrentGuessBlock = () => {
  console.log("this is the guess block you are looking for");
};

export const handleLetterClick = (event) => {
  event.preventDefault();
  const letter = event.currentTarget.textContent;
  word.push(letter);
  console.log(word);

  putLetterInGuess(letter);
};
