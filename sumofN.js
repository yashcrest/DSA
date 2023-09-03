// let sum = 0
// function sumofN(num, sum){
//     if(num <= 0){
//         return
//     }
//     sum = sum + num
//     console.log(sum);
//     sumofN(num-1, sum)
// }

// sumofN(5, sum);

//Sum of all elements of array
// function sumOfArr (arr){
//     // base case
//     if(arr.length === 0) return 0;

//     //recursion case
//     return arr[0] + sumOfArr(arr.slice(1));
// }
// console.log(sumOfArr([1,2,3,4,5]))


//Counts total number of elements in array
// function totalElements(arr){
//     //base case
//     if (arr.length === 0) {
//         return 0;
//     }
//     return 1 + totalElements(arr.slice(1));
// }
// console.log(totalElements([1,2,3,4]))


//Max number in array
function maxNumber (arr) {
    let maxNum = null
    // base case
    if (arr.length === 0){
        return null
    } 
    return Math.max(...arr)
}
console.log(maxNumber([1,2]))