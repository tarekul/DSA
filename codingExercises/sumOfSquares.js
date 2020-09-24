function findSumOfSquares(nums) {
  if (nums.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += Math.pow(nums[i], 2);
  }
  return sum;
}

console.log(findSumOfSquares([0, 8, 1]));
