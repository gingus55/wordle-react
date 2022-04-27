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
    console.log(letter, index);
    console.log(wordArray);
    const included = wordArray.includes(letter);
    const placed = wordArray[index] === letter;
    console.log(placed);
    const wantedBg = `letterBlock${index}guess${guess}`;
    const bkGround = document.getElementById(wantedBg);

    if (included && placed) {
      console.log("right place");
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

const validateRealWord = async (word) => {
  const joined = word.join("");
  const html = `https://api.dictionaryapi.dev/api/v2/entries/en/${joined}`;
  const handleResponse = function(response) {
    if (response.status !== 200) {
      throw new Error("Something went wrong");
    }

    return response.json();
  };

  const handleData = function(data) {
    console.log(data);
  };

  const handleError = function(error) {
    console.log(error);
  };

  const result = await fetch(html)
    .then(handleResponse)
    .then(handleData)
    .catch(handleError);

  console.log(result);

  if (result) {
    return true;
  }
};

const handleEnterClick = () => {
  if (word.length === 6) {
    validateRealWord(word);
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
