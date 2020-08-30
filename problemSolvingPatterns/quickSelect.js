// find the K-th smallest element in an unsorted list
function quickSelect(arr, k, left = 0, right = arr.length - 1) {
  if (k - 1 > right) return null;
  let pivIdx = pivotHelper(arr, left, right);
  if (pivIdx === k - 1) return arr[pivIdx];
  else if (pivIdx < k - 1) {
    return quickSelect(arr, k, pivIdx + 1, right);
  } else if (pivIdx > k - 1) {
    return quickSelect(arr, k, left, pivIdx - 1);
  } else return null;
}

function pivotHelper(arr, start, end) {
  let pivE = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] <= pivE) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(quickSelect([1, 5, 6, 22, 14, 2, 3, 10], 8));
//console.log(quickSelect([1, 2, 3, 4, 5, 6, 7, 8], 8));

/*
[1,2,3,4,5,6,7,8]
[2,3,4,5,6,7,8]
[3,4,5,6,7,8]
[4,5,6,7,8]
[5,6,7,8]
[6,7,8]
[7,8]
[8]


*/
