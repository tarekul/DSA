function pivot(arr, cb = null, start = 0, end = arr.length - 1) {
  const pivIdx = start;
  let swapIndx = start;
  for (let i = start + 1; i <= end; i++) {
    if (cb) {
      if (cb(arr[i], arr[pivIdx]) < 0) {
        swapIndx++;
        [arr[i], arr[swapIndx]] = [arr[swapIndx], arr[i]];
      }
    } else {
      if (arr[i] < arr[pivIdx]) {
        swapIndx++;
        [arr[i], arr[swapIndx]] = [arr[swapIndx], arr[i]];
      }
    }
  }
  [arr[0], arr[swapIndx]] = [arr[swapIndx], arr[0]];
  return swapIndx;
}

// console.log(pivot([4, 2, 5, 3, 6]));

function strLength(a, b) {
  return a.length - b.length;
}
console.log(
  pivot(["LilBub", "Gardfield", "Heathcliff", "Blue", "Grumpy"], strLength)
);
