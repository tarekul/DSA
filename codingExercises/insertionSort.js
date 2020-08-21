function insertionSort(arr, cb = null) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (cb !== null) {
        const res = cb(arr[j], arr[j - 1]);
        if (res < 0) {
          swap(arr, j, j - 1);
        }
      } else {
        if (arr[j] > arr[j - 1]) break;
        if (arr[j] < arr[j - 1]) swap(arr, j, j - 1);
      }
    }
  }
  return arr;
}

function compare(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else if (a === b) return 0;
}

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(
  insertionSort(
    [
      { name: "Tarek", age: 26 },
      { name: "Siddik", age: 27 },
      { name: "Farzana", age: 21 },
      { name: "Farhana", age: 24 },
    ],
    oldestToYoungest
  )
);

console.log(insertionSort([0, -10, 7, 4]));
