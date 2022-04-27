const original = "shrek";
export const wordArray = original.toUpperCase().split("");

let word = [];
let guess = 1;
let block = 0;

const putLetterInGuess = (letter) => {
  getCurrentGuessBlock(letter);
};

const getCurrentGuessBlock = (letter) => {
  if (letter === "Del") {
    handleDelClick();
  } else if (letter === "Enter") {
    handleEnterClick();
  } else if (block < wordArray.length) {
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
  word.map((letter, index) => {
    const included = wordArray.includes(letter);
    const placed = wordArray[index] === letter;
    const wantedBg = `letterBlock${index}guess${guess}`;
    const bkGround = document.getElementById(wantedBg);

    if (included && placed) {
      bkGround.style.backgroundColor = "green";
    } else if (included && !placed) {
      bkGround.style.backgroundColor = "yellow";
    } else {
      bkGround.style.backgroundColor = "grey";
    }
  });
};

const validateRealWord = async (word) => {
  const joined = word.join("");
  console.log(joined);
  const html = `https://api.dictionaryapi.dev/api/v2/entries/en/${joined}`;
  const handleResponse = function(response) {
    if (response.status !== 200) {
      throw new Error("Something went wrong");
    }

    return response.json();
  };

  const handleData = function(data) {
    console.log(data);
    const resultWord = data[0].word;
    if (resultWord) {
      return true;
    } else {
      return false;
    }
  };

  const handleError = function(error) {
    console.log(error);
    return false;
  };
  await fetch(html)
    .then(handleResponse)
    .then(handleData)
    .catch(handleError);
};

const handleEnterClick = async () => {
  if (word.length === wordArray.length) {
    let real = await validateRealWord(word);
    console.log(real);
    validateLetters(word, guess);
    guess++;
    block = 0;
    word = [];
  } else {
    alert("not enough characters");
  }
};

export const handleLetterClick = (event) => {
  event.preventDefault();
  const letter = event.currentTarget.textContent;
  putLetterInGuess(letter);
};
