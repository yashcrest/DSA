let sum = 0
function sumofN(num, sum){
    if(num <= 0){
        return
    }
    console.log(sum);
    sum = sum + num
    sumofN(num-1, sum)
}

sumofN(5, sum);