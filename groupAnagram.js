function groupAnagram(strs) {
  //base case
  if (strs.length < 2) {
    return strs;
  }

  let map = new Map();
  for (let s of strs) {
    let sorted = s.split("").sort().join(""); // i am basically changing all the strings into the same string.
    if (map.has(sorted)) {
      map.set(sorted, [...map.get(sorted), s]); // im setting the key as the sorted string and value as the current string (s) itself.
    } else {
      map.set(sorted, [s]);
    }
  }
  return Array.from(map.values());
}

strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagram(strs));
