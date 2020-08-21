function findRotatedIndex(arr, num, left = 0, right = arr.length - 1) {
  if (left === right) {
    if (arr[left] === num) return left;
    else return -1;
  }

  const mid = Math.floor((left + right) / 2);
  const leftChild = findRotatedIndex(arr, num, left, mid);
  const rightChild = findRotatedIndex(arr, num, mid + 1, right);

  if (leftChild !== -1 && rightChild !== -1) return leftChild;
  else if (leftChild !== -1) return leftChild;
  else if (rightChild != -1) return rightChild;
  else return -1;
}

console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 22));
