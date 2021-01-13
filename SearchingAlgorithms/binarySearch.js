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

const binarySearchRec = (nums, target, left = 0, right = nums.length - 1) => {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);
  if (nums[mid] === target) return mid;
  else if (left === right) return -1;
  else if (nums[mid] < target)
    return binarySearchRec(nums, target, mid + 1, right);
  else if (nums[mid] > target)
    return binarySearchRec(nums, target, left, mid - 1);
};

console.log(binarySearchRecur([2,5], 0));
