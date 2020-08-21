function bubbleSort(arr, comparator = null) {
  for (let k = arr.length - 1; k > 0; k--) {
    let noSwap = true;
    for (let i = 0; i < k; i++) {
      if (!comparator) {
        if (arr[i] > arr[i + 1]) {
          swap(arr, i, i + 1);
          noSwap = false;
        }
      } else {
        const res = comparator(arr[i], arr[i + 1]);
        if (res === 1) {
          swap(arr, i, i + 1);
          noSwap = false;
        }
      }
    }
    if (noSwap) break;
  }
  return arr;
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function compare(a, b) {
  if (a < b) return -1;
  else if (a === b) return 0;
  else if (a > b) return 1;
}

console.log(bubbleSort([4, 20, 12, 10, 7, 9], compare));
