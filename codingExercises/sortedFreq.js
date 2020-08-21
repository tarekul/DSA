function sortedFrequency(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  if (arr[arr.length - 1] < num) return -1;
  if (arr.length === 1) {
    if (arr[0] === num) return 1;
    else return -1;
  }
  const mid = Math.floor(arr.length / 2);
  const left = sortedFrequency(arr.slice(0, mid), num);
  const right = sortedFrequency(arr.slice(mid), num);

  if (left === -1 && right === -1) return -1;
  else if (left === -1) return right;
  else if (right === -1) return left;
  else return left + right;
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2));
