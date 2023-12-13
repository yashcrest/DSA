//using sorted in this problem does not give O(n) time complexity.

var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let longestsoFar = 0;

  for (let i = 0; i < nums.length; i++) {
    //checking if start of the sequence
    if (!set.has(nums[i] - 1)) {
      let length = 1;
      let currentNum = nums[i];
      while (set.has(currentNum + 1)) {
        length += 1;
        currentNum += 1;
      }
      longestsoFar = Math.max(length, longestsoFar);
    }
  }
  return longestsoFar;
};
nums = [100, 4, 200, 5, 1, 3, 2];

console.log(longestConsecutive(nums));
