function longestRange(array) {
  let bestRange = [];
  let longestRange = 0;
  let nums = {};

  for (let num of array) nums[num] = true;

  for (let num of array) {
    if (nums[num] === false) continue;
    else {
      nums[num] = false;
      let currentLength = 1;
      let left = num - 1;
      let right = num + 1;
      while (left in nums) {
        nums[left] = false;
        currentLength += 1;
        left -= 1;
      }
      while (right in nums) {
        nums[right] = false;
        currentLength += 1;
        right += 1;
      }

      if (currentLength > longestRange) {
        longestRange = currentLength;
        bestRange = [left + 1, right - 1];
      }
    }
  }
  console.log(bestRange);
}

longestRange([
  19,
  -1,
  18,
  17,
  2,
  10,
  3,
  12,
  5,
  16,
  4,
  11,
  8,
  7,
  6,
  15,
  12,
  12,
  2,
  1,
  6,
  13,
  14,
]);
