{//Problem 2

function removeDuplicates(arr: number[]): number[] {
  const uniqueNumbers: number[] = [];

  for (const number of arr) {
    if (!uniqueNumbers.includes(number)) {
      uniqueNumbers.push(number);
    }
  }

  return uniqueNumbers;
}


}