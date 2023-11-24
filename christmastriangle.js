/*
This program prints the pattern of christmas tree
      *
     ***
    *****
   *******
  *********
*/

function christsmasTree(s) {
  let pointer = 1;
  let new_pointer = s;
  let blank = " ";
  let star = "*";
  for (i = 0; i < s; i++) {
    if (s > 0) {
      console.log(blank.repeat(new_pointer), star.repeat(pointer));
    }
    pointer += 2;
    new_pointer -= 1;
  }
}
christsmasTree(5);

// function pyramid(rows) {
//   for (let i = 0; i < rows; i++) {
//     let stars = "";
//     for (let j = 0; j <= i; j++) {
//       stars += "*";
//     }
//     console.log(stars);
//   }
// }

// pyramid(5);
