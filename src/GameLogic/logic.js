const original = "racing";
export const wordArray = original.toUpperCase().split("");

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
  if (block > 0) {
    console.log("Del has been clicked");
    block--;
    const wantedBlock = `letterBlock${block}guess${guess}`;
    const currentBlock = document.getElementById(wantedBlock);
    currentBlock.textContent = "";
    word.pop();
  } else {
    console.log("nothing to delete");
  }
};

const validateLetters = (word, guess) => {
  console.log(`validating ${word}`);
  word.map((letter, index) => {
    const included = wordArray.includes(letter);
    const placed = wordArray.includes(letter, index);
    console.log(guess);
    const wantedBg = `letterBlock${index}guess${guess}`;
    const bkGround = document.getElementById(wantedBg);

    if (included && placed) {
      bkGround.style.backgroundColor = "green";
    } else if (included && !placed) {
      // colour yellow
      console.log("in the word");
      bkGround.style.backgroundColor = "yellow";
    } else {
      console.log("not in the word");
      bkGround.style.backgroundColor = "grey";
    }
  });
};

const handleEnterClick = () => {
  if (word.length === 6) {
    validateLetters(word, guess);
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
