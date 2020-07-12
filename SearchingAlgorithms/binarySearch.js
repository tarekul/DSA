function binarySearch(arr, val) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    const mid = Math.floor((i + j) / 2);
    if (arr[mid] === val) return mid;
    val > arr[mid] ? (i = mid + 1) : (j = mid - 1);
  }
  return -1;
}

function binarySearchRecur(arr, val, i = 0, j = arr.length - 1) {
  const mid = Math.floor((i + j) / 2);
  if (arr[mid] === val) return mid;
  else if (i === j) return -1;
  else if (val > arr[mid]) return binarySearchRecur(arr, val, (i = mid + 1));
  else if (val < arr[mid]) return binarySearchRecur(arr, val, (j = mid - 1));
}

console.log(binarySearchRecur([1, 2, 3, 6, 9, 15, 18, 20, 27, 28, 32], 27));
