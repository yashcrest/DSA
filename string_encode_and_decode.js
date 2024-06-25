class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = "";
    for (let s of strs) {
      res += `${s.length}#${s}`;
    }
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let res = [];
    let i = 0;

    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j += 1;
      }
      let length = Number(str.slice(i, j)); //this line is taking the integer value out from the string
      res.push(str.slice(j + 1, j + 1 + length)); // remember, now j=# , so j+1 will mark the beginning of a new string, so j+1+length of string will give you the index for the next string in the array.
      i = j + 1 + length;
    }
    return res;
  }
}
