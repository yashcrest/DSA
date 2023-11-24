// function groupAnagram(strs) {
//   //base case
//   if (strs.length < 2) {
//     return strs;
//   }

//   let map = new Map();
//   for (let s of strs) {
//     let sorted = s.split("").sort().join(""); // i am basically changing all the strings into the same string.
//     if (map.has(sorted)) {
//       map.set(sorted, [...map.get(sorted), s]); // im setting the key as the sorted string and value as the current string (s) itself.
//     } else {
//       map.set(sorted, [s]);
//     }
//   }
//   return Array.from(map.values());
// }

strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagram(strs));

// alt solution - less time complexity.
function groupAnagram(strs) {
  const res = new Map();

  for (let s of strs) {
    const count = new Array(26).fill(0); //declaring an array of 26 elements with 0 i.e. [0,0,0,0...]
    for (c of s) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)]++; //still confused with this line
    }
    const key = count.join("#"); //create a unique key from the count array
    if (!res.has(key)) {
      res.set(key, []); // Initialize if key doesn't exist
    }
    res.get(key).push(s);
  }
  return Array.from(res.values());
}
