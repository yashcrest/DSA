/*
program to print
      *
     ***
    *****
   *******
  *********
*/ 

function christsmasTree(s){
    let pointer = 1
    let new_pointer = s
    let blank = ' '
    let star = "*"
    for(i=0; i < s; i++){
        if (s > 0){
            console.log(blank.repeat(new_pointer), star.repeat(pointer))
        }
        pointer += 2
        new_pointer -= 1
    }
}
christsmasTree(5);
