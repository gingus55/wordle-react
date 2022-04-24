let word = [];
let guess = 1;
let block = 0;

const putLetterInGuess = (letter) => {
  console.log(`put ${letter} in block`);
  getCurrentGuessBlock(letter);
};

const getCurrentGuessBlock = (letter) => {
  if (letter === "Del") {
    console.log("delete");
  } else if (block < 6) {
    const wantedBlock = `letterBlock${block}guess${guess}`;
    const currentBlock = document.getElementById(wantedBlock);
    currentBlock.textContent = letter;
    //   guess++;
    block++;
  } else {
    console.log("limit reached");
  }
};

export const handleLetterClick = (event) => {
  event.preventDefault();
  const letter = event.currentTarget.textContent;
  word.push(letter);
  console.log(word);

  putLetterInGuess(letter);
};
