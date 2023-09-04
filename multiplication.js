function multiplicationArry(arr){
    let answerArray = []
    for(let i =0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            answerArray.push(arr[i] * arr[j])
        }
    }
    return answerArray
}
console.log(multiplicationArry([2,3,4,5]))