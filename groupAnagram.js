function groupAnagram(strs) {
  //base case
  if (strs.length < 2) {
    return strs;
  }

  let map = new Map();
  for (let s of strs) {
    let sorted = s.split("").sort().join("");
    if (map.has(sorted)) {
      map.set(sorted, [...map.get(sorted), s]);
    } else {
      map.set(sorted, [s]);
    }
    return Array.from(map.values());
  }
}
