/*
Worst Case  Avg Case  Best Case
  O(n^2)      O(n^2)    O(n)

  best case is O(n) because if you have a nearly sorted array than for each element in the first loop
  you are comparing to one element in the second loop because if element is in right position
  all you have to pass is that is the current element larger than the element before it.
*/
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) swap(arr, j, j - 1);
    }
  }
  console.log(arr);
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

insertionSort([2, 3, 4, 1]);
/*
[]


*/
