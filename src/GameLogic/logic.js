let word = [];
let guess = 1;
let block = 0;

const putLetterInGuess = (letter) => {
  console.log(`put ${letter} in block`);
  getCurrentGuessBlock(letter);
};

const getCurrentGuessBlock = (letter) => {
  if (letter === "Del") {
    handleDelClick();
  } else if (letter === "Enter") {
    handleEnterClick();
  } else if (block < 6) {
    const wantedBlock = `letterBlock${block}guess${guess}`;
    const currentBlock = document.getElementById(wantedBlock);
    currentBlock.textContent = letter;
    word.push(letter);

    block++;
  } else {
    console.log("limit reached");
  }
};

const handleDelClick = () => {
  console.log("Del has been clicked");
  block--;
  const wantedBlock = `letterBlock${block}guess${guess}`;
  const currentBlock = document.getElementById(wantedBlock);
  currentBlock.textContent = "";
  word.pop();
};

const validateLetters = (word) => {
  console.log(`validating ${word}`);
};

const handleEnterClick = () => {
  if (word.length === 6) {
    validateLetters(word);
    guess++;
    block = 0;
    word = [];
  } else {
    alert("not enough characters");
  }
  console.log(word);

  console.log("Enter has been clicked");
};

export const handleLetterClick = (event) => {
  event.preventDefault();
  const letter = event.currentTarget.textContent;
  putLetterInGuess(letter);
};
