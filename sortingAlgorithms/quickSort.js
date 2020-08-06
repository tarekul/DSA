/*
Worst Case  Avg Case  Best Case
  O(n^2)      O(nlogn)   O(nlogn)

  worse case is n^2 if the arr is already sorted because if you choose the first element as the
  pivot point you are doing O(n) decompositions and O(n) comparisons on each level
  ex. [1,2,3,4,5,6,7]

  [1] [2,3,4,5,6,7]
    [2] [3,4,5,6,7]
      [3] [4,5,6,7]
        [4] [5,6,7]
          [5] [6,7]
            [6] [7]
              [15]
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (right - left > 1) {
    const pivIdx = pivotHelper(arr, left, right);
    quickSort(arr, left, pivIdx - 1);
    quickSort(arr, pivIdx + 1, right);
  }
  return arr;
}

const pivotHelper = (arr, start, end) => {
  const pivot = arr[start];
  let place = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      place++;
      swap(arr, i, place);
    }
  }
  swap(arr, start, place);

  return place;
};
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(quickSort([5, 2, 1, 8, 4, 7]));
