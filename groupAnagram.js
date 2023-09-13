function groupAnagram(strs) {
  if (strs.length < 2) {
    return strs;
  }
  for (let i = 0; i < strs.length; i++) {
    for (let j = i + 1; j < strs.length; j++) {
      if (
        strs[i].split("").sort().join("") === strs[j].split("").sort().join("")
      ) {
      }
    }
  }
}
