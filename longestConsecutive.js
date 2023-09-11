//using sorted in this array is not the optimal solution

var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    //checking if start of the sequence
    if (!set.has(nums[i] - 1)) {
      let length = 1;
      let currentNum = nums[i];
      while (set.has(currentNum + 1)) {
        length += 1;
        currentNum += 1;
      }
      longest = Math.max(length, longest);
    }
  }
  return longest;
};
nums = [100, 4, 200, 1, 3, 2];

longestConsecutive(nums);
