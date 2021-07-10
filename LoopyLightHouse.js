// If the number is a multiple of 3, print the string "Loopy" instead of the number.
// If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
// If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.

// range should be an array of 2 numbers representing the start and end values for the loop.
// multiples should be an array of 2 numbers representing the multiples you want to replace with words.
// words should be an array of 2 strings representing the words that will replace the multiples.

const loopyLighthouse = (range, multiples, words) => {
  let [num, limit] = range;
  while (num <= limit) logWordOrNum(multiples, words, num++);

  function logWordOrNum(multiples, words, num) {
    const [multiple1, multiple2, word1, word2] = [...multiples, ...words];
    const word = isWord(multiple1, word1, num) + isWord(multiple2, word2, num);
    console.log(word ? word : num);
  }
};

const isWord = (multiple, word, num) => (isMultiple(multiple, num) ? word : '');
const isMultiple = (multiple, num) => (num % multiple === 0 ? true : false);

loopyLighthouse([15, 90], [2, 5], ['Batty', 'Beacon']);
