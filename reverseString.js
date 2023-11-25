function reverseString(str){
    // return  str.split("").reverse().join() 
    let arr = Array.from(str)
    return arr.reverse().join();   
}

let str = "Yash"
console.log(reverseString(str));