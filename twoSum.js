let array = [1, 2, 3, 4, 5, 6];

function twoSum(array, target) {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (hashMap.has(diff)) {
      return [i, hashMap.get(diff)];
    } else {
      hashMap.set(nums[i], i);
    }
  }
  return []; // if the solution not present, return an empty array.
}

console.log(twoSum(array, 5));
