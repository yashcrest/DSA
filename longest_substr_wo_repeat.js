// need to use sliding window to solve this
var lengthOfLongestSubstring = function (s) {
  // base case
  if (s.length <= 1) return s.length;
  let lp = 0;
  let maxSoFar = 0;
  let set = new Set();
  for (rp = 0; rp < s.length; rp++) {
    while (set.has(s[rp])) {
      set.delete(s[lp]);
      lp += 1;
    }
    set.add(s[rp]);
    maxSoFar = Math.max(maxSoFar, rp - lp + 1);
  }
  return maxSoFar;
};

s = "abcabbccabcde";
console.log(lengthOfLongestSubstring(s));
