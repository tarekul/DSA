/*
Worst Case  Avg Case  Best Case Space Complexity
  O(n^2)      O(n^2)   O(n)         O(1)

  best case is O(n) because if we have a nearly sorted array we compare and swap n times
  than we iterate over n more times to check if array is sorted. 
  This results in O(2n) = O(n)
*/

function bubbleSort(arr) {
  //this loop decrements as the next largest number is found and placed on right most index not yet sorted
  for (let i = arr.length - 1; i >= 0; i--) {
    let noSwap = true;
    //this loop continually compares and swaps elements until we reach index i
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  console.log(arr);
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

bubbleSort([5, 1, 2, 3, 4]);
