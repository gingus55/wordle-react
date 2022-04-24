let word = [];

const putLetterInGuess = (letter) => {
  console.log(`put ${letter} in block`);
  getCurrentGuessBlock(letter);
};

const getCurrentGuessBlock = (letter) => {
  const block = document.getElementById("letterBlock0guess1");
  block.textContent = letter;
  console.log(block);
  console.log(`this is where you want ${letter}`);
};

export const handleLetterClick = (event) => {
  event.preventDefault();
  const letter = event.currentTarget.textContent;
  word.push(letter);
  console.log(word);

  putLetterInGuess(letter);
};
