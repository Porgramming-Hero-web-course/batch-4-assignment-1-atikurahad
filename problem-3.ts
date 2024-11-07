//Problem 3

function countWordOccurrences(sentence: string, word: string): number {
  const sentenceLowerCase = sentence.toLowerCase();
  const wordLowerCase = word.toLowerCase();

  const splitWords = sentenceLowerCase.split(" ");

  let count = 0;
  for (const total of splitWords) {
    if (total === wordLowerCase) {
      count++;
    }
  }

  return count;
}
// console.log(
//   countWordOccurrences(
//     "I love Bangladesh and bangladesh is my homeland",
//     "bangladesh"
//   )
// ); 
