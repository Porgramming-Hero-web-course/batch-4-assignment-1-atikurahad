/*
Problem 1 
*/

function sumArray(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  //Smaple here
  console.log(sumArray([2,3,4,5,6]));