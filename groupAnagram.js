// function groupAnagram(strs) {
//   //base case
//   if (strs.length < 2) {
//     return strs;
//   }

//   let map = new Map();
//   for (let s of strs) {
//     let sorted = s.split("").sort().join("");
//     if (map.has(sorted)) {
//       map.set(sorted, [...map.get(sorted), s]);
//     } else {
//       map.set(sorted, [s]);
//     }
//     return Array.from(map.values());
//   }
// }

//top k frequent elements

function topKFrequentElements(nums, k) {
  //base case
  if (nums.length < 2) {
    return nums;
  }
  let map = new Map();
  //frequency counter
  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
}
