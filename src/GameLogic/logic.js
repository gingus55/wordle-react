let word = [];

const putLetterInGuess = (letter) => {
  console.log("put letter in block");
};

export const handleLetterClick = (event) => {
  event.preventDefault();
  const letter = event.currentTarget.textContent;
  word.push(letter);
  console.log(word);
};
